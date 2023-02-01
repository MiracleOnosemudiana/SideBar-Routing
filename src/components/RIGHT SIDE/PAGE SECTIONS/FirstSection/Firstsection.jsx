import React from 'react';

const Firstsection = () => {
    return (
        <div>
            <div class="row gx-3 gy-5">
                <div class="col-lg-3 col-md-6">
                    <div class="p-3 border bg-white shadow rounded">
                        <div class=" text-dark" style={{ position: "relative" }}>
                            <i class="fa fa-sticky-note text-white  position-absolute rounded bg-warning"
                                style={{ padding: "1.5rem", top: "-3rem", fontSize: "2rem" }} aria-hidden="true"></i>
                            <p class="text-end">Loripsum</p>
                            <br />
                            <h2 class="text-end">495324</h2>
                            <a href="#" class="text-danger text-start" style={{ fontSize: "13px" }}><span><i
                                class="fa fa-list" aria-hidden="true"></i></span> Loremhjciipsum</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="p-3 border bg-white shadow rounded">
                        <div class=" text-dark" style={{ position: "relative" }}>
                            <i class="fa fa-shopping-bag text-white  position-absolute rounded bg-success"
                                style={{ padding: "1.5rem", top: "-3rem", fontSize: "2rem" }} aria-hidden="true"></i>
                            <p class="text-end">Lorsum</p>
                            <br />
                            <h2 class="text-end">534245</h2>
                            <a href="#" class="text-start text-dark" style={{ fontSize: "13px" }}><span><i
                                class="fa fa-list" aria-hidden="true"></i></span> Loremhjipsum</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="p-3 border bg-white shadow rounded">
                        <div class=" text-dark" style={{ position: "relative" }}>
                            <i class="fa fa-clock-o text-white  position-absolute rounded bg-danger"
                                style={{ padding: "1.5rem", top: "-3rem", fontSize: "2rem" }} aria-hidden="true"></i>
                            <p class="text-end">Loripsum</p>

                            <h2 class="text-end">75</h2>
                            <a href="#" class=" text-dark text-start"  style={{ fontSize: "13px" }}><span><i
                                class="fa fa-list" aria-hidden="true"></i></span> Loremhjciipsum</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="p-3 border bg-white shadow rounded">
                        <div class=" text-dark" style={{ position:'relative'}}>
                            <i class="fa fa-twitter text-white  position-absolute rounded bg-info"
                                style={{ padding: "1.5rem", top: "-3rem", fontSize: "2rem" }} aria-hidden="true"></i>
                            <p class="text-end">Loripsum</p>

                            <h2 class="text-end">245</h2>
                            <a href="#" class=" text-dark text-start" style={{ fontSize: "13px" }}><span><i
                                class="fa fa-list" aria-hidden="true"></i></span> Loremhjciipsum</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Firstsection;
