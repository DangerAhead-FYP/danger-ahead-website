import React, { Fragment, useState } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { MarkerF, InfoWindowF, InfoBoxF } from "@react-google-maps/api";


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
          {/* {
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

                            <Card_Accidents title={selectedAcci.title} desc={selectedAcci.desc} no_injured={selectedAcci.NumberOfInjured} no_deaths={selectedAcci.NumberOfDeaths} date={selectedAcci.eventDate} time={selectedAcci.eventTime} />

                        </InfoWindowF>
                    )} */}

        </GoogleMap>

      ) : (
        <></>
      )}
      {/* <Locate /> */}
      {/* <div>
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
      </div> */}

    </div>
  );
};

export default Maps;
