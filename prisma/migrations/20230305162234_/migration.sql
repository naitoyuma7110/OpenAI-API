/*
  Warnings:

  - You are about to drop the `NursingHome` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "NursingHome" DROP CONSTRAINT "NursingHome_companyId_fkey";

-- DropForeignKey
ALTER TABLE "NursingHome" DROP CONSTRAINT "NursingHome_facilityId_fkey";

-- DropTable
DROP TABLE "NursingHome";

-- CreateTable
CREATE TABLE "Carehome" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "facilityId" INTEGER NOT NULL,
    "companyId" INTEGER NOT NULL,

    CONSTRAINT "Carehome_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Carehome" ADD CONSTRAINT "Carehome_facilityId_fkey" FOREIGN KEY ("facilityId") REFERENCES "Facility"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Carehome" ADD CONSTRAINT "Carehome_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
