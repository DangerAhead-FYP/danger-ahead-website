import React from 'react'
import "../../stylesheets/Accidents/Card_Accidents.css"
import warning_img from "../../images/warning-img.png"
import { MdLocationOn } from 'react-icons/md';
import { SlCalender } from 'react-icons/sl';
import { AiOutlineClockCircle } from 'react-icons/ai';

export default function Card_Warnings() {
  return (
    <div>
      <div className="card">
        <img
          className="card-img-top"
          src={warning_img}
          alt="Card image cap"
        />
        <div className="card-body">
          <div className="row">
            <div className="col-7">
              <h6 className='f-20 inter mb-0'>
                Potholes
              </h6>
              <p className='fw-semibold f-12 light-grey'><span className='orange'><MdLocationOn /></span>
                Darjeeling More, Siliguri</p>
            </div>
            <div className="col-5">
              <button className='button red-btn-outline'>Details</button>
            </div>
          </div>
          <p className='habibi f-12 grey lh-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
          <div className="row my-3 align-items-center">
            <div className="col-4 habibi f-12 pe-0">Requirements : </div>
            <div className="col-2">
              <button className='button red-btn-outline-coloured'>URGENT</button>
            </div>
          </div>
          <p className='fw-semibold f-12 dark-grey mb-0'><span><SlCalender /></span>
            &nbsp; 24-05-22&nbsp; <span><AiOutlineClockCircle /></span>&nbsp; 11:06 PM</p>
        </div>
      </div>
    </div>
  )
}
