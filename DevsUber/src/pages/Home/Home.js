import React, { useRef, useState } from 'react';

import {
    StatusBar,
    View,
    Text
} from 'react-native';

import { Container } from './HomeStyle';

import MapView from 'react-native-maps';

const Page = () => {
    const map = useRef();

    const [mapLocal, setMapLocal] = useState({
        center: {
            latitude: -7.23537,
            longitude: -35.8756552
        },
        zoom: 19,
        pitch: 0,
        altitude: 0,
        heading: 0
    });

    return (
        <Container>
            <StatusBar barStyle="dark-content"></StatusBar>
            <MapView
                ref={map}
                style={{ flex: 1 }}
                provider="google"
                camera={mapLocal}
            ></MapView>
        </Container>
    );
}

export default Page;