import Header from "../components/header";
import DataHotel from "../components/admin/tambah-datahotel";
import Head from "next/head";
import TabelHotel from "../components/admin/tabel-data-hotel";
import { useEffect, useState } from 'react';
import { supabase } from '../features/supabase/supabase-client';

export default function cardHotel(){
    const [showForm, setShowForm] = useState(false);
    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => cekUser());
    const cekUser = async () => {
      const session = await supabase.auth.session();
      if (session == null) location.replace('/signIn');
      else setIsAuth(true);
    };
  
    if (isAuth) {  
        return(
            <div>
                <Head>
                    <title>
                        Admin
                    </title>
                </Head>
                <Header/>
                <TabelHotel/>
                <center >
                {showForm ? <DataHotel/> : ''}
                {showForm ? (
                    <button onClick={() => setShowForm(false)}>
                        Hidden
                    </button>
                ):(
                    <button onClick={() => setShowForm(true)}>
                        Show 
                    </button>
                )}
                </center>
            </div>
        )
    } else {
        return <p>Sedang mengotentifikasi pengguna...</p>;
    } 
};