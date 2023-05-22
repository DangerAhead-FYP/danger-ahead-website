import React, { Fragment, useState } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { MarkerF, InfoWindowF, InfoBoxF } from "@react-google-maps/api";
import customMarker from "../../images/acci.png";
import acci from "../../data.json"
import mapStyles from "../../stylesheets/Accidents/mapStyles"
import curr from "../../images/curr.png"
import "../../stylesheets/Accidents/maps.css"
import accident_img from "../../images/accident-img.png"
import { MdLocationOn } from 'react-icons/md';
import { SlCalender } from 'react-icons/sl';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { ImCross } from 'react-icons/im';
import { BsFillInfoCircleFill } from 'react-icons/bs';
//CARD
import "./Card_Accidents";
import "./Card_Accidents_Details";

const containerStyle = {
    width: "100%",
    height: "90vh",
};

// let center = {
//     lat: 26.769290864950857,
//     lng: 88.37616388253649,
// };

// const [center, setCenter] = useState({
//     lat: 26.769290864950857,
//     lng: 88.37616388253649,
// })

// function Locate() {

//     return (

//     )
// }
const libraries = ["places"]/*  */
const Maps = () => {
    const [center, setCenter] = useState({
        lat: 26.769290864950857,
        lng: 88.37616388253649,
    })
    const [selectedAcci, setSelectedAcci] = useState(null);
    const [selectedAcciDet, setSelectedAcciDet] = useState(null);

    const { isLoaded } = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: "AIzaSyAObG5o48uk0MFpkCkpebOzF1vHt07M-TI",
        libraries,
    });

    const [map, setMap] = useState(null);
    // const [currL, setCurr] = useState(center);

    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);
        setMap(map);
    }, []);

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null);
    }, []);
    
    function details(){
        setSelectedAcciDet(selectedAcci)
        setSelectedAcci(null)
    }
    function details_close(){
        setSelectedAcciDet(null)
    }

    return (
        <div>
            {isLoaded ? (
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={18}
                    onLoad={onLoad}
                    onUnmount={onUnmount}

                // options={{ styles: mapStyles, }}
                >
                    {
                        acci.data.map((acci) => {
                            return (
                                <div key={acci.id}>
                                    <MarkerF
                                        position={{ lat: acci.x, lng: acci.y }}
                                        options={{ icon: customMarker }}
                                        onClick={() => {
                                            setSelectedAcci(acci);
                                        }}
                                    />
                                </div>
                            );
                        })
                    }
                    {selectedAcci && (
                        <InfoWindowF

                            position={{
                                lat: selectedAcci.x,
                                lng: selectedAcci.y
                            }}
                            onCloseClick={() => {
                                setSelectedAcci(null)
                            }}
                        // options={{}}
                        >

                            {/* <Card_Accidents title={selectedAcci.title} desc={selectedAcci.desc} no_injured={selectedAcci.NumberOfInjured} no_deaths={selectedAcci.NumberOfDeaths} date={selectedAcci.eventDate} time={selectedAcci.eventTime} /> */}
                            <div className="card-accidents">
                                <img
                                    className="card-img-top"
                                    src={accident_img}
                                    alt="Card image cap"
                                />
                                <div className="card-body">
                                    <div className="row">
                                    <div className="col-7">
                                        <h6 className='f-20 inter mb-0'>
                                        {selectedAcci.title}
                                        </h6>
                                        <p className='fw-semibold f-12 light-grey'><span className='orange'><MdLocationOn /></span>
                                        Venus More, Siliguri</p>
                                    </div>
                                    <div className="col-5">
                                        <button className='button red-btn-outline' onClick={details}>Details</button>
                                    </div>
                                    </div>
                                    <p className='habibi f-12 grey lh-sm'>{selectedAcci.desc}</p>
                                    <p className='habibi f-12 light-grey lh-sm mb-0'>Number of injured :{selectedAcci.NumberOfInjured}</p>
                                    <p className='habibi f-12 light-grey lh-sm'>Number of deaths : {selectedAcci.NumberOfDeaths} </p>
                                    <p className='fw-semibold f-12 dark-grey mb-0'><span><SlCalender /></span>
                                    &nbsp; {selectedAcci.eventDate}&nbsp; <span><AiOutlineClockCircle /></span>&nbsp; {selectedAcci.eventTime} </p>
                                </div>
                                </div>

                        </InfoWindowF>
                    )}

                </GoogleMap>

            ) : (
                <></>
            )}
            {/* <Locate /> */}
            <div>
                <button
                    className="curr"
                    // onClick={() => {
                    //     navigator.geolocation.getCurrentPosition(
                    //         (position) => {
                    //             console.log(position);
                    //             const currL = {
                    //                 lat: position.coords.latitude,
                    //                 lng: position.coords.longitude
                    //             }
                    //             console.log(currL)
                    //             setCenter(currL)

                    //         },
                    //         () => null
                    //     )
                    // }}
                    onLoad={() => {
                        navigator.geolocation.getCurrentPosition(
                            (position) => {
                                console.log(position);
                                const currL = {
                                    lat: position.coords.latitude,
                                    lng: position.coords.longitude
                                }
                                console.log(currL)
                                setCenter(currL)

                            },
                            () => null
                        )
                    }}
                >
                    <img className="currI" src={curr} sizes="20px" />
                </button>
            </div>
            {selectedAcciDet && 
                <div className="card-accidents-details">
                <img
                  className="card-img-top"
                  src={accident_img}
                  alt="Card image cap"
                />
                <ImCross className="details-cross" onClick={details_close}/>
                <div className="card-body">
                    <div className="">
                      <h6 className='f-20 inter mb-0'>
                        {selectedAcciDet.title}
                      </h6>
                      <p className='fw-semibold f-12 light-grey'><span className='orange'><MdLocationOn /></span>
                        Venus More, Siliguri</p>
                        <p className='fw-semibold f-12 dark-grey mb-0'><span><SlCalender /></span>
                    &nbsp; {selectedAcciDet.eventDate}&nbsp; <span><AiOutlineClockCircle /></span>&nbsp; {selectedAcciDet.eventTime} </p>
                    </div>
                    <br/>
                    
                  <p className='habibi f-12 grey lh-sm'>{selectedAcciDet.desc}</p>
                  <div className="habibi f-12">
                        <p>Level of Damage : <button className="red-btn-outline-colored">Severe</button></p>
                    </div>
                  <p className='habibi f-12 lh-sm m-0'>Number of injured : {selectedAcciDet.NumberOfInjured}</p>
                  <p className='habibi f-12 lh-sm m-0'>Number of deaths : {selectedAcciDet.NumberOfDeaths} </p>
                  <div className="row card-data">
                        <p className='poppins f-12 lh-sm m-0 light-grey p-0'><BsFillInfoCircleFill className=""/> Road Information</p>
                        <br/>
                        <div className="col-6 p-0">
                            <h6 className='f-12 poppins mb-1 light-grey'>
                                TRAFFIC LIGHTS : <span className={`${selectedAcciDet.RoadData.TrafficLights=="Yes"?"text-success":"text-danger"}`}>{selectedAcciDet.RoadData.TrafficLights}</span> 
                            </h6>
                            <h6 className='f-12 poppins mb-0 light-grey'>
                                STREET LIGHTS :  <span className={`${selectedAcciDet.RoadData.StreetsLight=="Yes"?"text-success":"text-danger"}`}>{selectedAcciDet.RoadData.StreetsLight}</span>
                            </h6>
                            
                        </div>
                        <div className="col-6 p-0">
                        <h6 className='f-12 poppins mb-1 light-grey'>
                                TRAFFIC OFFICER : <span className={`${selectedAcciDet.RoadData.TrafficOfficer=="Yes"?"text-success":"text-danger"}`}>{selectedAcciDet.RoadData.TrafficOfficer}</span>
                            </h6>
                            <h6 className='f-12 poppins mb-0 light-grey'>
                                ROAD CONDITION:  <span className={`${selectedAcciDet.RoadData.RoadCondition=="Good"?"text-success":"text-warning"}`}>{selectedAcciDet.RoadData.RoadCondition}</span>
                            </h6>
                        </div>
                </div>
                <div className="card-data">
                <p className='poppins f-12 lh-sm m-0 light-grey'><BsFillInfoCircleFill className=""/> Crucial Details</p>
                    <h6 className="orange f-12 my-3">
                        Cause
                    </h6>
                    <p className="habibi grey f-12 lh-sm">
                    The most important thing of course is your personal safety. As soon as you are in an accident, assess the damage to yourself and the passengers in your car first before investigating the damage to your car or the other person’s vehicle.
                    </p>
                    <h6 className="orange f-12 my-3">
                    Preventive Measures
                    </h6>
                    <p className="habibi grey f-12 lh-sm">
                    The most important thing of course is your personal safety. As soon as you are in an accident, assess the damage to yourself and the passengers in your car first before investigating the damage to your car or the other person’s vehicle.
                    </p>
                </div>
                </div>
              </div>
            }
        </div>
    );
};

export default Maps;
