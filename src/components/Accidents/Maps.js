import React, { Fragment, useState } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { MarkerF, InfoWindowF, InfoBoxF } from "@react-google-maps/api";
import customMarker from "../../images/acci.png";
import acci from "../../data.json"
import mapStyles from "../../stylesheets/Accidents/mapStyles"

//CARD
import "../../stylesheets/Accidents/Card_Accidents.css"
import accident_img from "../../images/accident-img.png"
import { MdLocationOn } from 'react-icons/md';
import { SlCalender } from 'react-icons/sl';
import { AiOutlineClockCircle } from 'react-icons/ai';
import Card_Accidents from "./Card_Accidents";

const containerStyle = {
    width: "100%",
    height: "90vh",
};

const center = {
    lat: 26.769290864950857,
    lng: 88.37616388253649,
};

const Maps = () => {
    const [selectedAcci, setSelectedAcci] = useState(null);

    const { isLoaded } = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: "AIzaSyAObG5o48uk0MFpkCkpebOzF1vHt07M-TI",
    });

    const [map, setMap] = useState(null);

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
                            // options={{}}
                        >

                        <Card_Accidents title={selectedAcci.title} desc={selectedAcci.desc} no_injured={selectedAcci.NumberOfInjured} no_deaths={selectedAcci.NumberOfDeaths} date={selectedAcci.eventDate} time={selectedAcci.eventTime}/>    

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
