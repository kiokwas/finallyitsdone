import { Badge } from "../../components/ui/badge"
import { Button } from "../../components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../components/ui/card"
import { Download, RefreshCw } from "lucide-react"

const tools = [
    {
        id: "tool1",
        name: "Network Scanner",
        description: "Scan networks for vulnerabilities and open ports",
        version: "1.2.3",
        status: "installed",
        newVersion: null,
    },
    {
        id: "tool2",
        name: "Password Cracker",
        description: "Advanced password cracking utility",
        version: "2.1.0",
        status: "update-available",
        newVersion: "2.2.0",
    },
    {
        id: "tool3",
        name: "Traffic Analyzer",
        description: "Analyze network traffic for suspicious activity",
        version: "3.0.1",
        status: "installed",
        newVersion: null,
    },
    {
        id: "tool4",
        name: "Vulnerability Scanner",
        description: "Comprehensive vulnerability scanning tool",
        version: "1.5.2",
        status: "update-available",
        newVersion: "1.6.0",
    },
    {
        id: "tool5",
        name: "Forensic Toolkit",
        description: "Digital forensics and investigation tools",
        version: "4.2.1",
        status: "installed",
        newVersion: null,
    },
    {
        id: "tool6",
        name: "Encryption Tool",
        description: "Secure file and communication encryption",
        version: "2.0.0",
        status: "installed",
        newVersion: null,
    },
]

export default function ToolsPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Tools</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tools.map((tool) => (
                    <Card key={tool.id}>
                        <CardHeader>
                            <div className="flex items-center justify-between">
                                <CardTitle>{tool.name}</CardTitle>
                                {tool.status === "installed" ? (
                                    <Badge variant="outline" className="bg-green-500/10 text-green-500 border-green-500/20">
                                        Installed
                                    </Badge>
                                ) : (
                                    <Badge variant="outline" className="bg-amber-500/10 text-amber-500 border-amber-500/20">
                                        Update Available
                                    </Badge>
                                )}
                            </div>
                            <CardDescription>v{tool.version}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm">{tool.description}</p>
                        </CardContent>
                        <CardFooter className="flex justify-between">
                            <Button>
                                <Download className="h-4 w-4 mr-2" />
                                Download
                            </Button>
                            {tool.status === "update-available" && (
                                <Button variant="outline">
                                    <RefreshCw className="h-4 w-4 mr-2" />
                                    Update to v{tool.newVersion}
                                </Button>
                            )}
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    )
}

