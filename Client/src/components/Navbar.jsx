import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-info">
            <div className="contains d-flex justify-content-between">
                <div className="d-flex justify-content-between align-items-center nav-mobile">
                    <a className="navbar-brand" href="#">
                        <div className="logo-box bg-primary"></div>
                    </a>
                    <button className="navbar-toggler border-0 px-0" type="button" data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div className="offcanvas offcanvas-end w-50" id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header pb-1 pb-sm-2">
                        <h6 className="offcanvas-title fw-bold" id="offcanvasNavbarLabel">BCR</h6>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body pt-1 pt-sm-2 ms-lg-auto">
                        <ul className="navbar-nav nav nav-pills">
                            <li className="nav-item my-auto">
                                <Link to="/" className="nav-link ms-lg-3 text-dark fw-normal">Home</Link>
                            </li>
                            <li className="nav-item my-auto">
                                <a href="#service" className="nav-link ms-lg-3 text-dark fw-normal">Our Services</a>
                            </li>
                            <li className="nav-item my-auto">
                                <a href="#why-us" className="nav-link ms-lg-3 text-dark fw-normal">Why Us</a>
                            </li>
                            <li className="nav-item my-auto">
                                <a href="#testimonial" className="nav-link ms-lg-3 text-dark fw-normal">Testimonial</a>
                            </li>
                            <li className="nav-item my-auto">
                                <a href="#faq" className="nav-link ms-lg-3 text-dark fw-normal">FAQ</a>
                            </li>
                            <li className="nav-item">
                                <a href="http://localhost:6000/register" className="nav-link ms-lg-3 text-dark fw-normal" aria-current="page">
                                    <button className="btn btn-success">Register</button>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar