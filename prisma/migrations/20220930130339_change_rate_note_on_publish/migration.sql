/*
  Warnings:

  - You are about to drop the column `RateNote` on the `publish` table. All the data in the column will be lost.
  - Added the required column `rateNote` to the `publish` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "publish" DROP COLUMN "RateNote",
ADD COLUMN     "rateNote" INTEGER NOT NULL;
