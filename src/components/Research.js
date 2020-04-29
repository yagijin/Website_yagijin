import React from "react";
import MainHeader from './MainHeader.js';
import MainFooter from './MainFooter.js';

import '../App.scss';

function Research() {

    return (
        <>
          <MainHeader />
          <div className="research-main">
            <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vSJZG1LR_HvVRxHaf1NdLJWl1QRPAMwC9pbaOjbbFr2BvW1kjBsMZZjYU4DuNre-drUBCJGrvGzDi1n/embed?start=false&loop=false&delayms=3000" title="researchslide" frameBorder="0" width="100%" height="100%" allowFullScreen={true} mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
          </div>
          <MainFooter />
        </>
    );;
}

export default Research;