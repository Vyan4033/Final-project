import Link from 'next/link';

const Isi = (props) => {
    return(
        <div className="container">
            <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center">
                <div className="col-md-6 p-lg-6 mx-auto my-5 py-5">
                    <h1 className="display-5 fw-bold text-primary d-flex flex-wrap justify-content-center py-5 my-5 mb-4 border-bottom">
                            {props.judul}
                    </h1>
                    <p className="lead fw-bold ">{props.caption}</p>
                    <Link href='/hotel/daftarhotel'>
                        <a className='btn btn-primary'>Lihat Hotel</a>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Isi;