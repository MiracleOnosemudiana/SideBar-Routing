import React from 'react';
import Firstsection from './PAGE SECTIONS/FirstSection/Firstsection';
import Secondsection from './PAGE SECTIONS/Second Section/Secondsection';
import Thirdsection from './PAGE SECTIONS/Third Section/Thirdsection';
import TopNavbar from './TOPNAV/TopNavbar';

const Profile = () => {
    return (
        <div className="right-hand-side col" style={{ padding: "0px" }}>
            <TopNavbar />
            <div className="px-4 px-md-0  pt-5 pb-5">
                <div class="container ">
                    <Firstsection />
                    <br />
                    <br />
                    <Thirdsection />
                    <br /><br />
                    <Secondsection />
                </div>
            </div>
        </div>
    );
}

export default Profile;