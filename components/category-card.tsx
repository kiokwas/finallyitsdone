import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import type { ReactNode } from "react"

interface CategoryCardProps {
  title: string
  description: string
  icon: ReactNode
  href: string
}

export function CategoryCard({ title, description, icon, href }: CategoryCardProps) {
  return (
    <Link href={href} className="block">
      <Card className="h-full transition-all hover:shadow-md">
        <CardHeader>
          <div className="flex items-center gap-2">
            {icon}
            <CardTitle>{title}</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <CardDescription>{description}</CardDescription>
        </CardContent>
      </Card>
    </Link>
  )
}

