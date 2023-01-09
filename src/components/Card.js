import React from 'react'
import { Link } from "react-router-dom";
import "../stylesheets/Card.css"
import accident_img from "../images/accident-img.png"
import { MdLocationOn } from 'react-icons/md';
import { SlCalender } from 'react-icons/sl';
import { AiOutlineClockCircle } from 'react-icons/ai';

export default function Card() {
  return (
    <div className="card">
                  <img
                    className="card-img-top"
                    src={accident_img}
                    alt="Card image cap"
                  />
                <div className="card-body">
                    <div className="row">
                      <div className="col-7">
                        <h6 className='f-20 inter mb-0'>
                        Car Accident
                        </h6>
                        <p className='fw-semibold f-12 light-grey'><span className='orange'><MdLocationOn/></span>
                        Venus More, Siliguri</p>
                      </div>
                      <div className="col-5">
                        <button className='button red-btn-outline'>Details</button>
                      </div>
                    </div>
                    <p className='habibi f-12 grey lh-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    <p className='habibi f-12 light-grey lh-sm mb-0'>Number of Injured : 3 </p>
                    <p className='habibi f-12 light-grey lh-sm'>Number of Deaths : 1 </p>
                    <p className='fw-semibold f-12 dark-grey mb-0'><span><SlCalender/></span>
                    &nbsp; 24-05-22&nbsp; <span><AiOutlineClockCircle/></span>&nbsp; 11:06 PM</p>

                  {/* <br />
                  <h5 className="card-title">Start Your Application</h5>
                  <p className="card-text">
                    This is the second part of the SMM starter pack series of
                    articles. If you made it this far, you must be willing to
                    learn about promoting business through social media.
                  </p>
                  <div className="fixapplybut">
                    <Link to="" className="applybut">
                      <button className="btn btn-sih-other">
                        Apply Here ...
                      </button>
                    </Link>
                  </div> */}
                </div>
              </div>
  )
}
