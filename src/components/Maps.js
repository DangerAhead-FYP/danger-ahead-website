import React, { Fragment, useState } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { MarkerF, InfoWindowF, InfoBoxF } from "@react-google-maps/api";
import customMarker from "../images/acci.png";
import acci from "../data.json"
import mapStyles from "../stylesheets/mapStyles"

//CARD
import "../stylesheets/Card_Accidents.css"
import accident_img from "../images/accident-img.png"
import { MdLocationOn } from 'react-icons/md';
import { SlCalender } from 'react-icons/sl';
import { AiOutlineClockCircle } from 'react-icons/ai';

const containerStyle = {
    width: "100%",
    height: "100vh",
};

const center = {
    lat: 26.688315262877015,
    lng: 88.4347097728035,
};

const Maps = () => {
    const [selectedAcci, setSelectedAcci] = useState(null);

    const { isLoaded } = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: "AIzaSyAObG5o48uk0MFpkCkpebOzF1vHt07M-TI",
    });

    const [map, setMap] = React.useState(null);

    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);
        setMap(map);
    }, []);

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null);
    }, []);

    return (
        <div>
            {isLoaded ? (
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={18}
                    onLoad={onLoad}
                    onUnmount={onUnmount}
                // options={{ styles: mapStyles,  }}
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
                        >
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
                                                {selectedAcci.title}
                                            </h6>
                                            <p className='fw-semibold f-12 light-grey'><span className='orange'><MdLocationOn /></span>
                                                Venus More, Siliguri</p>
                                        </div>
                                        <div className="col-5">
                                            <button className='button red-btn-outline'>Details</button>
                                        </div>
                                    </div>
                                    <p className='habibi f-12 grey lh-sm'>{selectedAcci.desc}</p>
                                    <p className='habibi f-12 light-grey lh-sm mb-0'>Number of Injured : {selectedAcci.NumberOfInjured}</p>
                                    <p className='habibi f-12 light-grey lh-sm'>Number of Deaths : 1 </p>
                                    <p className='fw-semibold f-12 dark-grey mb-0'><span><SlCalender /></span>
                                        &nbsp; {selectedAcci.eventDate}&nbsp; <span><AiOutlineClockCircle /></span>&nbsp;{selectedAcci.eventTime}</p>
                                </div>
                            </div>
                        </InfoWindowF>
                    )}
                </GoogleMap>
            ) : (
                <></>
            )}
        </div>
    );
};

export default Maps;
