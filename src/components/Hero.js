import React from 'react'
import "../stylesheets/Hero.css"
import hero_img from "../images/hero-img.png"

export default function Hero() {
  return (
    <div>
        <div className="container">
            <div className="row flex-lg-row align-items-center g-5 py-5">
            <div className="col-lg-6">
                <h1 className="poppins f-60 lh-1 mb-3">Aiming for <br/>
                Acci-less Roads</h1>
                <p className="habibi grey ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero autem voluptas culpa consequatur blanditiis. Eius, deleniti recusandae aut maiores tenetur perspiciatis magnam nam ad asperiores est nesciunt, reiciendis corporis aperiam.</p>
                <button type="button" className="button red-btn">Get Started</button>
            </div>
            <div className="col-10 col-sm-8 col-lg-6">
                <img className='hero-img' src={hero_img} alt="danger-ahead-logo"/>
            </div>
            </div>
        </div>
    </div>
  )
}
