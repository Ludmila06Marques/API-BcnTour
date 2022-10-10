/*
  Warnings:

  - You are about to drop the column `localization` on the `publish` table. All the data in the column will be lost.
  - Added the required column `urlImage` to the `options` table without a default value. This is not possible if the table is not empty.
  - Added the required column `localizationId` to the `publish` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "options" ADD COLUMN     "urlImage" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "publish" DROP COLUMN "localization",
ADD COLUMN     "localizationId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "localization" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "latitude" TEXT NOT NULL,
    "longitude" TEXT NOT NULL,

    CONSTRAINT "localization_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "userLocation" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "localizationId" INTEGER NOT NULL,

    CONSTRAINT "userLocation_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "publish" ADD CONSTRAINT "publish_localizationId_fkey" FOREIGN KEY ("localizationId") REFERENCES "localization"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "userLocation" ADD CONSTRAINT "userLocation_localizationId_fkey" FOREIGN KEY ("localizationId") REFERENCES "localization"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "userLocation" ADD CONSTRAINT "userLocation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
