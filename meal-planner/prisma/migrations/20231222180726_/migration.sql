/*
  Warnings:

  - You are about to drop the column `day` on the `Meal` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Meal` table. All the data in the column will be lost.
  - Added the required column `author` to the `Meal` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "Eater" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "color" TEXT NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Meal" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "description" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "date" DATETIME NOT NULL
);
INSERT INTO "new_Meal" ("date", "description", "id") SELECT "date", "description", "id" FROM "Meal";
DROP TABLE "Meal";
ALTER TABLE "new_Meal" RENAME TO "Meal";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
