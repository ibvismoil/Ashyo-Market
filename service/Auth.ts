import { instance } from "@/hooks/instance"
import { useMutation } from "@tanstack/react-query"
import { setCookie } from "cookies-next"

interface LoginType {
  email: string
  password: string
}

interface RegisterType {
  fullname: string
  email: string
  password: string
}

export const Login = () => {
  return useMutation({
    mutationFn: async (data: LoginType) => {
      const res = await instance().post("auth/login", data)
      const { accessToken, refreshToken } = res.data

      setCookie("accessToken", accessToken, { maxAge: 60 * 60 * 24 * 7 }) 
      setCookie("refreshToken", refreshToken, { maxAge: 60 * 60 * 24 * 30 })

      return res.data
    },
  })
}

export const Register = () => {
  return useMutation({
    mutationFn: async (data: RegisterType) => {
      const res = await instance().post("auth/register", data)
      return res.data
    },
  })
}
