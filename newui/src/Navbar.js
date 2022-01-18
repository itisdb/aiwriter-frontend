import logo from './logo.svg';
import './App.css';

function Navbar() {
  return (
    <>
    {/* ======= Header ======= */}
    <header id="header" className="fixed-top d-flex align-items-center header-transparent">
    <div className="container d-flex align-items-center justify-content-between">
        <div className="logo">
        <h1><a href="index.html"><span>IEMAI Writer</span></a></h1>
        {/* Uncomment below if you prefer to use an image logo */}
        <a href="index.html"><img src="assets/img/logo.png" alt="" class="img-fluid"/></a>
        </div>
        <nav id="navbar" className="navbar">
        <ul>
            <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
            <li><a className="nav-link scrollto" href="#about">About</a></li>
            <li><a className="nav-link scrollto" href="#features">Features</a></li>
            <li><a className="nav-link scrollto" href="#gallery">Gallery</a></li>
            <li><a className="nav-link scrollto" href="#team">Team</a></li>
            <li><a className="nav-link scrollto" href="#pricing">Pricing</a></li>
            <li className="dropdown"><a href="#"><span>Drop Down</span> <i className="bi bi-chevron-down" /></a>
            <ul>
                <li><a href="#">Drop Down 1</a></li>
                <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right" /></a>
                <ul>
                    <li><a href="#">Deep Drop Down 1</a></li>
                    <li><a href="#">Deep Drop Down 2</a></li>
                    <li><a href="#">Deep Drop Down 3</a></li>
                    <li><a href="#">Deep Drop Down 4</a></li>
                    <li><a href="#">Deep Drop Down 5</a></li>
                </ul>
                </li>
                <li><a href="#">Drop Down 2</a></li>
                <li><a href="#">Drop Down 3</a></li>
                <li><a href="#">Drop Down 4</a></li>
            </ul>
            </li>
            <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
        </ul>
        <i className="bi mobile-nav-toggle bi-list" />
        </nav>{/* .navbar */}
    </div>
    </header>

    {/* End Header */}

    </>
  );
}

export default Navbar;
