import { useEffect, useState } from 'react';
import { supabase } from '../../features/supabase/supabase-client';

const FotoHotel3 = ({foto3}) => {
    const [fotohotel3, setFotoHotel3] = useState();
    
    useEffect(
        () => {
            if(foto3) downloadFoto(foto3)
        }, 
        [foto3]
    );

    const downloadFoto = async (path) => {
        try{
            const { data,error } = await supabase.storage
                .from('foto-hotel3')
                .download(path);
            if (error){
                throw error;
            }

            const url = URL.createObjectURL(data);
            setFotoHotel3(url)
        }
        catch(error){
            console.log('Error downloading this file: ', error.message)
        }
    }
    return fotohotel3 ? (
        <img src={fotohotel3} width='100%' height='225'/>
    ):(
        <div>
            Loading Foto...
        </div>
    )
}

export default FotoHotel3;