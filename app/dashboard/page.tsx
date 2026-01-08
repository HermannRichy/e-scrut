import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import Logout from "@/components/sections/Logout";

export default function DashboardPage() {
    async function handleSignOut() {
        await authClient.signOut();
    }

    return (
        <main>
            <h2>Page Dashboard</h2>
            <Logout />
        </main>
    );
}
