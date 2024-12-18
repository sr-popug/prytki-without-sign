/*
  Warnings:

  - Added the required column `description` to the `GameCell` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "GameCell" ADD COLUMN     "description" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "price" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "photo" TEXT NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);
