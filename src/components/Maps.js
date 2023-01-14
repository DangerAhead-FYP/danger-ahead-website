import React from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

export default function Maps() {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyD1V9-RUmRrhgitMMiErcCkNTN0heri1os",
    });
    if (!isLoaded) return <div>Map is Loading...</div>;
    return <Map />;
}
function Map() {
    return (
        <div>
            <h2 className="text-center p-5" id="colorfix"> You </h2>
            <GoogleMap
                zoom={10}
                center={{ lat: 10.894421705347245, lng: 76.99704007070052 }}
                mapContainerClassName="map-container"
            >
                <Marker position={{ lat: 10.894421705347245, lng: 76.99704007070052 }} label="HIT Hospital" />
            </GoogleMap>
            ;
        </div>
    );
}