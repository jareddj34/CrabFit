-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Attributes" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "sex" TEXT NOT NULL,
    "weight" TEXT NOT NULL,
    "feet" TEXT NOT NULL,
    "inches" TEXT NOT NULL,
    "age" TEXT NOT NULL,
    "goal" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Attributes" ("age", "feet", "goal", "id", "inches", "sex", "weight") SELECT "age", "feet", "goal", "id", "inches", "sex", "weight" FROM "Attributes";
DROP TABLE "Attributes";
ALTER TABLE "new_Attributes" RENAME TO "Attributes";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
