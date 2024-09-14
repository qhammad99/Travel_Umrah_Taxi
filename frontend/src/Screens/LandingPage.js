import React, { useState } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    ImageBackground
} from 'react-native';
import Colors from '../colors/Colors';
import { Picker } from '@react-native-picker/picker';
import LottieView from 'lottie-react-native';

const LandingPage = ({ navigation }) => {

    let route_data = [
        {
            id: '1', name: 'Jeddah Airport to Makkah Hotel', available_cars: [
                {
                    car_name: 'CAMRY',
                    image_name: require('../../assets/photos/CAMRY.png'),
                    no_passegers: 4,
                    no_bags: 3,
                    price: 300,
                    currency_symbol: 'SAR'
                },
                {
                    car_name: 'STARIA',
                    image_name: require('../../assets/photos/STARIA.png'),
                    no_passegers: 7,
                    no_bags: 8,
                    price: 350,
                    currency_symbol: 'SAR'
                },
                {
                    car_name: 'GMC',
                    image_name: require('../../assets/photos/GMC.png'),
                    no_passegers: 7,
                    no_bags: 8,
                    price: 600,
                    currency_symbol: 'SAR'
                },
                {
                    car_name: 'HIACE',
                    image_name: require('../../assets/photos/HIACE.png'),
                    no_passegers: 12,
                    no_bags: 15,
                    price: 450,
                    currency_symbol: 'SAR'
                },
            ]
        },
        {
            id: '2', name: 'Makkah Hotel to Makkah Ziyarah', available_cars: [
                {
                    car_name: 'CAMRY',
                    image_name: require('../../assets/photos/CAMRY.png'),
                    no_passegers: 4,
                    no_bags: 3,
                    price: 250,
                    currency_symbol: 'SAR'
                },
                {
                    car_name: 'STARIA',
                    image_name: require('../../assets/photos/STARIA.png'),
                    no_passegers: 7,
                    no_bags: 8,
                    price: 350,
                    currency_symbol: 'SAR'
                },
                {
                    car_name: 'GMC',
                    image_name: require('../../assets/photos/GMC.png'),
                    no_passegers: 7,
                    no_bags: 8,
                    price: 500,
                    currency_symbol: 'SAR'
                },
                {
                    car_name: 'HIACE',
                    image_name: require('../../assets/photos/HIACE.png'),
                    no_passegers: 12,
                    no_bags: 15,
                    price: 400,
                    currency_symbol: 'SAR'
                },
            ]
        },
        {
            id: '3', name: 'Makkah Hotel to Madinah Hotel', available_cars: [
                {
                    car_name: 'CAMRY',
                    image_name: require('../../assets/photos/CAMRY.png'),
                    no_passegers: 4,
                    no_bags: 3,
                    price: 500,
                    currency_symbol: 'SAR'
                },
                {
                    car_name: 'STARIA',
                    image_name: require('../../assets/photos/STARIA.png'),
                    no_passegers: 7,
                    no_bags: 8,
                    price: 700,
                    currency_symbol: 'SAR'
                },
                {
                    car_name: 'GMC',
                    image_name: require('../../assets/photos/GMC.png'),
                    no_passegers: 7,
                    no_bags: 8,
                    price: 1200,
                    currency_symbol: 'SAR'
                },
                {
                    car_name: 'HIACE',
                    image_name: require('../../assets/photos/HIACE.png'),
                    no_passegers: 12,
                    no_bags: 15,
                    price: 800,
                    currency_symbol: 'SAR'
                },
            ]
        },
        {
            id: '4', name: 'Madinah Hotel to Madinah Ziyarah', available_cars: [
                {
                    car_name: 'CAMRY',
                    image_name: require('../../assets/photos/CAMRY.png'),
                    no_passegers: 4,
                    no_bags: 3,
                    price: 250,
                    currency_symbol: 'SAR'
                },
                {
                    car_name: 'STARIA',
                    image_name: require('../../assets/photos/STARIA.png'),
                    no_passegers: 7,
                    no_bags: 8,
                    price: 300,
                    currency_symbol: 'SAR'
                },
                {
                    car_name: 'GMC',
                    image_name: require('../../assets/photos/GMC.png'),
                    no_passegers: 7,
                    no_bags: 8,
                    price: 450,
                    currency_symbol: 'SAR'
                },
                {
                    car_name: 'HIACE',
                    image_name: require('../../assets/photos/HIACE.png'),
                    no_passegers: 12,
                    no_bags: 15,
                    price: 400,
                    currency_symbol: 'SAR'
                },
            ]
        },
        {
            id: '5', name: 'Makkah Hotel to Taif & Return', available_cars: [
                {
                    car_name: 'CAMRY',
                    image_name: require('../../assets/photos/CAMRY.png'),
                    no_passegers: 4,
                    no_bags: 3,
                    price: 500,
                    currency_symbol: 'SAR'
                },
                {
                    car_name: 'STARIA',
                    image_name: require('../../assets/photos/STARIA.png'),
                    no_passegers: 7,
                    no_bags: 8,
                    price: 700,
                    currency_symbol: 'SAR'
                },
                {
                    car_name: 'GMC',
                    image_name: require('../../assets/photos/GMC.png'),
                    no_passegers: 7,
                    no_bags: 8,
                    price: 1200,
                    currency_symbol: 'SAR'
                },
                {
                    car_name: 'HIACE',
                    image_name: require('../../assets/photos/HIACE.png'),
                    no_passegers: 12,
                    no_bags: 15,
                    price: 800,
                    currency_symbol: 'SAR'
                },
            ]
        }
    ];

    route_data = [
        { id: '0', name: 'Select Route', available_cars: [] },
        ...route_data
    ]

    const handleRouteClick = (value) => {
        if (value > 0)
            navigation.navigate('Route', { value, route_data });
    };

    return (
        <ImageBackground
            source={require('../../assets/photos/Group5.png')}
            style={styles.bgImg}
            imageStyle={{ opacity: 0.1 }}
        >
            {/* 2. some image vector */}
            <LottieView
                source={require('../../assets/photos/car-animation.json')}
                autoPlay
                loop
                style={styles.taxiVector} />

            {/* 3. button for route */}
            <View style={styles.dropDownContainer}>
                <Picker
                    selectedValue={route_data[0].id}
                    style={{
                        backgroundColor: Colors.primary,
                        color: '#414141',
                        fontSize: 18
                    }}
                    onValueChange={(itemValue) => handleRouteClick(itemValue)}
                    dropdownIconColor={'#414141'}
                >
                    {route_data.map(item => item.id >= 0 && <Picker.Item label={item.name} value={item.id} key={`item ${item.id}`} style={{ fontFamily: 'Outfit-Medium' }} />)}
                </Picker>
            </View>
        </ImageBackground>

    );
};

const styles = StyleSheet.create({
    safeViewHolder: {
        flex: 1,
        backgroundColor: 'transparent'
    },
    bgImg: {
        flex: 1,
        backgroundColor: '#fff'
    },
    taxiVector: {
        marginTop: 20,
        height: 400,
        width: '90%',
        borderRadius: 20,
        alignSelf: 'center',
    },
    dropDownContainer: {
        width: 300,
        alignSelf: 'center',
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: '#000'
    }
});

export default LandingPage;