/*
  Warnings:

  - Made the column `time` on table `Game` required. This step will fail if there are existing NULL values in that column.
  - Made the column `date` on table `Game` required. This step will fail if there are existing NULL values in that column.

*/
-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('admin');

-- AlterTable
ALTER TABLE "Game" ALTER COLUMN "time" SET NOT NULL,
ALTER COLUMN "date" SET NOT NULL,
ALTER COLUMN "description" DROP NOT NULL;

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "login" TEXT NOT NULL,
    "role" "UserRole" NOT NULL,
    "passwordHash" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);
