import { useEffect, useState } from 'react';
import { supabase } from '../../features/supabase/supabase-client';

const FotoHotel4 = ({foto4}) => {
    const [fotohotel4, setFotoHotel4] = useState();
    
    useEffect(
        () => {
            if(foto4) downloadFoto(foto4)
        }, 
        [foto4]
    );

    const downloadFoto = async (path) => {
        try{
            const { data,error } = await supabase.storage
                .from('foto-hotel4')
                .download(path);
            if (error){
                throw error;
            }

            const url = URL.createObjectURL(data);
            setFotoHotel4(url)
        }
        catch(error){
            console.log('Error downloading this file: ', error.message)
        }
    }
    return fotohotel4 ? (
        <img src={fotohotel4} width='100%' height='225'/>
    ):(
        <div>
            Loading Foto...
        </div>
    )
}

export default FotoHotel4;