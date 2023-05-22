import React from 'react'
import "../../stylesheets/Accidents/Card_Accidents_Details.css"
import accident_img from "../../images/accident-img.png"
import { MdLocationOn } from 'react-icons/md';
import { SlCalender } from 'react-icons/sl';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { ImCross } from 'react-icons/im';

export default function Card_Accidents_Details(props) {
  function details(){
    
  }
  return (
    <div className="card-accidents-details">
      <img
        className="card-img-top"
        src={accident_img}
        alt="Card image cap"
      />
      <ImCross class="details-cross"/>
        <h4></h4>
      <div className="card-body">
        <div className="row">
          <div className="col-7">
            <h6 className='f-20 inter mb-0'>
              {props.title}
            </h6>
            <p className='fw-semibold f-12 light-grey'><span className='orange'><MdLocationOn /></span>
              Venus More, Siliguri</p>
          </div>
          <div className="col-5">
            <button className='button red-btn-outline' onClick={details}>Details</button>
          </div>
        </div>
        <p className='habibi f-12 grey lh-sm'>{props.desc}</p>
        <p className='habibi f-12 light-grey lh-sm mb-0'>Number of injured :{props.no_injured}</p>
        <p className='habibi f-12 light-grey lh-sm'>Number of deaths : {props.no_deaths} </p>
        <p className='fw-semibold f-12 dark-grey mb-0'><span><SlCalender /></span>
          &nbsp; {props.date}&nbsp; <span><AiOutlineClockCircle /></span>&nbsp; {props.time} </p>
      </div>
    </div>
  )
}
