-- DropIndex
DROP INDEX `Notes_title_key` ON `notes`;

-- AlterTable
ALTER TABLE `notes` ADD COLUMN `checked` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);
