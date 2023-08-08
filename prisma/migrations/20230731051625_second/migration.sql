/*
  Warnings:

  - You are about to drop the `FormData` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "FormData";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Attributes" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "sex" TEXT NOT NULL,
    "weight" TEXT NOT NULL,
    "feet" TEXT NOT NULL,
    "inches" TEXT NOT NULL,
    "age" TEXT NOT NULL,
    "goal" TEXT NOT NULL
);
