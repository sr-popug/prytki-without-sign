/*
  Warnings:

  - You are about to drop the column `number` on the `Game` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `Game` table. All the data in the column will be lost.

*/
-- AlterEnum
ALTER TYPE "TypeOfGame" ADD VALUE 'reservation';

-- AlterTable
ALTER TABLE "Game" DROP COLUMN "number",
DROP COLUMN "type",
ADD COLUMN     "phone" TEXT,
ADD COLUMN     "price" INTEGER;

-- DropEnum
DROP TYPE "CellType";
