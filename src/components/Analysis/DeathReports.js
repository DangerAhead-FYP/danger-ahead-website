import React from 'react'
import { MdToday } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { FaCarSide } from "react-icons/fa";
import { GiCarSeat } from "react-icons/gi";
import Countdown from "../../components/Analysis/Countdown"

export default function DeathReports() {
    return (
        <div>
            <div id="death-reports" className="row mt-5 pt-5">
                <div className="col-6 d-flex justify-content-center">
                    <ul id="death-reports-stats"className="list-unstyled">
                        <li className="mb-5 title">
                        <div className="red-btn-outline poppins">
                            Death Reports    
                        </div>  
                        </li>
                        <li className="stats">
                            <MdToday className="icon orange"/>
                            <span className="inter soft-black">Today : 14</span> 
                        </li>
                        <li className="stats">
                            <SlCalender className="icon orange"/>
                            <span className="inter soft-black">This Week : 14</span> 
                        </li>
                        <li className="stats">
                            <GiCarSeat className="icon orange"/>
                            <span className="inter soft-black">This Month : 14</span>
                        </li>
                        <li className="stats">
                            <FaCarSide className="icon orange"/>
                            <span className="inter soft-black">This Year : 14</span>
                        </li>
                    </ul>
                </div>
                <div className="col-6 d-flex align-items-center flex-column">
                    <p className="inter light-grey m-0">According to a survey in India,</p>
                    <h4 className="soft-black inter mb-5">A person dies every 10 seconds</h4>
                    <Countdown/>
                </div>

            </div>


        </div>
    )
}
