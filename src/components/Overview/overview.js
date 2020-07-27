import React from 'react';
import './overview.scss';
const BANNER = require("../../assets/img/banner.png").default;

const Overview = props => {
    return (
        <div >
            <div className="banner-outer">
                <div className="container">
                    <img className="banner" src={BANNER} />
                </div>
            </div>
            <div className="overview-body">
                <div className="container">
                    <h1>Overview</h1>
                    <p>
                       Baaz Framework is an open source UI toolkit for building performant, high-quality Web apps  — HTML, CSS, and JavaScript — with integrations for popular frameworks like React.
                    </p>
                    <p>
                        Get started building by <a href="https://baazframework.github.io/#/cli">installing Baaz</a> or following our First App Tutorial to learn the main concepts.
                    </p>
                </div>
            </div>
        </div >
    );
};


export default Overview;
