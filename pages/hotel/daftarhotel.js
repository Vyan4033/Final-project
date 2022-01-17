import Card from "../../components/cardhotel"
import Header from "../../components/header";
import Head from "next/head";

export default function Tentang(){

    return( 
        <div>
            <Head>
                <title>
                    Daftar Hotel
                </title>
            </Head>
            <Header/>
            <Card/>
        </div>
    )
}