import React,{useState} from 'react'
import { MdToday } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { FaCarSide } from "react-icons/fa";
import { GiCarSeat } from "react-icons/gi";
import Countdown from "./Countdown"
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "../../stylesheets/Analysis/Countdown.css"

export default function DeathReports() {

    // const renderTime = ({ remainingTime }) => {
    //       if (remainingTime === 0) {
    //         setToday(today+1)
    //       }
        
    //       return (
    //         <div className="timer">
    //           <div className="value">{remainingTime}</div>
    //           <div className="text">seconds</div>
    //         </div>
    //       );
    //     };
        

    // const date = new Date();
    // let hrs = date.getHours();      
    // let mins = date.getMinutes();
    // let year = date.getFullYear();
    // // console.log(day,month,year)

    // const [today,setToday]=useState(hrs*60+mins*6)
    // console.log(today)

    return (
        <div>
            <div id="death-reports" className="row">
                <div className="countdown d-flex align-items-center flex-column">
                    <Countdown/>
                    <br/>
                    <p className="inter light-grey m-0">According to World Health Organisation ( WHO )</p>
                    <h4 className="soft-black inter mb-5">A person dies every 10 seconds in a road accident</h4>
                </div>
                <div className="container row d-row-center col-12 m-auto">
                    <div id="kpi1" className="col-lg-3 col-sm-6 col-12 d-row-center my-3">
                        {/* <Image src={Kpi1} alt="" height={80} width={80}></Image> */}
                        <div className='d-col-center kpi-text'>
                            <h6 className="orange f-30"><MdToday/> 8640</h6>
                            <p className=''>Deaths in a Day</p>
                        </div>
                    </div>
                    <div id="kpi2" className="col-lg-3 col-sm-6 col-12 d-row-center my-3">
                    {/* <Image src={Kpi2} height={80}  alt="" width={80}></Image> */}
                        <div className='d-col-center kpi-text'>
                        <h6 className="orange f-30"><SlCalender/> 60480</h6>
                            <p className=''>Deaths in a Week</p>
                        </div>
                    </div>
                    <div id="kpi3" className="col-lg-3 col-sm-6 col-12 d-row-center my-3">
                    {/* <Image src={Kpi3} height={80} alt="" width={80}></Image> */}
                        <div className='d-col-center kpi-text'>
                        <h6 className="orange f-30"><FaCarSide/> 241920</h6>
                            <p className=''>Deaths in a Month</p>
                        </div>
                    </div>
                    <div id="kpi4" className="col-lg-3 col-sm-6 col-12 d-row-center my-3">
                    {/* <Image src={Kpi4} height={80} alt="" width={80}></Image> */}
                        <div className='d-col-center kpi-text'>
                        <h6 className="orange f-30"><GiCarSeat/> 2903040</h6>
                            <p className=''>Deaths in a Year</p>
                        </div>
                    </div>
                </div>
            </div>            
        </div>
    )
}
