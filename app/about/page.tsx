import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">About</h1>

      <Card>
        <CardHeader>
          <CardTitle>Why This Project Exists</CardTitle>
        </CardHeader>
        <CardContent className="prose dark:prose-invert max-w-none">
          <p>
            Hey, I'm creating this because I got tired of asking everyone how to do this and that—now I can just refer
            back here and help others like me!
          </p>

          <h3>Project Goals</h3>
          <ul>
            <li>Provide a centralized repository for cybersecurity tools and resources</li>
            <li>Make it easy to find and use common penetration testing methodologies</li>
            <li>Share knowledge and best practices with the community</li>
            <li>Streamline the reporting process for security assessments</li>
          </ul>

          <h3>How to Contribute</h3>
          <p>
            If you'd like to contribute to this project, please reach out to one of our current contributors. We welcome
            new tools, cheatsheets, methodologies, and reporting scripts.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

