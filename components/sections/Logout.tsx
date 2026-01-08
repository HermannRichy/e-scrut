"use client";

import { authClient } from "@/lib/auth-client";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function Logout() {
    const router = useRouter();

    const handleLogout = async () => {
        try {
            await authClient.signOut();
            toast.success("Déconnexion réussie");
            router.push("/");
            router.refresh();
        } catch (error) {
            toast.error("Erreur lors de la déconnexion");
        }
    };
    return (
        <Button
            variant="destructive"
            onClick={() => {
                handleLogout();
            }}
        >
            Se déconnecter
        </Button>
    );
}
