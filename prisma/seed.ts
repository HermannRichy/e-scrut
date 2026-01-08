import prisma from "@/lib/prisma";

const data = [
    // ================= KOUARFA =================
    {
        arrondissement: "KOUARFA",
        village: "BOUYAGNINDI",
        centre: "EPP BOUYAGNINDI",
        bureau: "PV01",
    },
    {
        arrondissement: "KOUARFA",
        village: "BOUYAGNINDI",
        centre: "EPP BOUYAGNINDI",
        bureau: "PV02",
    },
    {
        arrondissement: "KOUARFA",
        village: "KOUARFA",
        centre: "BUREAU ARRONDISSEMENT",
        bureau: "PV01",
    },
    {
        arrondissement: "KOUARFA",
        village: "KOUARFA",
        centre: "CEG KOUARFA",
        bureau: "PV01",
    },
    {
        arrondissement: "KOUARFA",
        village: "KOUARFA",
        centre: "EP PRIVEE NOUVELLE ARCHE",
        bureau: "PV01",
    },
    {
        arrondissement: "KOUARFA",
        village: "KOUARFA",
        centre: "EPP KOUARFA",
        bureau: "PV01",
    },
    {
        arrondissement: "KOUARFA",
        village: "KOUARFA",
        centre: "EPP KOUARFA",
        bureau: "PV02",
    },
    {
        arrondissement: "KOUARFA",
        village: "KOUBA",
        centre: "EPP KOUBA",
        bureau: "PV01",
    },
    {
        arrondissement: "KOUARFA",
        village: "KOUBA",
        centre: "EPP KOUBA",
        bureau: "PV02",
    },
    {
        arrondissement: "KOUARFA",
        village: "KOUBA",
        centre: "MAISON DES JEUNES",
        bureau: "PV01",
    },
    {
        arrondissement: "KOUARFA",
        village: "MOUNOUMBORIFA",
        centre: "EPP MOUNOUMBORIFA",
        bureau: "PV01",
    },
    {
        arrondissement: "KOUARFA",
        village: "PEPERKOU",
        centre: "EPP PEPERKOU",
        bureau: "PV01",
    },
    {
        arrondissement: "KOUARFA",
        village: "PEPERKOU",
        centre: "EPP PEPERKOU",
        bureau: "PV02",
    },
    {
        arrondissement: "KOUARFA",
        village: "TAKISSARI",
        centre: "EPP TAKISSARI",
        bureau: "PV01",
    },
    {
        arrondissement: "KOUARFA",
        village: "TAKISSARI",
        centre: "EPP TAKISSARI",
        bureau: "PV02",
    },
    {
        arrondissement: "KOUARFA",
        village: "TAMPOBRE",
        centre: "EPP TAMPOBRE 1",
        bureau: "PV01",
    },
    {
        arrondissement: "KOUARFA",
        village: "TAMPOBRE",
        centre: "EPP TAMPOBRE 1",
        bureau: "PV02",
    },
    {
        arrondissement: "KOUARFA",
        village: "TAMPOBRE",
        centre: "EPP TAMPOBRE 1",
        bureau: "PV03",
    },
    {
        arrondissement: "KOUARFA",
        village: "TANDAFA",
        centre: "EPP TANDAFA",
        bureau: "PV01",
    },
    {
        arrondissement: "KOUARFA",
        village: "TANDAFA",
        centre: "EPP TANDAFA",
        bureau: "PV02",
    },
    {
        arrondissement: "KOUARFA",
        village: "TANKOKONA",
        centre: "EPP TANKOKONA",
        bureau: "PV01",
    },
    {
        arrondissement: "KOUARFA",
        village: "TCHOUNDEKOU",
        centre: "EPP TCHOUNDEKOU",
        bureau: "PV01",
    },
    {
        arrondissement: "KOUARFA",
        village: "WABOU",
        centre: "EPP WABOU",
        bureau: "PV01",
    },
    {
        arrondissement: "KOUARFA",
        village: "WABOU",
        centre: "EPP WABOU",
        bureau: "PV02",
    },

    // ================= TAMPEGRE =================
    {
        arrondissement: "TAMPEGRE",
        village: "BATITAMOU",
        centre: "EPP BATITAMOU",
        bureau: "PV01",
    },
    {
        arrondissement: "TAMPEGRE",
        village: "DIKOKORE",
        centre: "EPP DIKOKORE",
        bureau: "PV01",
    },
    {
        arrondissement: "TAMPEGRE",
        village: "KOKOTA",
        centre: "EPP KOKOTA",
        bureau: "PV01",
    },
    {
        arrondissement: "TAMPEGRE",
        village: "MAKO",
        centre: "EPP MAKO",
        bureau: "PV01",
    },
    {
        arrondissement: "TAMPEGRE",
        village: "NABAGA",
        centre: "EPP NABAGA",
        bureau: "PV01",
    },
    {
        arrondissement: "TAMPEGRE",
        village: "NABAGA",
        centre: "EPP NABAGA",
        bureau: "PV02",
    },
    {
        arrondissement: "TAMPEGRE",
        village: "TAMPEGRE",
        centre: "BUREAU ARRONDISSEMENT",
        bureau: "PV01",
    },
    {
        arrondissement: "TAMPEGRE",
        village: "TAMPEGRE",
        centre: "EPP TAMPEGRE II",
        bureau: "PV01",
    },
    {
        arrondissement: "TAMPEGRE",
        village: "TAMPEGRE",
        centre: "EPP TAMPEGRE II",
        bureau: "PV02",
    },
    {
        arrondissement: "TAMPEGRE",
        village: "TAMPEGRE",
        centre: "EPP TAMPEGRE II",
        bureau: "PV03",
    },
    {
        arrondissement: "TAMPEGRE",
        village: "TAMPEGRE",
        centre: "MAISON DES JEUNES",
        bureau: "PV01",
    },
    {
        arrondissement: "TAMPEGRE",
        village: "TANTOUGOU",
        centre: "EPP TANTOUGOU",
        bureau: "PV01",
    },
    {
        arrondissement: "TAMPEGRE",
        village: "TANTOUGOU",
        centre: "EPP TANTOUGOU",
        bureau: "PV02",
    },
    {
        arrondissement: "TAMPEGRE",
        village: "TCHANHORTA",
        centre: "EPP DITAPO",
        bureau: "PV01",
    },
    {
        arrondissement: "TAMPEGRE",
        village: "TCHANHORTA",
        centre: "EPP TCHANHORTA",
        bureau: "PV01",
    },
    {
        arrondissement: "TAMPEGRE",
        village: "WANSOKOU",
        centre: "EPP MAKO",
        bureau: "PV01",
    },
    {
        arrondissement: "TAMPEGRE",
        village: "WANSOKOU",
        centre: "EPP TANTAGA II",
        bureau: "PV01",
    },
    {
        arrondissement: "TAMPEGRE",
        village: "WANSOKOU",
        centre: "EPP WANSOKOU",
        bureau: "PV01",
    },
    {
        arrondissement: "TAMPEGRE",
        village: "WANSOKOU",
        centre: "MAISON DES JEUNES",
        bureau: "PV01",
    },
    {
        arrondissement: "TAMPEGRE",
        village: "WANSOKOU",
        centre: "MAISON DES JEUNES",
        bureau: "PV02",
    },

    // ================= TOUKOUNTOUNA =================
    {
        arrondissement: "TOUKOUNTOUNA",
        village: "BORIBANSIFA",
        centre: "EPP BORIBANSIFA",
        bureau: "PV01",
    },
    {
        arrondissement: "TOUKOUNTOUNA",
        village: "BORIBANSIFA",
        centre: "EPP BORIBANSIFA",
        bureau: "PV02",
    },
    {
        arrondissement: "TOUKOUNTOUNA",
        village: "BORIBANSIFA",
        centre: "EPP YINRIBOUNDE",
        bureau: "PV01",
    },
    {
        arrondissement: "TOUKOUNTOUNA",
        village: "DATAKOU",
        centre: "EPP DATAKOU",
        bureau: "PV01",
    },
    {
        arrondissement: "TOUKOUNTOUNA",
        village: "FATIYA",
        centre: "EPP FATIYA",
        bureau: "PV01",
    },
    {
        arrondissement: "TOUKOUNTOUNA",
        village: "FATIYA",
        centre: "EPP FATIYA",
        bureau: "PV02",
    },
    {
        arrondissement: "TOUKOUNTOUNA",
        village: "FATIYA",
        centre: "EPP TCHATIBOYA",
        bureau: "PV01",
    },
    {
        arrondissement: "TOUKOUNTOUNA",
        village: "KOKOKOU",
        centre: "EPP KOKOKOU",
        bureau: "PV01",
    },
    {
        arrondissement: "TOUKOUNTOUNA",
        village: "KPENTIKOU",
        centre: "EPP KPENTIKOU/G/B",
        bureau: "PV01",
    },
    {
        arrondissement: "TOUKOUNTOUNA",
        village: "KPENTIKOU",
        centre: "EPP TOUCOUNTOUNA C",
        bureau: "PV01",
    },
    {
        arrondissement: "TOUKOUNTOUNA",
        village: "KPENTIKOU",
        centre: "EPP TOUCOUNTOUNA C",
        bureau: "PV02",
    },
    {
        arrondissement: "TOUKOUNTOUNA",
        village: "KPENTIKOU",
        centre: "MAISON DES JEUNES",
        bureau: "PV01",
    },
    {
        arrondissement: "TOUKOUNTOUNA",
        village: "KPENTIKOU",
        centre: "MAISON DES JEUNES",
        bureau: "PV02",
    },
    {
        arrondissement: "TOUKOUNTOUNA",
        village: "MOUSSOUNTINGOU",
        centre: "EPP MOUSSOUNTINGOU",
        bureau: "PV01",
    },
    {
        arrondissement: "TOUKOUNTOUNA",
        village: "MOUSSOUNTINGOU",
        centre: "EPP MOUSSOUNTINGOU",
        bureau: "PV02",
    },
    {
        arrondissement: "TOUKOUNTOUNA",
        village: "MOUSSOUNTINGOU",
        centre: "EPP PORKOU",
        bureau: "PV01",
    },
    {
        arrondissement: "TOUKOUNTOUNA",
        village: "TAMPATOU",
        centre: "EPP TAMPARTOU",
        bureau: "PV01",
    },
    {
        arrondissement: "TOUKOUNTOUNA",
        village: "TAMPATOU",
        centre: "EPP TAMPARTOU",
        bureau: "PV02",
    },
    {
        arrondissement: "TOUKOUNTOUNA",
        village: "TCHAKALAKOU",
        centre: "EPP TCHAKALAKOU",
        bureau: "PV01",
    },
    {
        arrondissement: "TOUKOUNTOUNA",
        village: "TCHAKALAKOU",
        centre: "EPP TCHAKALAKOU",
        bureau: "PV02",
    },
    {
        arrondissement: "TOUKOUNTOUNA",
        village: "TECTIBAYAOU",
        centre: "EPP KOKOBRE",
        bureau: "PV01",
    },
    {
        arrondissement: "TOUKOUNTOUNA",
        village: "TECTIBAYAOU",
        centre: "EPP TECTIBAYAOU",
        bureau: "PV01",
    },
    {
        arrondissement: "TOUKOUNTOUNA",
        village: "TOUKOUNTOUNA",
        centre: "CEG TOUCOUNTOUNA BATIMENT A",
        bureau: "PV01",
    },
    {
        arrondissement: "TOUKOUNTOUNA",
        village: "TOUKOUNTOUNA",
        centre: "CEG TOUCOUNTOUNA BATIMENT A",
        bureau: "PV02",
    },
    {
        arrondissement: "TOUKOUNTOUNA",
        village: "TOUKOUNTOUNA",
        centre: "CEG TOUCOUNTOUNA BATIMENT A",
        bureau: "PV03",
    },
    {
        arrondissement: "TOUKOUNTOUNA",
        village: "TOUKOUNTOUNA",
        centre: "CEG TOUCOUNTOUNA BATIMENT A",
        bureau: "PV04",
    },
    {
        arrondissement: "TOUKOUNTOUNA",
        village: "TOUKOUNTOUNA",
        centre: "CEG TOUCOUNTOUNA BATIMENT A",
        bureau: "PV05",
    },
    {
        arrondissement: "TOUKOUNTOUNA",
        village: "TOUKOUNTOUNA",
        centre: "CEG TOUCOUNTOUNA BATIMENT A",
        bureau: "PV06",
    },
    {
        arrondissement: "TOUKOUNTOUNA",
        village: "TOUKOUNTOUNA",
        centre: "EPP TCHAKIFAKA",
        bureau: "PV01",
    },
];

async function main() {
    for (const item of data) {
        const arrondissement = await prisma.arrondissement.upsert({
            where: { nom: item.arrondissement },
            update: {},
            create: { nom: item.arrondissement },
        });

        await prisma.bureauVote.create({
            data: {
                arrondissementId: arrondissement.id,
                villageQuartier: item.village,
                centreVote: item.centre,
                codeBureau: item.bureau,
            },
        });
    }

    console.log("✅ Seed exécuté avec succès");
}

main()
    .catch((e) => {
        console.error("❌ Erreur seed:", e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
