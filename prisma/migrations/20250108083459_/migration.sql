/*
  Warnings:

  - Made the column `typeOfGame` on table `Game` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Game" ALTER COLUMN "typeOfGame" SET NOT NULL;
