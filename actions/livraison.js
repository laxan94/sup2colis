"use server"
import prisma from "@/prisma/script";
import {decreaseStock, } from "@/actions/colis";

export const createLivraison = async (expediteur, destinataire, quantite, colisId) => {
  const livraison = prisma.livraison.create({
    data: {
      expediteur,
      destinataire,
      quantite,
      colisId,
      dateEnvoi: new Date(),
      statut: 'En cours de traitement',
    },
  });

  await decreaseStock(colisId, quantite);

  return livraison;
}

export const getLivraison = async (id) => {
  return prisma.livraison.findUnique({
    where: {
      id,
    },
  });
}

export const getAllLivraisons = async () => {
  return prisma.livraison.findMany();
}

export const updateLivraison = async (id, expediteur, destinataire, quantite, colisId, statut) => {
  return prisma.livraison.update({
    where: {
      id,
    },
    data: {
      expediteur,
      destinataire,
      quantite,
      colisId,
      statut,
    },
  });
}

export const deleteLivraison = async (id) => {
  return prisma.livraison.delete({
    where: {
      id,
    },
  });
}

export const updateLivraisonStatut = async (id, statut) => {
  return prisma.livraison.update({
    where: {
      id,
    },
    data: {
      statut,
    },
  });
}