/*
  Warnings:

  - You are about to drop the column `observacao` on the `Transactions` table. All the data in the column will be lost.
  - You are about to drop the column `tipoMov` on the `Transactions` table. All the data in the column will be lost.
  - You are about to drop the column `valor` on the `Transactions` table. All the data in the column will be lost.
  - Added the required column `note` to the `Transactions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `typeTransaction` to the `Transactions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `value` to the `Transactions` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Transactions" DROP COLUMN "observacao",
DROP COLUMN "tipoMov",
DROP COLUMN "valor",
ADD COLUMN     "note" TEXT NOT NULL,
ADD COLUMN     "typeTransaction" TEXT NOT NULL,
ADD COLUMN     "value" INTEGER NOT NULL;
