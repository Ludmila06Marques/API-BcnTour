/*
  Warnings:

  - Added the required column `localization` to the `publish` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "publish" ADD COLUMN     "localization" TEXT NOT NULL;
