import { useEffect, useState } from 'react';
import { supabase } from '../../features/supabase/supabase-client';

const FotoHotel = ({foto}) => {
    const [fotohotel, setFotoHotel] = useState();
    
    useEffect(
        () => {
            if(foto) downloadFoto(foto)
        }, 
        [foto]
    );

    const downloadFoto = async (path) => {
        try{
            const { data,error } = await supabase.storage
                .from('foto-hotel')
                .download(path);
            if (error){
                throw error;
            }

            const url = URL.createObjectURL(data);
            setFotoHotel(url)
        }
        catch(error){
            console.log('Error downloading this file: ', error.message)
        }
    }
    return fotohotel ? (
        <center>
        <img src={fotohotel} width='550' height='300' />

        </center>
    ):(
        <div>
            Loading Foto...
        </div>
    )
}

export default FotoHotel;