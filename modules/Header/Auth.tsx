"use client"
import { toast } from "sonner"
import { FormEvent } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Login, Register } from "@/service/Auth"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export function Auth({ onClose }: { onClose: () => void }) {
  const login = Login()
  const register = Register()

  function handleLogin(e: FormEvent) {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const data = {
      email: form.email.value,
      password: form.password.value
    }

    login.mutate(data, {
      onSuccess: () => {
        toast.success("Login successful!")
        onClose()
      },
      onError: () => {
        toast.error("Login failed. Check your credentials.")
      }
    })
  }

  function handleRegister(e: FormEvent) {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const data = {
      fullname: form.fullname.value,
      email: form.email.value,
      password: form.password.value
    }

    register.mutate(data, {
      onSuccess: () => {
        toast.success("Registered successfully! Now you can log in.")
      },
      onError: () => {
        toast.error("Registration failed. Try again.")
      }
    })
  }

  return (
    <Tabs defaultValue="login" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="login">Login</TabsTrigger>
        <TabsTrigger value="register">Register</TabsTrigger>
      </TabsList>

      <TabsContent value="login">
        <Card>
          <CardHeader>
            <CardTitle>Login</CardTitle>
          </CardHeader>
          <form onSubmit={handleLogin}>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input name="email" type="email" placeholder="email@example.com" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="password">Password</Label>
                <Input name="password" type="password" placeholder="******" />
              </div>
            </CardContent>
            <CardFooter className="mb-3">
              <Button type="submit" className="bg-black text-white">Login</Button>
            </CardFooter>
          </form>
        </Card>
      </TabsContent>

      <TabsContent value="register">
        <Card>
          <CardHeader>
            <CardTitle>Register</CardTitle>
          </CardHeader>
          <form onSubmit={handleRegister}>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label>Fullname</Label>
                <Input name="fullname" placeholder="John Doe" />
              </div>
              <div className="space-y-1">
                <Label>Email</Label>
                <Input name="email" type="email" placeholder="email@example.com" />
              </div>
              <div className="space-y-1">
                <Label>Password</Label>
                <Input name="password" type="password" placeholder="******" />
              </div>
            </CardContent>
            <CardFooter>
              <Button type="submit">Register</Button>
            </CardFooter>
          </form>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
