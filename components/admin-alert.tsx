"use client"

import { AlertCircle, X } from "lucide-react"
import { Alert, AlertDescription } from "../components/ui/alert"
import { Button } from "../components/ui/button"
import { useState } from "react"

interface AdminAlertProps {
  message: string
}

export function AdminAlert({ message }: AdminAlertProps) {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <Alert className="relative">
      <AlertCircle className="h-4 w-4" />
      <AlertDescription className="flex-1">{message}</AlertDescription>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-2 top-2 h-6 w-6"
        onClick={() => setIsVisible(false)}
      >
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </Button>
    </Alert>
  )
}

