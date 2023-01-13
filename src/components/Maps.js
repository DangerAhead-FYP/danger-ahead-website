import React from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

export default function Maps() {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyD8k_OR81gjfbZrfTip06iuGoRdyr2o_uo",
    });
    if (!isLoaded) return <div>Map is Loading...</div>;
    return <Map />;
}
function Map() {
    return (
        <div>
            <h2 className="text-center p-5" id="colorfix">Nearest Hospitals Around You </h2>
            <GoogleMap
                zoom={10}
                center={{ lat: 10.894421705347245, lng: 76.99704007070052 }}
                mapContainerClassName="map-container"
            >
                <Marker position={{ lat: 10.894421705347245, lng: 76.99704007070052 }} label="HIT Hospital" />
                <Marker position={{ lat: 10.898116560138122, lng: 77.00169570530339 }} label="Tamil Nadu Hospital" />
                <Marker position={{ lat: 10.916883733023466, lng: 77.00527318587048 }} label="Tamil Nadu Hospital" />
                <Marker position={{ lat: 10.886726266165752, lng: 76.9587730318203 }} label="Tamil Nadu Hospital" />
                <Marker position={{ lat: 10.874619944893427, lng: 77.02711744428476 }} label="Tamil Nadu Hospital" />

            </GoogleMap>
            ;
        </div>
    );
}