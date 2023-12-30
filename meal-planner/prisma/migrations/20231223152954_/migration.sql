/*
  Warnings:

  - You are about to drop the `Eater` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `author` on the `Meal` table. All the data in the column will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Eater";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Meal" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "description" TEXT NOT NULL,
    "date" DATETIME NOT NULL
);
INSERT INTO "new_Meal" ("date", "description", "id") SELECT "date", "description", "id" FROM "Meal";
DROP TABLE "Meal";
ALTER TABLE "new_Meal" RENAME TO "Meal";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
