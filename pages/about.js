import About from "../components/tentang";
import Header from "../components/header";
import Head from "next/head";

export default function Tentang(){
    let Tentang = {
                    Judul : "Kenapa Memilih Mengunjungi Website Kami",
                    Motto : "Support Your Holiday In Banyuwangi",
                    Layanan : "Layanan Informasi Hotel Terbaik Di Kota Banyuwangi",
                    Deskripsi : "Kami memiliki MOTTO Support Your Holiday In Banyuwangi kami berusaha semaksimal mungkin agar para traveller yang membutuhkan informasi penginapan selama berwisata di Kota Banyuwangi sangat terbantu oleh jasa kami, sehingga tujuan wisata ke Kota Wisata Banyuwangi benar benar berkesan bagi para traveller. Di pandu Oleh Guide Profesional dan Bersahabat Kami Berharap Liburan Anda Di Kota Banyuwangi Menjadi liburan yang menyenangkan."    
                }
    return(
        <div>
            <Head>
                <title>About</title>
            </Head>
            <Header/>
            <About
                Judul = {Tentang.Judul}
                Motto = {Tentang.Motto}
                Layanan = {Tentang.Layanan}
                Deskripsi = {Tentang.Deskripsi}
            />
        </div>
    )
}