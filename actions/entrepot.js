"use server"
import prisma from "@/prisma/script";

export const createEntrepot = async (entrepot) => {
  try {
    return prisma.entrepot.create({
      data: entrepot
    });
  } catch (error) {
    console.error(error);
  }
}

export const getEntrepot = async (id) => {
  return prisma.entrepot.findUnique({
    where: {
      id,
    },
    include: {
      colis: true,
    },
  });
}

export const getAllEntrepots = async () => {
  return prisma.entrepot.findMany();
}

export const updateEntrepot = async (id, nom, adresse, capacite) => {
  return prisma.entrepot.update({
    where: {
      id,
    },
    data: {
      nom,
      adresse,
      capacite,
    },
  });
}

export const deleteEntrepot = async (id) => {
  return prisma.entrepot.delete({
    where: {
      id,
    },
  });
}



