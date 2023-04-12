import React, { Fragment } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
const containerStyle = {
    width: "100%",
    height: "720px",
};

const center = {
    lat: 10.894421705347245,
    lng: 76.99704007070052
};
const Maps = () => {
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
        <div >
            {isLoaded ? (
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={18}
                    onLoad={onLoad}
                    onUnmount={onUnmount}
                >
                    {/* Child components, such as markers, info windows, etc. */}
                    <></>
                </GoogleMap>
            ) : (
                <></>
            )}
        </div>
    );
};

export default Maps;
