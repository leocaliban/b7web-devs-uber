import React, { useRef } from 'react';

import {
    StatusBar,
    View,
    Text
} from 'react-native';

import { Container } from './HomeStyle';

import MapView from 'react-native-maps';

const Page = () => {
    const map = useRef();
    return (
        <Container>
            <StatusBar barStyle="dark-content"></StatusBar>
            <MapView
                ref={map}
                style={{ flex: 1 }}
                provider="google"
            ></MapView>
        </Container>
    );
}

export default Page;