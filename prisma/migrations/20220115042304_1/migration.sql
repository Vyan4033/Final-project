-- CreateTable
CREATE TABLE "Hotel" (
    "id" SERIAL NOT NULL,
    "namaHotel" TEXT NOT NULL,
    "deskripsiHotel" TEXT NOT NULL,
    "fotohotel" TEXT NOT NULL,
    "fotohotel2" TEXT NOT NULL,
    "fotohotel3" TEXT NOT NULL,
    "fotohotel4" TEXT NOT NULL,

    CONSTRAINT "Hotel_pkey" PRIMARY KEY ("id")
);
