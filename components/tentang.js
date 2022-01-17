export default function About(props){
    return(
        <div className='container'>
            <h1 className="display-5 fw-bold text-primary justify-content-center d-flex my-5 py-5">
                {props.Judul}
            </h1>
            <p className="card-text fw-bold d-flex justify-content-center py-3">
                {props.Motto}
            </p>
            <div className="row align-item-start ">
                <div className="col">
                    <h1 className="card-text display-4 fw-bold text-primary">
                        {props.Layanan}
                    </h1>
                </div>
                <div className="col">
                    <p className="fw-bold py-3">
                        {props.Deskripsi}
                    </p>
                </div>
            </div>
        </div>
    )
}