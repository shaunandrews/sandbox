-- CreateTable
CREATE TABLE "Like" (
    "mealId" INTEGER NOT NULL,
    "familyMemberId" INTEGER NOT NULL,

    PRIMARY KEY ("mealId", "familyMemberId"),
    CONSTRAINT "Like_mealId_fkey" FOREIGN KEY ("mealId") REFERENCES "Meal" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Like_familyMemberId_fkey" FOREIGN KEY ("familyMemberId") REFERENCES "FamilyMember" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
