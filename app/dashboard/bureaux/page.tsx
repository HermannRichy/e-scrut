import prisma from "@/lib/prisma";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export default async function BureauxPage() {
    const bureaux = await prisma.bureauVote.findMany({
        include: {
            arrondissement: true,
        },
        orderBy: {
            createdAt: "desc",
        },
    });

    return (
        <main className="container mx-auto py-8 px-4">
            <Card>
                <CardHeader>
                    <CardTitle>Gestion des bureaux de vote</CardTitle>
                    <CardDescription>
                        Liste de tous les bureaux de vote existants
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    {bureaux.length === 0 ? (
                        <div className="text-center py-8 text-muted-foreground">
                            Aucun bureau de vote enregistré pour le moment.
                        </div>
                    ) : (
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Arrondissement</TableHead>
                                    <TableHead>Centre de vote</TableHead>
                                    <TableHead>Code bureau</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {bureaux.map((bureau) => (
                                    <TableRow key={bureau.id}>
                                        <TableCell className="font-medium">
                                            {bureau.arrondissement.nom}
                                        </TableCell>
                                        <TableCell>{bureau.centreVote}</TableCell>
                                        <TableCell>{bureau.codeBureau}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    )}
                </CardContent>
            </Card>
        </main>
    );
}

