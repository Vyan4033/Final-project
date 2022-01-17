import Link from 'next/link'
import InfoAkun from './admin/infoaccount'

export default function Header(){
    return(
        <div>
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <div className="container-fluid">
                    <a className="btn btn navbar-brand tex">Banyuwangi</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav me-auto mb-2 mb-md-0">
                        <Link href='/'>
                            <li>
                                <a className="btn btn text-white">Home</a>
                            </li>
                        </Link>
                        <Link href='/hotel/daftarhotel'>
                            <li>
                                <a className="btn btn text-white">Hotel</a>
                            </li>
                        </Link>
                        <Link href='/about'>
                            <li>
                                <a className="btn btn text-white">About</a>
                            </li>
                        </Link>
                    </ul>
                    <ul className='navbar-nav mb-5 mb-md-0 d-flex'>
                        <li>
                            <InfoAkun/>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}