-- CreateTable
CREATE TABLE "Transactions" (
    "id" TEXT NOT NULL,
    "valor" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "observacao" TEXT NOT NULL,
    "tipoMov" TEXT NOT NULL,

    CONSTRAINT "Transactions_pkey" PRIMARY KEY ("id")
);
