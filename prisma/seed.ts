import prisma from "./script";

async function main() {
  const entrepot1 = await prisma.entrepot.create({
    data: {
      nom: 'Entrepot 1',
      adresse: '123 Rue de la Ville',
      capacite: 10,
    },
  });

  const entrepot2 = await prisma.entrepot.create({
    data: {
      nom: 'Entrepot 2',
      adresse: '456 Rue de la Ville',
      capacite: 20,
    },
  });

  const entrepot3 = await prisma.entrepot.create({
    data: {
      nom: 'Entrepot 3',
      adresse: '789 Rue de la Ville',
      capacite: 30,
    },
  });

  const colis1 = await prisma.colis.create({
    data: {
      nom: 'Colis 1',
      poids: 1.5,
      stock: 2,
      entrepotId: entrepot1.id,
    },
  });

  await prisma.livraison.create({
    data: {
      expediteur: 'Expediteur 1',
      destinataire: 'Destinataire 1',
      dateEnvoi: new Date(),
      quantite: 10,
      statut: 'En cours',
      colisId: colis1.id,
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });


