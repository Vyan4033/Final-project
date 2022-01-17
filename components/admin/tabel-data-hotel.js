import useSWR from "swr";

const hapusData = async (idHotel, namaHotel) => {
    let setuju = confirm(`Hapus Hotel Berikut : ${namaHotel}?`);

    if(setuju){
        const data = {id: idHotel};
        const respon = await fetch('/api/hapus-data', {
            method: 'POST',
            body: JSON.stringify(data),
        });

        let status = await respon.json();

        if(status != null) {
            location.reload();
        }
    }
};

const fetcher = (url) => fetch(url).then((res) => res.json());

const TabelHotel = () => {
    const {data,error} = useSWR('/api/data-hotel', fetcher);

    if (error) return <p>Ada masalah saat fetching data</p>;
    if (!data) return <p>Loading...</p>;
    if (data.length == 0) return <p>Belum ada data</p>;

    return(
        <div className="container">
            <div className="container my-5 py-5">
                
            <table align='center'>
                <thead>
                    <tr align='center'>
                        <td>No</td>
                        <td>Nama Hotel</td>
                        <td>Deskripsi</td>
                        <td>Aksi</td>
                    </tr>
                </thead>
                <tbody>
                {data.map((hotel,index) => (
                    <tr>
                        <td align='center'>{index + 1}</td>
                        <td>{hotel.namaHotel}</td>
                        <td>{hotel.deskripsiHotel}</td>
                        <td align='center'>
                            <a onClick = {(event) => {
                                event.preventDefault();
                                hapusData(hotel.id, hotel.namaHotel);
                            }}>
                                <a className="btn bg-danger text-white">Hapus</a>
                            </a>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>
        </div>
    )
}
export default TabelHotel