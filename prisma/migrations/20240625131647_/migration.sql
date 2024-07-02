/*
  Warnings:

  - You are about to drop the column `updated_at` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "updated_at",
ADD COLUMN     "update_at" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "created_at" SET DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "created_at" SET DATA TYPE TIMESTAMP(0);
