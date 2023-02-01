import React from 'react';
import { Link } from "react-router-dom";
const OffcanvasSideNav = () => {
    return (
        <div>
            <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions"
                aria-labelledby="offcanvasWithBothOptionsLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">

                    </h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div classNameName="offcanvas-body">
                    <div className="side-menu-top ">

                        <ul className="ul">
                            <li>
                                <a href="#" className="logo2">
                                    <span className="nav-item side-links">Code &nbsp;Info</span>
                                </a>
                            </li>
                            <li>
                                <Link to='/' className='a'>
                                    <i className="fa fa-home ic" aria-hidden="true"></i>
                                    <span className="nav-item side-links">Home</span>
                                </Link>

                            </li>
                            <li>
                                <Link to='/profile' className="a">
                                    <i className="fa fa-user ic" aria-hidden="true"></i>
                                    <span className="nav-item side-links">Profile</span>
                                </Link>
                            </li>
                            <li>
                                <Link to='/wallet' className="a">
                                    <i className="fa fa-money ic" aria-hidden="true"></i>
                                    <span className="nav-item side-links">Wallet</span>
                                </Link>
                            </li>
                            <li>
                                <Link to='/righthandside' className="a">
                                    <i className="fa fa-bar-chart-o ic" aria-hidden="true"></i>
                                    <span className="nav-item side-links">Analytics</span>
                                </Link>
                            </li>
                            <li>
                                <Link to='' className="a">
                                    <i className="fa fa-tasks ic" aria-hidden="true"></i>
                                    <span className="nav-item side-links">Tasks</span>
                                </Link>
                            </li>
                            <li>
                                <Link to='' className="a">
                                    <i className="fa fa-cog ic" aria-hidden="true"></i>
                                    <span className="nav-item side-links">Setting</span>
                                </Link>
                            </li>
                            <li>
                                <Link to='' className="a">
                                    <i className="fa fa-question-circle ic" aria-hidden="true"></i>
                                    <span className="nav-item side-links">Help</span>
                                </Link>
                            </li>
                            <li>
                                <Link to='' className="a">
                                    <i className="fa fa-sign-out ic" aria-hidden="true"></i>
                                    <span className="nav-item side-links">Log out</span>
                                </Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default OffcanvasSideNav;
