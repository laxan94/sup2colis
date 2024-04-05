"use server"
import prisma from "@/prisma/script";

export const createColis = async (colis) => {
  try {
    return prisma.colis.create({
      data: colis
    });
  } catch (error) {
    console.error(error);
  }
}

export const getColis = async (id) => {
  return prisma.colis.findUnique({
    where: {
      id,
    },
    include: {
      livraisons: true,
      entrepot: true,
    },
  });
}

export const getAllColis = async () => {
  return prisma.colis.findMany();
}

export const updateColis = async (id, nom, poids, stock) => {
  return prisma.colis.update({
    where: {
      id,
    },
    data: {
      nom,
      poids,
      stock,
    },
  });
}

export const deleteColis = async (id) => {
  return prisma.colis.delete({
    where: {
      id,
    },
  });
}


export const updateStock = async (id, stock) => {
  return prisma.colis.update({
    where: {
      id,
    },
    data: {
      stock,
    },
  });
}

export const decreaseStock = async (id, quantite) => {
  return prisma.colis.update({
    where: {
      id,
    },
    data: {
      stock: {
        decrement: quantite,
      },
    },
  });
}


