/*
  Warnings:

  - You are about to drop the column `typeOfPay` on the `Game` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Game" DROP COLUMN "typeOfPay",
ADD COLUMN     "isPay" BOOLEAN NOT NULL DEFAULT false;

-- DropEnum
DROP TYPE "TypeOfPay";
