"use client"
import { Auth } from "./Auth"
import { toast } from "sonner"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getCookie, deleteCookie } from "cookies-next"

export default function AuthWrapper({ onClose }: { onClose: () => void }) {
  const [showConfirmLogout, setShowConfirmLogout] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const token = getCookie("accessToken")
    if (token) {
      setShowConfirmLogout(true)
    }
  }, [])

  const handleLogout = () => {
    deleteCookie("accessToken")
    deleteCookie("refreshToken")
    localStorage.removeItem("user")

    toast.success("Вы вышли из аккаунта.")
    setShowConfirmLogout(false)
    onClose()

    setTimeout(() => {
      router.refresh()
    }, 200)
  }

  const handleCancel = () => {
    setShowConfirmLogout(false)
    onClose()
  }

  if (showConfirmLogout) {
    return (
      <div className="p-6 flex flex-col items-center text-center">
        <div className="bg-red-100 p-4 rounded-full mb-4">
          <AlertTriangle className="text-red-500 w-8 h-8" />
        </div>
        <h2 className="text-lg font-semibold mb-2">Вы точно хотите выйти?</h2>
        <p className="text-sm text-muted-foreground mb-6">Ваши данные будут удалены с устройства.</p>
        <div className="flex gap-4 justify-center">
          <Button variant="outline" onClick={handleCancel}>Отмена</Button>
          <Button className="bg-red-600 text-white hover:bg-red-700" onClick={handleLogout}>
            Выйти
          </Button>
        </div>
      </div>
    )
  }

  return <Auth onClose={onClose} />
}
