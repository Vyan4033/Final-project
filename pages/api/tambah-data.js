import prisma from '../../client.ts';

const handler = async (req, res) => {
    if(req.method !== 'POST')
        return res
            .status(405)
            .json({ message : 'Request method gagal' });

        const hotel = JSON.parse(req.body);

        const tambah = await prisma.hotel.create({
            data:{
                namaHotel : hotel.namaHotel,
                deskripsiHotel : hotel.deskripsiHotel,
                fotohotel: hotel.fotoPath,
                fotohotel2 : hotel.fotoPath2,
                fotohotel3 : hotel.fotoPath3,
                fotohotel4 : hotel.fotoPath4
            }
        });
        res.json(tambah)
}

export default handler;