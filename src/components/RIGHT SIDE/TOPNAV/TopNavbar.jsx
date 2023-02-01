import React from 'react';
import './TopNavbar.css'

const TopNavbar = () => {
  return (
    <div className="nav2 navbar" style={{zIndex: 100}}>

      <nav className="navbar navbar-expand-lg " style={{width:"100%"}}>
        <div className="container-fluid">
          <button className="btn text-dark ms-1 off-canvas-open" type="button" data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions"><i
              className="fa fa-opencart" aria-hidden="true"></i></button>
          <a className="navbar-brand text-dark" href="#"><b>Lorem, ipsum</b></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02"
            aria-expanded="false" aria-label="Toggle navigation">
            <i className="fa fa-bars" aria-hidden="true"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <div className=" me-auto" role="search">
            </div>
            <form className=" me-4" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            </form>
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item ps-4 hover">
                <a className="nav-link active" aria-current="page" href="#"><i
                  className="fa fa-rouble text-dark" aria-hidden="true"></i></a>
              </li>
              <li className="nav-item ps-4 hover">
                <a className="nav-link active" aria-current="page" href="#"><i
                  className="fa fa-envelope text-dark" aria-hidden="true"></i></a>
              </li>
              <li className="nav-item ps-4 hover">
                <a className="nav-link active" aria-current="page" href="#"><i
                  className="fa fa-bell text-dark" aria-hidden="true"></i></a>
              </li>
              <li className="nav-item ps-4 hover">
                <a className="nav-link active" aria-current="page" href="#"><i
                  className="fa fa-download text-dark" aria-hidden="true"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
            
    </div>
  );
}

export default TopNavbar;