import prisma from "../../client.ts";

const handler = async (req, res) => {
    const hotel = await prisma.hotel.findMany();
    res.json(hotel);
}

export default handler;