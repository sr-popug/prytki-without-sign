/*
  Warnings:

  - You are about to drop the `GameCell` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "GameCell";

-- CreateTable
CREATE TABLE "Game" (
    "id" SERIAL NOT NULL,
    "type" "CellType" NOT NULL,
    "duration" INTEGER NOT NULL,
    "client" TEXT,
    "number" TEXT,
    "time" TEXT,
    "date" TEXT,
    "description" TEXT NOT NULL,
    "numberOfPlayers" INTEGER,
    "typeOfPay" "TypeOfPay",
    "typeOfGame" "TypeOfGame",

    CONSTRAINT "Game_pkey" PRIMARY KEY ("id")
);
