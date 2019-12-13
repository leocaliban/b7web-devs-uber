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

const Page = () => {
    const map = useRef();

    const [mapLocal, setMapLocal] = useState({
        center: {
            latitude: -7.23537,
            longitude: -35.8756552
        },
        zoom: 18,
        pitch: 0,
        altitude: 0,
        heading: 0
    });

    const [fromLocation, setFromLocation] = useState({});
    const [toLocation, setToLocation] = useState({});

    useEffect(() => {
        Geocoder.init(MAPS_API, { language: 'pt-br' });
        getMyCurrentPosition();
    }, []);

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
                    zoom: 19,
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

    return (
        <Container>
            <StatusBar barStyle="dark-content"></StatusBar>
            <MapView
                ref={map}
                style={{ flex: 1 }}
                provider="google"
                camera={mapLocal}
            ></MapView>

            <IntineraryArea>
                <IntineraryItem>
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

                <IntineraryItem>
                    <>
                        <IntineraryLabel>
                            <IntineraryPoint color="#00FF00"></IntineraryPoint>
                            <IntineraryTitle>Destino</IntineraryTitle>
                        </IntineraryLabel>
                        {toLocation.name &&
                            <IntineraryValue>...</IntineraryValue>
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