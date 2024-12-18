-- CreateEnum
CREATE TYPE "CellType" AS ENUM ('reservation', 'notAvailable');

-- CreateEnum
CREATE TYPE "TypeOfPay" AS ENUM ('online', 'offline');

-- CreateEnum
CREATE TYPE "TypeOfGame" AS ENUM ('standard', 'holidayInDark');

-- CreateTable
CREATE TABLE "GameCell" (
    "id" SERIAL NOT NULL,
    "type" "CellType" NOT NULL,
    "client" TEXT,
    "number" TEXT,
    "time" TEXT,
    "date" TEXT,
    "numberOfPlayers" INTEGER,
    "typeOfPay" "TypeOfPay",
    "typeOfGame" "TypeOfGame",

    CONSTRAINT "GameCell_pkey" PRIMARY KEY ("id")
);
