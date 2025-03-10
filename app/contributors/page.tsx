import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card"
import { Avatar, AvatarFallback } from "../../components/ui/avatar"

const contributors = [
    {
        id: "contributor1",
        name: "Rafiq",
        role: "Lead lazy ass",
        contributions: ["Tools", "Dashboard", "Pentest Notes", "Reporting Scripts"],
        avatar: "A",
    },
    {
        id: "contributor2",
        name: "Azwan",
        role: "crazy ass guy",
        contributions: ["Cheatsheets", "Methodologies", "Pentest Scripts"],
        avatar: "AB",
    },
]

export default function ContributorsPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Contributors</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {contributors.map((contributor) => (
                    <Card key={contributor.id}>
                        <CardHeader className="flex flex-row items-center gap-4">
                            <Avatar className="h-12 w-12">
                                <AvatarFallback>{contributor.avatar}</AvatarFallback>
                            </Avatar>
                            <div>
                                <CardTitle>{contributor.name}</CardTitle>
                                <CardDescription>{contributor.role}</CardDescription>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <h3 className="font-medium mb-2">Contributions:</h3>
                            <ul className="list-disc list-inside text-sm">
                                {contributor.contributions.map((contribution, index) => (
                                    <li key={index}>{contribution}</li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}

