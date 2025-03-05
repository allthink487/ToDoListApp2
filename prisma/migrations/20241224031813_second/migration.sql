/*
  Warnings:

  - Added the required column `imgDisplay_name` to the `Articles` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imgHeight` to the `Articles` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imgWidth` to the `Articles` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `articles` ADD COLUMN `imgDisplay_name` VARCHAR(191) NOT NULL,
    ADD COLUMN `imgHeight` INTEGER NOT NULL,
    ADD COLUMN `imgWidth` INTEGER NOT NULL,
    MODIFY `msg` TEXT NOT NULL,
    MODIFY `imgUrl` TEXT NOT NULL;
