import { useEffect, useState } from 'react';
import { supabase } from '../../features/supabase/supabase-client';

const FotoHotel2 = ({foto2}) => {
    const [fotohotel2, setFotoHotel2] = useState();
    
    useEffect(
        () => {
            if(foto2) downloadFoto(foto2)
        }, 
        [foto2]
    );

    const downloadFoto = async (path) => {
        try{
            const { data,error } = await supabase.storage
                .from('foto-hotel2')
                .download(path);
            if (error){
                throw error;
            }

            const url = URL.createObjectURL(data);
            setFotoHotel2(url)
        }
        catch(error){
            console.log('Error downloading this file: ', error.message)
        }
    }
    return fotohotel2 ? (
        <img src={fotohotel2} width='100%' height='225'/>
    ):(
        <div>
            Loading Foto...
        </div>
    )
}

export default FotoHotel2;