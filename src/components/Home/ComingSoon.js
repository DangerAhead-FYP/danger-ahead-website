import React from 'react'
import "../../stylesheets/Home/ComingSoon.css"

export default function ComingSoon() {
    return (
        <div>
             <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center">
            <div className="col-md-5 p-lg-5 mx-auto my-5">
            <h5 className="fw-normal poppins">Danger Ahead</h5>
            <h1 className="fw-normal poppins orange">MOBILE APP</h1>
            <p className="habibi grey">And an even wittier subheading to boot. Jumpstart your marketing efforts with this example based on Apple’s marketing pages.</p>
            <a className="btn red-btn-outline" href="#">Coming soon</a>
            </div>
            <div className="product-device shadow-sm d-none d-md-block"></div>
            <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
            </div>

        </div>
    )
}
