import { Formik, Form, Field } from 'formik';
import { supabase } from '../../features/supabase/supabase-client';

const initFormValues = {
    namaHotel: '',
    foto: null,
    foto2: null,
    foto3: null,
    foto4: null,
    deskripsiHotel: '',

}

const uploadFotoHotel = async (foto) => {
    try {
    const fileExt = foto.name.split('.').pop();
    const fileName = `${Math.random()}.${fileExt}`;
    const filePath = `${fileName}`;
    let { error: uploadError } = await supabase.storage
    .from('foto-hotel') 
    .upload(filePath, foto);
    if (uploadError) {
    throw uploadError;
    } else {
    return filePath;
    }
    } catch (error) {
    alert(error.message);
    }
};

const uploadFotoHotel2 = async (foto2) => {
    try {
    const fileExt = foto2.name.split('.').pop();
    const fileName = `${Math.random()}.${fileExt}`;
    const filePath2 = `${fileName}`;
    let { error: uploadError } = await supabase.storage
    .from('foto-hotel2') 
    .upload(filePath2, foto2);
    if (uploadError) {
    throw uploadError;
    } else {
    return filePath2;
    }
    } catch (error) {
    alert(error.message);
    }
};

const uploadFotoHotel3 = async (foto3) => {
    try {
    const fileExt = foto3.name.split('.').pop();
    const fileName = `${Math.random()}.${fileExt}`;
    const filePath3 = `${fileName}`;
    let { error: uploadError } = await supabase.storage
    .from('foto-hotel3') 
    .upload(filePath3, foto3);
    if (uploadError) {
    throw uploadError;
    } else {
    return filePath3;
    }
    } catch (error) {
    alert(error.message);
    }
};

const uploadFotoHotel4 = async (foto4) => {
    try {
    const fileExt = foto4.name.split('.').pop();
    const fileName = `${Math.random()}.${fileExt}`;
    const filePath4 = `${fileName}`;
    let { error: uploadError } = await supabase.storage
    .from('foto-hotel4') 
    .upload(filePath4, foto4);
    if (uploadError) {
    throw uploadError;
    } else {
    return filePath4;
    }
    } catch (error) {
    alert(error.message);
    }
};

const handleOnSubmit = async (values) => {
    let url = '/api/tambah-data';
    values.fotoPath = await uploadFotoHotel(values.foto);
    values.fotoPath2 = await uploadFotoHotel2(values.foto2);
    values.fotoPath3 = await uploadFotoHotel3(values.foto3);
    values.fotoPath4 = await uploadFotoHotel4(values.foto4);
    
    const respon = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(values),
    });

    let status = await respon.json();

    if(status != null){
        location.reload();
    }
}

const DataHotel = () => (
    <div className='container my-5 py-5'>
        <Formik initialValues={initFormValues} onSubmit={handleOnSubmit}>
            {({ values, isSubmitting, setFieldValue }) => (
                <Form>
                    <table align='center'>
                        <tr>
                            <td htmlFor="foto">Foto Hotel</td>
                            <td>:</td>
                            <td>
                                <input 
                                    type="file"
                                    name='foto'
                                    accept='image/png, image/jpeg, image/jpg,'
                                    onChange={(event) => {
                                        setFieldValue('foto', event.currentTarget.files[0]);
                                    }}
                                />
                                {values.foto ? (
                                    <img src={URL.createObjectURL(values.foto)}  width='250' height='175'/>
                                ):('Belum ada foto')}
                            </td>
                        </tr>

                        <tr>
                            <td htmlFor='namaHotel'>Nama Hotel</td>
                            <td>:</td>
                            <td>
                                <Field type='text'name='namaHotel'/>
                            </td>
                        </tr>
                        <tr>
                            <td htmlFor='deskripsiHotel'>Deskripsi Hotel</td>
                            <td>:</td>
                            <td>
                                <Field as='textarea' name='deskripsiHotel'/>
                            </td>
                        </tr>
                        <tr>
                            <td htmlFor="foto2">Foto Hotel 2</td>
                            <td>:</td>
                            <td>
                                <input 
                                    type="file"
                                    name='foto2'
                                    accept='image/png, image/jpeg, image/jpg,'
                                    onChange={(event) => {
                                        setFieldValue('foto2', event.currentTarget.files[0]);
                                    }}
                                />
                                {values.foto2 ? (
                                    <img src={URL.createObjectURL(values.foto2)} width='250' height='150'/>
                                ):('Belum ada foto')}
                            </td>
                        </tr>
                        <tr>
                            <td htmlFor="foto3">Foto Hotel 3</td>
                            <td>:</td>
                            <td>
                                <input 
                                    type="file"
                                    name='foto3'
                                    accept='image/png, image/jpeg, image/jpg,'
                                    onChange={(event) => {
                                        setFieldValue('foto3', event.currentTarget.files[0]);
                                    }}
                                />
                                {values.foto3 ? (
                                    <img src={URL.createObjectURL(values.foto3)} width='250' height='150'/>
                                ):('Belum ada foto')}
                            </td>
                        </tr>
                        <tr>
                            <td htmlFor="foto4">Foto Hotel 4</td>
                            <td>:</td>
                            <td>
                                <input 
                                    type="file"
                                    name='foto4'
                                    accept='image/png, image/jpeg, image/jpg,'
                                    onChange={(event) => {
                                        setFieldValue('foto4', event.currentTarget.files[0]);
                                    }}
                                />
                                {values.foto4 ? (
                                    <img src={URL.createObjectURL(values.foto4)} width='250' height='159'/>
                                ):('Belum ada foto')}
                            </td>
                        </tr>
                    </table>
                    <center>
                        <button type='submit' disabled={isSubmitting}>
                            Tambah
                        </button>
                    </center>
                </Form>
            )}
        </Formik>
    </div>
);

export default DataHotel