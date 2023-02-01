import React from 'react';
import './Secondsection.css'
import chart1 from '../../../../image/chart 1.png'
import chart2 from '../../../../image/chart 2.png'
import chart3 from '../../../../image/chart 3.png'

const Secondsection = () => {
    return (

        <div className="row gx-3 gy-4 mb-3">
            <div className="col-lg-4 col-md-11 secondLayer">
                <div className="p-2 border bg-white shadow rounded">
                    <div className=" text-dark text-start">
                        <div className="chart">
                            <img src={chart1} alt="chart 1" className="chart-img" />
                        </div>
                        <div className="pt-3">
                            <h4>Daily Sales</h4>
                            <p>Lorem ipsum dolor sit amet.</p>

                            <p><span><i className="fa fa-list-ul text-secondary" aria-hidden="true"></i>
                            </span>Lorem ipsum dolor sit.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-11 secondLayer">
                <div className="p-2 border bg-white shadow rounded">
                    <div className=" text-dark text-start">
                        <div className="chart">
                            <img src={chart2} alt="chart 2" className="chart-img" />
                        </div>
                        <div className="pt-3">
                            <h4>Lorem, ipsum dolor.</h4>
                            <p>Lorem ipsum dolor sit amet osi.</p>

                            <p><span><i className="fa fa-list-ul text-secondary" aria-hidden="true"></i>
                            </span>Lorem ipsum dolor sit.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-11 secondLayer">
                <div className="p-2 border bg-white shadow rounded">
                    <div className=" text-dark text-start">
                        <div className="chart">
                            <img src={chart3} alt="chart 3" className="chart-img" />
                        </div>
                        <div className="pt-3">
                            <h4>Dailymaind Sales</h4>
                            <p>Lorem ipsum dolor sit amet ors.</p>

                            <p><span><i className="fa fa-list-ul text-secondary" aria-hidden="true"></i>
                            </span>Lorem ipsum dolor sit.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Secondsection;