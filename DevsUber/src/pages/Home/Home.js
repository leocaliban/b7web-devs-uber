import React, { useRef, useState, useEffect } from 'react';

import {
    StatusBar,
} from 'react-native';

import {
    Container,
    IntineraryArea,
    IntineraryItem,
    IntineraryLabel,
    IntineraryPoint,
    IntineraryTitle,
    IntineraryValue,
    IntineraryPlaceholder
} from './HomeStyle';

import MapView from 'react-native-maps';

import Geolocation from '@react-native-community/geolocation';
import Geocoder from 'react-native-geocoding';

import { MAPS_API } from '../../configs/config';

import MapViewDirections from 'react-native-maps-directions';

const Page = () => {
    const map = useRef();

    const [mapLocal, setMapLocal] = useState({
        center: {
            latitude: -7.2348973,
            longitude: -35.8771093
        },
        zoom: 18,
        pitch: 0,
        altitude: 0,
        heading: 0
    });

    const [fromLocation, setFromLocation] = useState({});
    const [toLocation, setToLocation] = useState({});
    const [showDirections, setShowDirections] = useState(false);

    useEffect(() => {
        Geocoder.init(MAPS_API, { language: 'pt-br' });
        getMyCurrentPosition();
    }, []);

    useEffect(() => {
        if (fromLocation.center && toLocation.center) {
            setShowDirections(true);
        }
    }, [toLocation]);

    const getMyCurrentPosition = () => {
        Geolocation.getCurrentPosition(async (info) => {

            const geo = await Geocoder.from(info.coords.latitude, info.coords.longitude);
            if (geo.results.length > 0) {
                const location = {
                    name: geo.results[0].formatted_address,
                    center: {
                        latitude: info.coords.latitude,
                        longitude: info.coords.longitude
                    },
                    zoom: 18,
                    pitch: 0,
                    altitude: 0,
                    heading: 0
                };

                setMapLocal(location);
                setFromLocation(location);
            }
        }, (error) => {

        });
    };

    const handleFromClick = () => {

    };

    const handleToClick = async () => {

        const geo = await Geocoder.from('Av. Pref. Severino Bezerra Cabral, 1039');
        if (geo.results.length > 0) {
            const location = {
                name: geo.results[0].formatted_address,
                center: {
                    latitude: geo.results[0].geometry.location.lat,
                    longitude: geo.results[0].geometry.location.lng
                },
                zoom: 18,
                pitch: 0,
                altitude: 0,
                heading: 0
            };
            setToLocation(location);
        }
    };

    const handleDirectionsReady = (response) => {
        map.current.fitToCoordinates(response.coordinates, {
            edgePadding: {
                top: 400,
                right: 50,
                bottom: 100,
                left: 50,
            }
        });
    };

    return (
        <Container>
            <StatusBar barStyle="dark-content"></StatusBar>
            <MapView
                ref={map}
                style={{ flex: 1 }}
                provider="google"
                camera={mapLocal}
            >
                {fromLocation.center &&
                    <MapView.Marker
                        pinColor="black"
                        coordinate={fromLocation.center}
                    ></MapView.Marker>
                }

                {toLocation.center &&
                    <MapView.Marker
                        pinColor="black"
                        coordinate={toLocation.center}
                    ></MapView.Marker>
                }

                {showDirections &&
                    <MapViewDirections
                        origin={fromLocation.center}
                        destination={toLocation.center}
                        apikey={MAPS_API}
                        strokeWidth={3}
                        strokeColor="hotpink"
                        onReady={handleDirectionsReady}
                    ></MapViewDirections>
                }

            </MapView>

            <IntineraryArea>
                <IntineraryItem
                    onPress={handleFromClick}
                    underlayColor="#EEE"
                >
                    <>
                        <IntineraryLabel>
                            <IntineraryPoint color="#0000ff"></IntineraryPoint>
                            <IntineraryTitle>Origem</IntineraryTitle>
                        </IntineraryLabel>
                        {fromLocation.name &&
                            <IntineraryValue>{fromLocation.name}</IntineraryValue>
                        }
                        {!fromLocation.name &&
                            <IntineraryPlaceholder>Escolha um local de origem</IntineraryPlaceholder>
                        }


                    </>
                </IntineraryItem>

                <IntineraryItem
                    onPress={handleToClick}
                    underlayColor="#EEE"
                >
                    <>
                        <IntineraryLabel>
                            <IntineraryPoint color="#00FF00"></IntineraryPoint>
                            <IntineraryTitle>Destino</IntineraryTitle>
                        </IntineraryLabel>
                        {toLocation.name &&
                            <IntineraryValue>{toLocation.name}</IntineraryValue>
                        }
                        {!toLocation.name &&
                            <IntineraryPlaceholder>Escolha um local de destino</IntineraryPlaceholder>
                        }
                    </>
                </IntineraryItem>
            </IntineraryArea>
        </Container>
    );
}

export default Page;