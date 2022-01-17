import Link from "next/link";
import useSWR from "swr";
import FotoHotel from '../components/admin/foto'
import FotoHotel2 from "./admin/foto2";
import FotoHotel3 from "./admin/foto3";
import FotoHotel4 from "./admin/foto4";

const fetcher = (url) => fetch(url).then((res) => res.json());

const Card = () => {
    
    const { data, error } = useSWR('/api/data-hotel', fetcher);

    if (error) 
        return <p>Ada masalah saat fetching data </p>;
    if (!data) return <p>Loading...</p>;
    if (data.length == 0) return <p>Belum ada data </p>;
   
    return(       
        <div className="container">
            <h1 className="display-5 fw-bold text-primary justify-content-center d-flex my-5 py-5">
                Hotel Romantis Di Banyuwangi
            </h1>
            {data.map((hotel,x) =>(
                <>
                    <h3 className="featurette-heading col py-2">{x + 1}. {hotel.namaHotel}</h3>
                    <div>
                        <FotoHotel foto = {hotel.fotohotel}/>
                        <p className="card-body">{hotel.deskripsiHotel}</p>
                    </div>
                    <div class="row row-cols-1 row-cols-md-3 g-2">
                        <div class="col">
                            <div class="card-body">
                                <FotoHotel2 foto2={hotel.fotohotel2}/>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card-body">
                                <FotoHotel3 foto3={hotel.fotohotel3}/>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card-body">
                                <FotoHotel4 foto4={hotel.fotohotel4}/>
                            </div>
                        </div>
                    </div>
                </>
            ))}
        </div>
    )
}

export default Card;