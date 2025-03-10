import { Badge } from "../..//components/ui/badge"
import { Button } from "../../components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../components/ui/card"
import { Download } from "lucide-react"

const reports = [
    {
        id: "report1",
        name: "Tracker to Docx",
        author: "Jam",
        description: "Convert tracking data to Word document format",
        version: "1.0.2",
    },
    {
        id: "report2",
        name: "SCR Tracker",
        author: "Rafiq",
        description: "Track Security Control Review findings",
        version: "2.1.0",
    },
    {
        id: "report3",
        name: "Vulnerability Report Generator",
        author: "Sarah",
        description: "Generate comprehensive vulnerability reports",
        version: "1.3.5",
    },
    {
        id: "report4",
        name: "Compliance Checker",
        author: "Mike",
        description: "Verify compliance with security standards",
        version: "0.9.1",
    },
]

export default function ReportingPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Reporting</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {reports.map((report) => (
                    <Card key={report.id}>
                        <CardHeader>
                            <div className="flex items-center justify-between">
                                <CardTitle>{report.name}</CardTitle>
                                <Badge variant="outline">v{report.version}</Badge>
                            </div>
                            <CardDescription>by {report.author}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm">{report.description}</p>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full">
                                <Download className="h-4 w-4 mr-2" />
                                Download
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    )
}

