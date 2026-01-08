import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import prisma from "@/lib/prisma";

export const auth = betterAuth({
    database: prismaAdapter(prisma, { provider: "postgresql" }),
    emailAndPassword: { enabled: true },
    callbacks: {
        signUpEmail: async (params: any) => {
            console.log(
                "🔑 PASSWORD reçu:",
                params.req?.body?.password ? "OUI" : "NON"
            );
            console.log("🔑 User:", params.user);
            return params.user;
        },
    } as any,
});
