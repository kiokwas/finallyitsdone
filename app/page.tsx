import { BlurText } from "../components/blur-text"
import { AdminAlert } from "../components/admin-alert"
import { CategoryCard } from "../components/category-card"
import { Shield, FileText, FileCode, Users } from "lucide-react"
export default function Home() {
    return (
        <div className="container py-10">
            <AdminAlert message="Welcome to the new dashboard! Check out the updated tools section." />

            <div className="flex flex-col items-center justify-center py-10">
                <BlurText text="I am so lazy" className="text-4xl font-bold mb-6" />
                <p className="text-center text-muted-foreground mb-8 max-w-md">
                    bunch of tools and notes that you never know when you need it.
                </p>
            </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        <CategoryCard
          title="Pentest Notes / Walkthrough"
          description="Cheatsheets and configuration guides for penetration testing"
          icon={<FileText className="h-6 w-6" />}
          href="/pentest-notes"
        />

        <CategoryCard
          title="Tools"
          description="Download and update cybersecurity tools"
          icon={<Shield className="h-6 w-6" />}
          href="/tools"
        />

        <CategoryCard
          title="Reporting"
          description="Scripts and templates for report generation"
          icon={<FileCode className="h-6 w-6" />}
          href="/reporting"
        />

        <CategoryCard
          title="Contributors"
          description="Meet the people behind this project"
          icon={<Users className="h-6 w-6" />}
          href="/contributors"
        />
      </div>
    </div>
  )
}

