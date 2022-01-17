import Isi from '../../components/isi';
export default function Beranda(){
    let Home = {
        judul : '9 Hotel Romantis Terbaik Di Banyuwangi',
        caption : 'TEMUKAN INFORMASI HOTEL ROMANTIS YANG TERDAPAT DI KOTA BANYUWANGI'
    }
    return(
        <Isi 
            judul = {Home.judul}
            caption = {Home.caption}
        />
    )
}