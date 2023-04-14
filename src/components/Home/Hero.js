import React from 'react'
import "../../stylesheets/Home/Hero.css"
import hero_img from "../../images/hero-img.png"

export default function Hero() {
  return (
    <div>
        <div className="my-5">
            <div className="row flex-lg-row align-items-center py-3 w-100">
            <div className="col-text col-lg-6 col-12">
                <h1 className="poppins f-50 lh-1 mb-3">Aiming for <br/>
                Acci-less Roads</h1>
                <p className="habibi grey f-14">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero autem voluptas culpa consequatur blanditiis. Eius, deleniti recusandae aut maiores tenetur perspiciatis magnam nam ad asperiores est nesciunt, reiciendis corporis aperiam.</p>
                <button type="button" className="button red-btn">Get Started</button>
            </div>
            <div className="col-img col-lg-6 col-12">
                <img className='hero-img' src={hero_img} alt="danger-ahead-logo"/>
            </div>
            </div>
        </div>
    </div>
  )
}
