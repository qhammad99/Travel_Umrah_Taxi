import React from 'react';
import {
    View,
    StyleSheet,
    ImageBackground,
    Linking
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import LottieView from 'lottie-react-native';
import Colors from '../colors/Colors';

const LandingPage = ({ navigation, language, theme }) => {
    const routeData = {
        "en": [
            { id: '0', name: "Select Route", available_cars: [] },
            {
                "id": "1",
                "name": "Jeddah Airport to Makkah Hotel",
                "available_cars": [
                    {
                        "car_name": "STAR X",
                        "image_name": require('../../assets/photos/STAR_X.png'),
                        "no_passegers": 7,
                        "no_bags": 8,
                        "price": 300,
                        "currency_symbol": "SAR",
                        "enabled": false
                    },
                    {
                        "car_name": "STARIA",
                        "image_name": require('../../assets/photos/STARIA.png'),
                        "no_passegers": 7,
                        "no_bags": 8,
                        "price": 300,
                        "currency_symbol": "SAR",
                        "enabled": false
                    },
                    {
                        "car_name": "CAMRY",
                        "image_name": require('../../assets/photos/CAMRY.png'),
                        "no_passegers": 4,
                        "no_bags": 3,
                        "price": 270,
                        "currency_symbol": "SAR",
                        "enabled": false
                    },
                    {
                        "car_name": "HIACE",
                        "image_name": require('../../assets/photos/HIACE.png'),
                        "no_passegers": 12,
                        "no_bags": 15,
                        "price": 400,
                        "currency_symbol": "SAR",
                        "enabled": false
                    },
                    {
                        "car_name": "COASTER",
                        "image_name": require('../../assets/photos/COASTER.png'),
                        "no_passegers": 23,
                        "no_bags": 23,
                        "price": 700,
                        "currency_symbol": "SAR",
                        "enabled": false
                    }
                ]
            },
            {
                "id": "2",
                "name": "Makkah Hotel to Jeddah Airport",
                "available_cars": [
                    {
                        "car_name": "STAR X",
                        "image_name": require('../../assets/photos/STAR_X.png'),
                        "no_passegers": 7,
                        "no_bags": 8,
                        "price": 300,
                        "currency_symbol": "SAR",
                        "enabled": false
                    },
                    {
                        "car_name": "STARIA",
                        "image_name": require('../../assets/photos/STARIA.png'),
                        "no_passegers": 7,
                        "no_bags": 8,
                        "price": 300,
                        "currency_symbol": "SAR",
                        "enabled": false
                    },
                    {
                        "car_name": "CAMRY",
                        "image_name": require('../../assets/photos/CAMRY.png'),
                        "no_passegers": 4,
                        "no_bags": 3,
                        "price": 270,
                        "currency_symbol": "SAR",
                        "enabled": false
                    },
                    {
                        "car_name": "HIACE",
                        "image_name": require('../../assets/photos/HIACE.png'),
                        "no_passegers": 12,
                        "no_bags": 15,
                        "price": 400,
                        "currency_symbol": "SAR",
                        "enabled": false
                    },
                    {
                        "car_name": "COASTER",
                        "image_name": require('../../assets/photos/COASTER.png'),
                        "no_passegers": 23,
                        "no_bags": 23,
                        "price": 700,
                        "currency_symbol": "SAR",
                        "enabled": false
                    }
                ]
            },
            {
                "id": "3",
                "name": "Makkah Hotel to Makkah Ziyarah",
                "available_cars": [
                    {
                        "car_name": "STAR X",
                        "image_name": require('../../assets/photos/STAR_X.png'),
                        "no_passegers": 7,
                        "no_bags": 8,
                        "price": 300,
                        "currency_symbol": "SAR",
                        "enabled": false
                    },
                    {
                        "car_name": "STARIA",
                        "image_name": require('../../assets/photos/STARIA.png'),
                        "no_passegers": 7,
                        "no_bags": 8,
                        "price": 270,
                        "currency_symbol": "SAR",
                        "enabled": false
                    },
                    {
                        "car_name": "CAMRY",
                        "image_name": require('../../assets/photos/CAMRY.png'),
                        "no_passegers": 4,
                        "no_bags": 3,
                        "price": 250,
                        "currency_symbol": "SAR",
                        "enabled": false
                    },
                    {
                        "car_name": "HIACE",
                        "image_name": require('../../assets/photos/HIACE.png'),
                        "no_passegers": 12,
                        "no_bags": 15,
                        "price": 300,
                        "currency_symbol": "SAR",
                        "enabled": false
                    },
                    {
                        "car_name": "COASTER",
                        "image_name": require('../../assets/photos/COASTER.png'),
                        "no_passegers": 23,
                        "no_bags": 23,
                        "price": 500,
                        "currency_symbol": "SAR",
                        "enabled": false
                    }
                ]
            },
            {
                "id": "4",
                "name": "Madinah Hotel to Madinah Hotel",
                "available_cars": [
                    {
                        "car_name": "STAR X",
                        "image_name": require('../../assets/photos/STAR_X.png'),
                        "no_passegers": 7,
                        "no_bags": 8,
                        "price": 400,
                        "currency_symbol": "SAR",
                        "enabled": false
                    },
                    {
                        "car_name": "STARIA",
                        "image_name": require('../../assets/photos/STARIA.png'),
                        "no_passegers": 7,
                        "no_bags": 8,
                        "price": 400,
                        "currency_symbol": "SAR",
                        "enabled": false
                    },
                    {
                        "car_name": "CAMRY",
                        "image_name": require('../../assets/photos/CAMRY.png'),
                        "no_passegers": 4,
                        "no_bags": 3,
                        "price": 350,
                        "currency_symbol": "SAR",
                        "enabled": false
                    },
                    {
                        "car_name": "HIACE",
                        "image_name": require('../../assets/photos/HIACE.png'),
                        "no_passegers": 12,
                        "no_bags": 15,
                        "price": 450,
                        "currency_symbol": "SAR",
                        "enabled": false
                    },
                    {
                        "car_name": "COASTER",
                        "image_name": require('../../assets/photos/COASTER.png'),
                        "no_passegers": 23,
                        "no_bags": 23,
                        "price": 1000,
                        "currency_symbol": "SAR",
                        "enabled": false
                    }
                ]
            },
            {
                "id": "5",
                "name": "Makkah Hotel to Madinah Ziyarah",
                "available_cars": [
                    {
                        "car_name": "STAR X",
                        "image_name": require('../../assets/photos/STAR_X.png'),
                        "no_passegers": 7,
                        "no_bags": 8,
                        "price": 250,
                        "currency_symbol": "SAR",
                        "enabled": false
                    },
                    {
                        "car_name": "STARIA",
                        "image_name": require('../../assets/photos/STARIA.png'),
                        "no_passegers": 7,
                        "no_bags": 8,
                        "price": 250,
                        "currency_symbol": "SAR",
                        "enabled": false
                    },
                    {
                        "car_name": "CAMRY",
                        "image_name": require('../../assets/photos/CAMRY.png'),
                        "no_passegers": 4,
                        "no_bags": 3,
                        "price": 250,
                        "currency_symbol": "SAR",
                        "enabled": false
                    },
                    {
                        "car_name": "HIACE",
                        "image_name": require('../../assets/photos/HIACE.png'),
                        "no_passegers": 12,
                        "no_bags": 15,
                        "price": 300,
                        "currency_symbol": "SAR",
                        "enabled": false
                    },
                    {
                        "car_name": "COASTER",
                        "image_name": require('../../assets/photos/COASTER.png'),
                        "no_passegers": 23,
                        "no_bags": 23,
                        "price": 400,
                        "currency_symbol": "SAR",
                        "enabled": false
                    }
                ]
            },
            {
                "id": "6",
                "name": "Makkah Hotel to Taif Ziyarah",
                "available_cars": [
                    {
                        "car_name": "STAR X",
                        "image_name": require('../../assets/photos/STAR_X.png'),
                        "no_passegers": 7,
                        "no_bags": 8,
                        "price": 400,
                        "currency_symbol": "SAR",
                        "enabled": false
                    },
                    {
                        "car_name": "STARIA",
                        "image_name": require('../../assets/photos/STARIA.png'),
                        "no_passegers": 7,
                        "no_bags": 8,
                        "price": 370,
                        "currency_symbol": "SAR",
                        "enabled": false
                    },
                    {
                        "car_name": "CAMRY",
                        "image_name": require('../../assets/photos/CAMRY.png'),
                        "no_passegers": 4,
                        "no_bags": 3,
                        "price": 350,
                        "currency_symbol": "SAR",
                        "enabled": false
                    },
                    {
                        "car_name": "HIACE",
                        "image_name": require('../../assets/photos/HIACE.png'),
                        "no_passegers": 12,
                        "no_bags": 15,
                        "price": 450,
                        "currency_symbol": "SAR",
                        "enabled": false
                    },
                    {
                        "car_name": "COASTER",
                        "image_name": require('../../assets/photos/COASTER.png'),
                        "no_passegers": 23,
                        "no_bags": 23,
                        "price": 800,
                        "currency_symbol": "SAR",
                        "enabled": false
                    }
                ]
            },
            {
                "id": "7",
                "name": "Madinah Hotel to Baddar Ziyarah",
                "available_cars": [
                    {
                        "car_name": "STAR X",
                        "image_name": require('../../assets/photos/STAR_X.png'),
                        "no_passegers": 7,
                        "no_bags": 8,
                        "price": 450,
                        "currency_symbol": "SAR",
                        "enabled": false
                    },
                    {
                        "car_name": "STARIA",
                        "image_name": require('../../assets/photos/STARIA.png'),
                        "no_passegers": 7,
                        "no_bags": 8,
                        "price": 450,
                        "currency_symbol": "SAR",
                        "enabled": false
                    },
                    {
                        "car_name": "CAMRY",
                        "image_name": require('../../assets/photos/CAMRY.png'),
                        "no_passegers": 4,
                        "no_bags": 3,
                        "price": 350,
                        "currency_symbol": "SAR",
                        "enabled": false
                    },
                    {
                        "car_name": "HIACE",
                        "image_name": require('../../assets/photos/HIACE.png'),
                        "no_passegers": 12,
                        "no_bags": 15,
                        "price": 500,
                        "currency_symbol": "SAR",
                        "enabled": false
                    },
                    {
                        "car_name": "COASTER",
                        "image_name": require('../../assets/photos/COASTER.png'),
                        "no_passegers": 23,
                        "no_bags": 23,
                        "price": 650,
                        "currency_symbol": "SAR",
                        "enabled": false
                    }
                ]
            },
            {
                "id": "8",
                "name": "Jeddah Airport to Madinah Hotel",
                "available_cars": [
                    {
                        "car_name": "STAR X",
                        "image_name": require('../../assets/photos/STAR_X.png'),
                        "no_passegers": 7,
                        "no_bags": 8,
                        "price": 400,
                        "currency_symbol": "SAR",
                        "enabled": false
                    },
                    {
                        "car_name": "STARIA",
                        "image_name": require('../../assets/photos/STARIA.png'),
                        "no_passegers": 7,
                        "no_bags": 8,
                        "price": 400,
                        "currency_symbol": "SAR",
                        "enabled": false
                    },
                    {
                        "car_name": "CAMRY",
                        "image_name": require('../../assets/photos/CAMRY.png'),
                        "no_passegers": 4,
                        "no_bags": 3,
                        "price": 350,
                        "currency_symbol": "SAR",
                        "enabled": false
                    },
                    {
                        "car_name": "HIACE",
                        "image_name": require('../../assets/photos/HIACE.png'),
                        "no_passegers": 12,
                        "no_bags": 15,
                        "price": 450,
                        "currency_symbol": "SAR",
                        "enabled": false
                    },
                    {
                        "car_name": "COASTER",
                        "image_name": require('../../assets/photos/COASTER.png'),
                        "no_passegers": 23,
                        "no_bags": 23,
                        "price": 1000,
                        "currency_symbol": "SAR",
                        "enabled": false
                    }
                ]
            },
            {
                "id": "9",
                "name": "Madinah Airport to Madinah Hotel",
                "available_cars": [
                    {
                        "car_name": "STAR X",
                        "image_name": require('../../assets/photos/STAR_X.png'),
                        "no_passegers": 7,
                        "no_bags": 8,
                        "price": 280,
                        "currency_symbol": "SAR",
                        "enabled": false
                    },
                    {
                        "car_name": "STARIA",
                        "image_name": require('../../assets/photos/STARIA.png'),
                        "no_passegers": 7,
                        "no_bags": 8,
                        "price": 250,
                        "currency_symbol": "SAR",
                        "enabled": false
                    },
                    {
                        "car_name": "CAMRY",
                        "image_name": require('../../assets/photos/CAMRY.png'),
                        "no_passegers": 4,
                        "no_bags": 3,
                        "price": 250,
                        "currency_symbol": "SAR",
                        "enabled": false
                    },
                    {
                        "car_name": "HIACE",
                        "image_name": require('../../assets/photos/HIACE.png'),
                        "no_passegers": 12,
                        "no_bags": 15,
                        "price": 300,
                        "currency_symbol": "SAR",
                        "enabled": false
                    },
                    {
                        "car_name": "COASTER",
                        "image_name": require('../../assets/photos/COASTER.png'),
                        "no_passegers": 23,
                        "no_bags": 23,
                        "price": 400,
                        "currency_symbol": "SAR",
                        "enabled": false
                    }
                ]
            },
            {
                "id": "10",
                "name": "Madinah Hotel to Jeddah Airport",
                "available_cars": [
                    {
                        "car_name": "STAR X",
                        "image_name": require('../../assets/photos/STAR_X.png'),
                        "no_passegers": 7,
                        "no_bags": 8,
                        "price": 400,
                        "currency_symbol": "SAR",
                        "enabled": false
                    },
                    {
                        "car_name": "STARIA",
                        "image_name": require('../../assets/photos/STARIA.png'),
                        "no_passegers": 7,
                        "no_bags": 8,
                        "price": 400,
                        "currency_symbol": "SAR",
                        "enabled": false
                    },
                    {
                        "car_name": "CAMRY",
                        "image_name": require('../../assets/photos/CAMRY.png'),
                        "no_passegers": 4,
                        "no_bags": 3,
                        "price": 350,
                        "currency_symbol": "SAR",
                        "enabled": false
                    },
                    {
                        "car_name": "HIACE",
                        "image_name": require('../../assets/photos/HIACE.png'),
                        "no_passegers": 12,
                        "no_bags": 15,
                        "price": 450,
                        "currency_symbol": "SAR",
                        "enabled": false
                    },
                    {
                        "car_name": "COASTER",
                        "image_name": require('../../assets/photos/COASTER.png'),
                        "no_passegers": 23,
                        "no_bags": 23,
                        "price": 1000,
                        "currency_symbol": "SAR",
                        "enabled": false
                    }
                ]
            },
            {
                "id": "11",
                "name": "Madinah Hotel to Makkah Hotel",
                "available_cars": [
                    {
                        "car_name": "STAR X",
                        "image_name": require('../../assets/photos/STAR_X.png'),
                        "no_passegers": 7,
                        "no_bags": 8,
                        "price": 400,
                        "currency_symbol": "SAR",
                        "enabled": false
                    },
                    {
                        "car_name": "STARIA",
                        "image_name": require('../../assets/photos/STARIA.png'),
                        "no_passegers": 7,
                        "no_bags": 8,
                        "price": 400,
                        "currency_symbol": "SAR",
                        "enabled": false
                    },
                    {
                        "car_name": "CAMRY",
                        "image_name": require('../../assets/photos/CAMRY.png'),
                        "no_passegers": 4,
                        "no_bags": 3,
                        "price": 350,
                        "currency_symbol": "SAR",
                        "enabled": false
                    },
                    {
                        "car_name": "HIACE",
                        "image_name": require('../../assets/photos/HIACE.png'),
                        "no_passegers": 12,
                        "no_bags": 15,
                        "price": 450,
                        "currency_symbol": "SAR",
                        "enabled": false
                    },
                    {
                        "car_name": "COASTER",
                        "image_name": require('../../assets/photos/COASTER.png'),
                        "no_passegers": 23,
                        "no_bags": 23,
                        "price": 1000,
                        "currency_symbol": "SAR",
                        "enabled": false
                    }
                ]
            },
            {
                "id": "12",
                "name": "Madinah Hotel to Madinah Airport",
                "available_cars": [
                    {
                        "car_name": "STAR X",
                        "image_name": require('../../assets/photos/STAR_X.png'),
                        "no_passegers": 7,
                        "no_bags": 8,
                        "price": 250,
                        "currency_symbol": "SAR",
                        "enabled": false
                    },
                    {
                        "car_name": "STARIA",
                        "image_name": require('../../assets/photos/STARIA.png'),
                        "no_passegers": 7,
                        "no_bags": 8,
                        "price": 240,
                        "currency_symbol": "SAR",
                        "enabled": false
                    },
                    {
                        "car_name": "CAMRY",
                        "image_name": require('../../assets/photos/CAMRY.png'),
                        "no_passegers": 4,
                        "no_bags": 3,
                        "price": 200,
                        "currency_symbol": "SAR",
                        "enabled": false
                    },
                    {
                        "car_name": "HIACE",
                        "image_name": require('../../assets/photos/HIACE.png'),
                        "no_passegers": 12,
                        "no_bags": 15,
                        "price": 250,
                        "currency_symbol": "SAR",
                        "enabled": false
                    },
                    {
                        "car_name": "COASTER",
                        "image_name": require('../../assets/photos/COASTER.png'),
                        "no_passegers": 23,
                        "no_bags": 23,
                        "price": 400,
                        "currency_symbol": "SAR",
                        "enabled": false
                    }
                ]
            },
            {
                "id": "13",
                "name": "Makkah Hotel to Makkah Train Station",
                "available_cars": [
                    {
                        "car_name": "STAR X",
                        "image_name": require('../../assets/photos/STAR_X.png'),
                        "no_passegers": 7,
                        "no_bags": 8,
                        "price": 230,
                        "currency_symbol": "SAR",
                        "enabled": false
                    },
                    {
                        "car_name": "STARIA",
                        "image_name": require('../../assets/photos/STARIA.png'),
                        "no_passegers": 7,
                        "no_bags": 8,
                        "price": 200,
                        "currency_symbol": "SAR",
                        "enabled": false
                    },
                    {
                        "car_name": "CAMRY",
                        "image_name": require('../../assets/photos/CAMRY.png'),
                        "no_passegers": 4,
                        "no_bags": 3,
                        "price": 150,
                        "currency_symbol": "SAR",
                        "enabled": false
                    },
                    {
                        "car_name": "HIACE",
                        "image_name": require('../../assets/photos/HIACE.png'),
                        "no_passegers": 12,
                        "no_bags": 15,
                        "price": 200,
                        "currency_symbol": "SAR",
                        "enabled": false
                    },
                    {
                        "car_name": "COASTER",
                        "image_name": require('../../assets/photos/COASTER.png'),
                        "no_passegers": 23,
                        "no_bags": 23,
                        "price": 350,
                        "currency_symbol": "SAR",
                        "enabled": false
                    }
                ]
            },
            {
                "id": "14",
                "name": "Makkah Train Station to Makkah Hotel",
                "available_cars": [
                    {
                        "car_name": "STAR X",
                        "image_name": require('../../assets/photos/STAR_X.png'),
                        "no_passegers": 7,
                        "no_bags": 8,
                        "price": 230,
                        "currency_symbol": "SAR",
                        "enabled": false
                    },
                    {
                        "car_name": "STARIA",
                        "image_name": require('../../assets/photos/STARIA.png'),
                        "no_passegers": 7,
                        "no_bags": 8,
                        "price": 200,
                        "currency_symbol": "SAR",
                        "enabled": false
                    },
                    {
                        "car_name": "CAMRY",
                        "image_name": require('../../assets/photos/CAMRY.png'),
                        "no_passegers": 4,
                        "no_bags": 3,
                        "price": 150,
                        "currency_symbol": "SAR",
                        "enabled": false
                    },
                    {
                        "car_name": "HIACE",
                        "image_name": require('../../assets/photos/HIACE.png'),
                        "no_passegers": 12,
                        "no_bags": 15,
                        "price": 200,
                        "currency_symbol": "SAR",
                        "enabled": false
                    },
                    {
                        "car_name": "COASTER",
                        "image_name": require('../../assets/photos/COASTER.png'),
                        "no_passegers": 23,
                        "no_bags": 23,
                        "price": 350,
                        "currency_symbol": "SAR",
                        "enabled": false
                    }
                ]
            },
            {
                "id": "15",
                "name": "Madinah Train Station to Madinah Hotel",
                "available_cars": [
                    {
                        "car_name": "STAR X",
                        "image_name": require('../../assets/photos/STAR_X.png'),
                        "no_passegers": 7,
                        "no_bags": 8,
                        "price": 200,
                        "currency_symbol": "SAR",
                        "enabled": false
                    },
                    {
                        "car_name": "STARIA",
                        "image_name": require('../../assets/photos/STARIA.png'),
                        "no_passegers": 7,
                        "no_bags": 8,
                        "price": 180,
                        "currency_symbol": "SAR",
                        "enabled": false
                    },
                    {
                        "car_name": "CAMRY",
                        "image_name": require('../../assets/photos/CAMRY.png'),
                        "no_passegers": 4,
                        "no_bags": 3,
                        "price": 150,
                        "currency_symbol": "SAR",
                        "enabled": false
                    },
                    {
                        "car_name": "HIACE",
                        "image_name": require('../../assets/photos/HIACE.png'),
                        "no_passegers": 12,
                        "no_bags": 15,
                        "price": 200,
                        "currency_symbol": "SAR",
                        "enabled": false
                    },
                    {
                        "car_name": "COASTER",
                        "image_name": require('../../assets/photos/COASTER.png'),
                        "no_passegers": 23,
                        "no_bags": 23,
                        "price": 350,
                        "currency_symbol": "SAR",
                        "enabled": false
                    }
                ]
            },
            {
                "id": "16",
                "name": "Madinah Hotel to Madinah Train Station",
                "available_cars": [
                    {
                        "car_name": "STAR X",
                        "image_name": require('../../assets/photos/STAR_X.png'),
                        "no_passegers": 7,
                        "no_bags": 8,
                        "price": 200,
                        "currency_symbol": "SAR",
                        "enabled": false
                    },
                    {
                        "car_name": "STARIA",
                        "image_name": require('../../assets/photos/STARIA.png'),
                        "no_passegers": 7,
                        "no_bags": 8,
                        "price": 180,
                        "currency_symbol": "SAR",
                        "enabled": false
                    },
                    {
                        "car_name": "CAMRY",
                        "image_name": require('../../assets/photos/CAMRY.png'),
                        "no_passegers": 4,
                        "no_bags": 3,
                        "price": 150,
                        "currency_symbol": "SAR",
                        "enabled": false
                    },
                    {
                        "car_name": "HIACE",
                        "image_name": require('../../assets/photos/HIACE.png'),
                        "no_passegers": 12,
                        "no_bags": 15,
                        "price": 200,
                        "currency_symbol": "SAR",
                        "enabled": false
                    },
                    {
                        "car_name": "COASTER",
                        "image_name": require('../../assets/photos/COASTER.png'),
                        "no_passegers": 23,
                        "no_bags": 23,
                        "price": 350,
                        "currency_symbol": "SAR",
                        "enabled": false
                    }
                ]
            },
            {
                "id": "17",
                "name": "Madinah to Gassim",
                "available_cars": [
                    {
                        "car_name": "STAR X",
                        "image_name": require('../../assets/photos/STAR_X.png'),
                        "no_passegers": 7,
                        "no_bags": 8,
                        "price": 900,
                        "currency_symbol": "SAR",
                        "enabled": false
                    },
                    {
                        "car_name": "STARIA",
                        "image_name": require('../../assets/photos/STARIA.png'),
                        "no_passegers": 7,
                        "no_bags": 8,
                        "price": 900,
                        "currency_symbol": "SAR",
                        "enabled": false
                    },
                    {
                        "car_name": "CAMRY",
                        "image_name": require('../../assets/photos/CAMRY.png'),
                        "no_passegers": 4,
                        "no_bags": 3,
                        "price": 600,
                        "currency_symbol": "SAR",
                        "enabled": false
                    },
                    {
                        "car_name": "HIACE",
                        "image_name": require('../../assets/photos/HIACE.png'),
                        "no_passegers": 12,
                        "no_bags": 15,
                        "price": 1000,
                        "currency_symbol": "SAR",
                        "enabled": false
                    },
                    {
                        "car_name": "COASTER",
                        "image_name": require('../../assets/photos/COASTER.png'),
                        "no_passegers": 23,
                        "no_bags": 23,
                        "price": 1200,
                        "currency_symbol": "SAR",
                        "enabled": false
                    }
                ]
            },
            {
                "id": "18",
                "name": "Gassim to Madinah",
                "available_cars": [
                    {
                        "car_name": "STAR X",
                        "image_name": require('../../assets/photos/STAR_X.png'),
                        "no_passegers": 7,
                        "no_bags": 8,
                        "price": 900,
                        "currency_symbol": "SAR",
                        "enabled": false
                    },
                    {
                        "car_name": "STARIA",
                        "image_name": require('../../assets/photos/STARIA.png'),
                        "no_passegers": 7,
                        "no_bags": 8,
                        "price": 900,
                        "currency_symbol": "SAR",
                        "enabled": false
                    },
                    {
                        "car_name": "CAMRY",
                        "image_name": require('../../assets/photos/CAMRY.png'),
                        "no_passegers": 4,
                        "no_bags": 3,
                        "price": 600,
                        "currency_symbol": "SAR",
                        "enabled": false
                    },
                    {
                        "car_name": "HIACE",
                        "image_name": require('../../assets/photos/HIACE.png'),
                        "no_passegers": 12,
                        "no_bags": 15,
                        "price": 1000,
                        "currency_symbol": "SAR",
                        "enabled": false
                    },
                    {
                        "car_name": "COASTER",
                        "image_name": require('../../assets/photos/COASTER.png'),
                        "no_passegers": 23,
                        "no_bags": 23,
                        "price": 1200,
                        "currency_symbol": "SAR",
                        "enabled": false
                    }
                ]
            }
        ],
        "ar": [
            { id: '0', name: "اختر الطريق", available_cars: [] },
            {
                "id": "1",
                "name": "مطار جدة إلى فندق مكة",
                "available_cars": [
                    {
                        "car_name": "ستار إكس",
                        "image_name": require('../../assets/photos/STAR_X.png'),
                        "no_passegers": 7,
                        "no_bags": 8,
                        "price": 300,
                        "currency_symbol": "SAR",
                        "enabled": false
                    },
                    {
                        "car_name": "ستاريا",
                        "image_name": require('../../assets/photos/STARIA.png'),
                        "no_passegers": 7,
                        "no_bags": 8,
                        "price": 300,
                        "currency_symbol": "SAR",
                        "enabled": false
                    },
                    {
                        "car_name": "كامري",
                        "image_name": require('../../assets/photos/CAMRY.png'),
                        "no_passegers": 4,
                        "no_bags": 3,
                        "price": 270,
                        "currency_symbol": "SAR",
                        "enabled": false
                    },
                    {
                        "car_name": "هاييس",
                        "image_name": require('../../assets/photos/HIACE.png'),
                        "no_passegers": 12,
                        "no_bags": 15,
                        "price": 400,
                        "currency_symbol": "SAR",
                        "enabled": false
                    },
                    {
                        "car_name": "كوستر",
                        "image_name": require('../../assets/photos/COASTER.png'),
                        "no_passegers": 23,
                        "no_bags": 23,
                        "price": 700,
                        "currency_symbol": "SAR",
                        "enabled": false
                    }
                ]
            },
            {
                "id": "2",
                "name": "فندق مكة إلى مطار جدة",
                "available_cars": [
                    {
                        "car_name": "ستار إكس",
                        "image_name": require('../../assets/photos/STAR_X.png'),
                        "no_passegers": 7,
                        "no_bags": 8,
                        "price": 300,
                        "currency_symbol": "SAR",
                        "enabled": false
                    },
                    {
                        "car_name": "ستاريا",
                        "image_name": require('../../assets/photos/STARIA.png'),
                        "no_passegers": 7,
                        "no_bags": 8,
                        "price": 300,
                        "currency_symbol": "SAR",
                        "enabled": false
                    },
                    {
                        "car_name": "كامري",
                        "image_name": require('../../assets/photos/CAMRY.png'),
                        "no_passegers": 4,
                        "no_bags": 3,
                        "price": 270,
                        "currency_symbol": "SAR",
                        "enabled": false
                    },
                    {
                        "car_name": "هاييس",
                        "image_name": require('../../assets/photos/HIACE.png'),
                        "no_passegers": 12,
                        "no_bags": 15,
                        "price": 400,
                        "currency_symbol": "SAR",
                        "enabled": false
                    },
                    {
                        "car_name": "كوستر",
                        "image_name": require('../../assets/photos/COASTER.png'),
                        "no_passegers": 23,
                        "no_bags": 23,
                        "price": 700,
                        "currency_symbol": "SAR",
                        "enabled": false
                    }
                ]
            },
            {
                "id": "3",
                "name": "فندق مكة إلى مكة زيارة",
                "available_cars": [
                    {
                        "car_name": "ستار إكس",
                        "image_name": require('../../assets/photos/STAR_X.png'),
                        "no_passegers": 7,
                        "no_bags": 8,
                        "price": 300,
                        "currency_symbol": "SAR",
                        "enabled": false
                    },
                    {
                        "car_name": "ستاريا",
                        "image_name": require('../../assets/photos/STARIA.png'),
                        "no_passegers": 7,
                        "no_bags": 8,
                        "price": 270,
                        "currency_symbol": "SAR",
                        "enabled": false
                    },
                    {
                        "car_name": "كامري",
                        "image_name": require('../../assets/photos/CAMRY.png'),
                        "no_passegers": 4,
                        "no_bags": 3,
                        "price": 250,
                        "currency_symbol": "SAR",
                        "enabled": false
                    },
                    {
                        "car_name": "هاييس",
                        "image_name": require('../../assets/photos/HIACE.png'),
                        "no_passegers": 12,
                        "no_bags": 15,
                        "price": 300,
                        "currency_symbol": "SAR",
                        "enabled": false
                    },
                    {
                        "car_name": "كوستر",
                        "image_name": require('../../assets/photos/COASTER.png'),
                        "no_passegers": 23,
                        "no_bags": 23,
                        "price": 500,
                        "currency_symbol": "SAR",
                        "enabled": false
                    }
                ]
            },
            {
                "id": "4",
                "name": "فندق المدينة إلى فندق المدينة",
                "available_cars": [
                    {
                        "car_name": "ستار إكس",
                        "image_name": require('../../assets/photos/STAR_X.png'),
                        "no_passegers": 7,
                        "no_bags": 8,
                        "price": 400,
                        "currency_symbol": "SAR",
                        "enabled": false
                    },
                    {
                        "car_name": "ستاريا",
                        "image_name": require('../../assets/photos/STARIA.png'),
                        "no_passegers": 7,
                        "no_bags": 8,
                        "price": 400,
                        "currency_symbol": "SAR",
                        "enabled": false
                    },
                    {
                        "car_name": "كامري",
                        "image_name": require('../../assets/photos/CAMRY.png'),
                        "no_passegers": 4,
                        "no_bags": 3,
                        "price": 350,
                        "currency_symbol": "SAR",
                        "enabled": false
                    },
                    {
                        "car_name": "هاييس",
                        "image_name": require('../../assets/photos/HIACE.png'),
                        "no_passegers": 12,
                        "no_bags": 15,
                        "price": 450,
                        "currency_symbol": "SAR",
                        "enabled": false
                    },
                    {
                        "car_name": "كوستر",
                        "image_name": require('../../assets/photos/COASTER.png'),
                        "no_passegers": 23,
                        "no_bags": 23,
                        "price": 1000,
                        "currency_symbol": "SAR",
                        "enabled": false
                    }
                ]
            },
            {
                "id": "5",
                "name": "فندق مكة إلى مكة زيارة",
                "available_cars": [
                    {
                        "car_name": "ستار إكس",
                        "image_name": require('../../assets/photos/STAR_X.png'),
                        "no_passegers": 7,
                        "no_bags": 8,
                        "price": 250,
                        "currency_symbol": "SAR",
                        "enabled": false
                    },
                    {
                        "car_name": "ستاريا",
                        "image_name": require('../../assets/photos/STARIA.png'),
                        "no_passegers": 7,
                        "no_bags": 8,
                        "price": 250,
                        "currency_symbol": "SAR",
                        "enabled": false
                    },
                    {
                        "car_name": "كامري",
                        "image_name": require('../../assets/photos/CAMRY.png'),
                        "no_passegers": 4,
                        "no_bags": 3,
                        "price": 250,
                        "currency_symbol": "SAR",
                        "enabled": false
                    },
                    {
                        "car_name": "هاييس",
                        "image_name": require('../../assets/photos/HIACE.png'),
                        "no_passegers": 12,
                        "no_bags": 15,
                        "price": 300,
                        "currency_symbol": "SAR",
                        "enabled": false
                    },
                    {
                        "car_name": "كوستر",
                        "image_name": require('../../assets/photos/COASTER.png'),
                        "no_passegers": 23,
                        "no_bags": 23,
                        "price": 400,
                        "currency_symbol": "SAR",
                        "enabled": false
                    }
                ]
            },
            {
                "id": "6",
                "name": "فندق مكة إلى الطائف زيارة",
                "available_cars": [
                    {
                        "car_name": "ستار إكس",
                        "image_name": require('../../assets/photos/STAR_X.png'),
                        "no_passegers": 7,
                        "no_bags": 8,
                        "price": 400,
                        "currency_symbol": "SAR",
                        "enabled": false
                    },
                    {
                        "car_name": "ستاريا",
                        "image_name": require('../../assets/photos/STARIA.png'),
                        "no_passegers": 7,
                        "no_bags": 8,
                        "price": 370,
                        "currency_symbol": "SAR",
                        "enabled": false
                    },
                    {
                        "car_name": "كامري",
                        "image_name": require('../../assets/photos/CAMRY.png'),
                        "no_passegers": 4,
                        "no_bags": 3,
                        "price": 350,
                        "currency_symbol": "SAR",
                        "enabled": false
                    },
                    {
                        "car_name": "هاييس",
                        "image_name": require('../../assets/photos/HIACE.png'),
                        "no_passegers": 12,
                        "no_bags": 15,
                        "price": 450,
                        "currency_symbol": "SAR",
                        "enabled": false
                    },
                    {
                        "car_name": "كوستر",
                        "image_name": require('../../assets/photos/COASTER.png'),
                        "no_passegers": 23,
                        "no_bags": 23,
                        "price": 800,
                        "currency_symbol": "SAR",
                        "enabled": false
                    }
                ]
            },
            {
                "id": "7",
                "name": "فندق المدينة إلى بدر زيارة",
                "available_cars": [
                    {
                        "car_name": "ستار إكس",
                        "image_name": require('../../assets/photos/STAR_X.png'),
                        "no_passegers": 7,
                        "no_bags": 8,
                        "price": 450,
                        "currency_symbol": "SAR",
                        "enabled": false
                    },
                    {
                        "car_name": "ستاريا",
                        "image_name": require('../../assets/photos/STARIA.png'),
                        "no_passegers": 7,
                        "no_bags": 8,
                        "price": 450,
                        "currency_symbol": "SAR",
                        "enabled": false
                    },
                    {
                        "car_name": "كامري",
                        "image_name": require('../../assets/photos/CAMRY.png'),
                        "no_passegers": 4,
                        "no_bags": 3,
                        "price": 350,
                        "currency_symbol": "SAR",
                        "enabled": false
                    },
                    {
                        "car_name": "هاييس",
                        "image_name": require('../../assets/photos/HIACE.png'),
                        "no_passegers": 12,
                        "no_bags": 15,
                        "price": 500,
                        "currency_symbol": "SAR",
                        "enabled": false
                    },
                    {
                        "car_name": "كوستر",
                        "image_name": require('../../assets/photos/COASTER.png'),
                        "no_passegers": 23,
                        "no_bags": 23,
                        "price": 650,
                        "currency_symbol": "SAR",
                        "enabled": false
                    }
                ]
            },
            {
                "id": "8",
                "name": "مطار جدة إلى فندق المدينة",
                "available_cars": [
                    {
                        "car_name": "ستار إكس",
                        "image_name": require('../../assets/photos/STAR_X.png'),
                        "no_passegers": 7,
                        "no_bags": 8,
                        "price": 400,
                        "currency_symbol": "SAR",
                        "enabled": false
                    },
                    {
                        "car_name": "ستاريا",
                        "image_name": require('../../assets/photos/STARIA.png'),
                        "no_passegers": 7,
                        "no_bags": 8,
                        "price": 400,
                        "currency_symbol": "SAR",
                        "enabled": false
                    },
                    {
                        "car_name": "كامري",
                        "image_name": require('../../assets/photos/CAMRY.png'),
                        "no_passegers": 4,
                        "no_bags": 3,
                        "price": 350,
                        "currency_symbol": "SAR",
                        "enabled": false
                    },
                    {
                        "car_name": "هاييس",
                        "image_name": require('../../assets/photos/HIACE.png'),
                        "no_passegers": 12,
                        "no_bags": 15,
                        "price": 450,
                        "currency_symbol": "SAR",
                        "enabled": false
                    },
                    {
                        "car_name": "كوستر",
                        "image_name": require('../../assets/photos/COASTER.png'),
                        "no_passegers": 23,
                        "no_bags": 23,
                        "price": 1000,
                        "currency_symbol": "SAR",
                        "enabled": false
                    }
                ]
            },
            {
                "id": "9",
                "name": "مطار المدينة إلى فندق المدينة",
                "available_cars": [
                    {
                        "car_name": "ستار إكس",
                        "image_name": require('../../assets/photos/STAR_X.png'),
                        "no_passegers": 7,
                        "no_bags": 8,
                        "price": 280,
                        "currency_symbol": "SAR",
                        "enabled": false
                    },
                    {
                        "car_name": "ستاريا",
                        "image_name": require('../../assets/photos/STARIA.png'),
                        "no_passegers": 7,
                        "no_bags": 8,
                        "price": 250,
                        "currency_symbol": "SAR",
                        "enabled": false
                    },
                    {
                        "car_name": "كامري",
                        "image_name": require('../../assets/photos/CAMRY.png'),
                        "no_passegers": 4,
                        "no_bags": 3,
                        "price": 250,
                        "currency_symbol": "SAR",
                        "enabled": false
                    },
                    {
                        "car_name": "هاييس",
                        "image_name": require('../../assets/photos/HIACE.png'),
                        "no_passegers": 12,
                        "no_bags": 15,
                        "price": 300,
                        "currency_symbol": "SAR",
                        "enabled": false
                    },
                    {
                        "car_name": "كوستر",
                        "image_name": require('../../assets/photos/COASTER.png'),
                        "no_passegers": 23,
                        "no_bags": 23,
                        "price": 400,
                        "currency_symbol": "SAR",
                        "enabled": false
                    }
                ]
            },
            {
                "id": "10",
                "name": "فندق المدينة إلى مطار جدة",
                "available_cars": [
                    {
                        "car_name": "ستار إكس",
                        "image_name": require('../../assets/photos/STAR_X.png'),
                        "no_passegers": 7,
                        "no_bags": 8,
                        "price": 400,
                        "currency_symbol": "SAR",
                        "enabled": false
                    },
                    {
                        "car_name": "ستاريا",
                        "image_name": require('../../assets/photos/STARIA.png'),
                        "no_passegers": 7,
                        "no_bags": 8,
                        "price": 400,
                        "currency_symbol": "SAR",
                        "enabled": false
                    },
                    {
                        "car_name": "كامري",
                        "image_name": require('../../assets/photos/CAMRY.png'),
                        "no_passegers": 4,
                        "no_bags": 3,
                        "price": 350,
                        "currency_symbol": "SAR",
                        "enabled": false
                    },
                    {
                        "car_name": "هاييس",
                        "image_name": require('../../assets/photos/HIACE.png'),
                        "no_passegers": 12,
                        "no_bags": 15,
                        "price": 450,
                        "currency_symbol": "SAR",
                        "enabled": false
                    },
                    {
                        "car_name": "كوستر",
                        "image_name": require('../../assets/photos/COASTER.png'),
                        "no_passegers": 23,
                        "no_bags": 23,
                        "price": 1000,
                        "currency_symbol": "SAR",
                        "enabled": false
                    }
                ]
            },
            {
                "id": "11",
                "name": "فندق المدينة إلى فندق مكة",
                "available_cars": [
                    {
                        "car_name": "ستار إكس",
                        "image_name": require('../../assets/photos/STAR_X.png'),
                        "no_passegers": 7,
                        "no_bags": 8,
                        "price": 400,
                        "currency_symbol": "SAR",
                        "enabled": false
                    },
                    {
                        "car_name": "ستاريا",
                        "image_name": require('../../assets/photos/STARIA.png'),
                        "no_passegers": 7,
                        "no_bags": 8,
                        "price": 400,
                        "currency_symbol": "SAR",
                        "enabled": false
                    },
                    {
                        "car_name": "كامري",
                        "image_name": require('../../assets/photos/CAMRY.png'),
                        "no_passegers": 4,
                        "no_bags": 3,
                        "price": 350,
                        "currency_symbol": "SAR",
                        "enabled": false
                    },
                    {
                        "car_name": "هاييس",
                        "image_name": require('../../assets/photos/HIACE.png'),
                        "no_passegers": 12,
                        "no_bags": 15,
                        "price": 450,
                        "currency_symbol": "SAR",
                        "enabled": false
                    },
                    {
                        "car_name": "كوستر",
                        "image_name": require('../../assets/photos/COASTER.png'),
                        "no_passegers": 23,
                        "no_bags": 23,
                        "price": 1000,
                        "currency_symbol": "SAR",
                        "enabled": false
                    }
                ]
            },
            {
                "id": "12",
                "name": "فندق المدينة إلى مطار المدينة",
                "available_cars": [
                    {
                        "car_name": "ستار إكس",
                        "image_name": require('../../assets/photos/STAR_X.png'),
                        "no_passegers": 7,
                        "no_bags": 8,
                        "price": 250,
                        "currency_symbol": "SAR",
                        "enabled": false
                    },
                    {
                        "car_name": "ستاريا",
                        "image_name": require('../../assets/photos/STARIA.png'),
                        "no_passegers": 7,
                        "no_bags": 8,
                        "price": 240,
                        "currency_symbol": "SAR",
                        "enabled": false
                    },
                    {
                        "car_name": "كامري",
                        "image_name": require('../../assets/photos/CAMRY.png'),
                        "no_passegers": 4,
                        "no_bags": 3,
                        "price": 200,
                        "currency_symbol": "SAR",
                        "enabled": false
                    },
                    {
                        "car_name": "هاييس",
                        "image_name": require('../../assets/photos/HIACE.png'),
                        "no_passegers": 12,
                        "no_bags": 15,
                        "price": 250,
                        "currency_symbol": "SAR",
                        "enabled": false
                    },
                    {
                        "car_name": "كوستر",
                        "image_name": require('../../assets/photos/COASTER.png'),
                        "no_passegers": 23,
                        "no_bags": 23,
                        "price": 400,
                        "currency_symbol": "SAR",
                        "enabled": false
                    }
                ]
            },
            {
                "id": "13",
                "name": "فندق مكة إلى محطة قطار مكة",
                "available_cars": [
                    {
                        "car_name": "ستار إكس",
                        "image_name": require('../../assets/photos/STAR_X.png'),
                        "no_passegers": 7,
                        "no_bags": 8,
                        "price": 230,
                        "currency_symbol": "SAR",
                        "enabled": false
                    },
                    {
                        "car_name": "ستاريا",
                        "image_name": require('../../assets/photos/STARIA.png'),
                        "no_passegers": 7,
                        "no_bags": 8,
                        "price": 200,
                        "currency_symbol": "SAR",
                        "enabled": false
                    },
                    {
                        "car_name": "كامري",
                        "image_name": require('../../assets/photos/CAMRY.png'),
                        "no_passegers": 4,
                        "no_bags": 3,
                        "price": 150,
                        "currency_symbol": "SAR",
                        "enabled": false
                    },
                    {
                        "car_name": "هاييس",
                        "image_name": require('../../assets/photos/HIACE.png'),
                        "no_passegers": 12,
                        "no_bags": 15,
                        "price": 200,
                        "currency_symbol": "SAR",
                        "enabled": false
                    },
                    {
                        "car_name": "كوستر",
                        "image_name": require('../../assets/photos/COASTER.png'),
                        "no_passegers": 23,
                        "no_bags": 23,
                        "price": 350,
                        "currency_symbol": "SAR",
                        "enabled": false
                    }
                ]
            },
            {
                "id": "14",
                "name": "محطة قطار مكة إلى فندق مكة",
                "available_cars": [
                    {
                        "car_name": "ستار إكس",
                        "image_name": require('../../assets/photos/STAR_X.png'),
                        "no_passegers": 7,
                        "no_bags": 8,
                        "price": 230,
                        "currency_symbol": "SAR",
                        "enabled": false
                    },
                    {
                        "car_name": "ستاريا",
                        "image_name": require('../../assets/photos/STARIA.png'),
                        "no_passegers": 7,
                        "no_bags": 8,
                        "price": 200,
                        "currency_symbol": "SAR",
                        "enabled": false
                    },
                    {
                        "car_name": "كامري",
                        "image_name": require('../../assets/photos/CAMRY.png'),
                        "no_passegers": 4,
                        "no_bags": 3,
                        "price": 150,
                        "currency_symbol": "SAR",
                        "enabled": false
                    },
                    {
                        "car_name": "هاييس",
                        "image_name": require('../../assets/photos/HIACE.png'),
                        "no_passegers": 12,
                        "no_bags": 15,
                        "price": 200,
                        "currency_symbol": "SAR",
                        "enabled": false
                    },
                    {
                        "car_name": "كوستر",
                        "image_name": require('../../assets/photos/COASTER.png'),
                        "no_passegers": 23,
                        "no_bags": 23,
                        "price": 350,
                        "currency_symbol": "SAR",
                        "enabled": false
                    }
                ]
            },
            {
                "id": "15",
                "name": "محطة قطار المدينة إلى فندق المدينة",
                "available_cars": [
                    {
                        "car_name": "ستار إكس",
                        "image_name": require('../../assets/photos/STAR_X.png'),
                        "no_passegers": 7,
                        "no_bags": 8,
                        "price": 200,
                        "currency_symbol": "SAR",
                        "enabled": false
                    },
                    {
                        "car_name": "ستاريا",
                        "image_name": require('../../assets/photos/STARIA.png'),
                        "no_passegers": 7,
                        "no_bags": 8,
                        "price": 180,
                        "currency_symbol": "SAR",
                        "enabled": false
                    },
                    {
                        "car_name": "كامري",
                        "image_name": require('../../assets/photos/CAMRY.png'),
                        "no_passegers": 4,
                        "no_bags": 3,
                        "price": 150,
                        "currency_symbol": "SAR",
                        "enabled": false
                    },
                    {
                        "car_name": "هاييس",
                        "image_name": require('../../assets/photos/HIACE.png'),
                        "no_passegers": 12,
                        "no_bags": 15,
                        "price": 200,
                        "currency_symbol": "SAR",
                        "enabled": false
                    },
                    {
                        "car_name": "كوستر",
                        "image_name": require('../../assets/photos/COASTER.png'),
                        "no_passegers": 23,
                        "no_bags": 23,
                        "price": 350,
                        "currency_symbol": "SAR",
                        "enabled": false
                    }
                ]
            },
            {
                "id": "16",
                "name": "فندق المدينة إلى محطة قطار المدينة",
                "available_cars": [
                    {
                        "car_name": "ستار إكس",
                        "image_name": require('../../assets/photos/STAR_X.png'),
                        "no_passegers": 7,
                        "no_bags": 8,
                        "price": 200,
                        "currency_symbol": "SAR",
                        "enabled": false
                    },
                    {
                        "car_name": "ستاريا",
                        "image_name": require('../../assets/photos/STARIA.png'),
                        "no_passegers": 7,
                        "no_bags": 8,
                        "price": 180,
                        "currency_symbol": "SAR",
                        "enabled": false
                    },
                    {
                        "car_name": "كامري",
                        "image_name": require('../../assets/photos/CAMRY.png'),
                        "no_passegers": 4,
                        "no_bags": 3,
                        "price": 150,
                        "currency_symbol": "SAR",
                        "enabled": false
                    },
                    {
                        "car_name": "هاييس",
                        "image_name": require('../../assets/photos/HIACE.png'),
                        "no_passegers": 12,
                        "no_bags": 15,
                        "price": 200,
                        "currency_symbol": "SAR",
                        "enabled": false
                    },
                    {
                        "car_name": "كوستر",
                        "image_name": require('../../assets/photos/COASTER.png'),
                        "no_passegers": 23,
                        "no_bags": 23,
                        "price": 350,
                        "currency_symbol": "SAR",
                        "enabled": false
                    }
                ]
            },
            {
                "id": "17",
                "name": "المدينة إلى القصيم",
                "available_cars": [
                    {
                        "car_name": "ستار إكس",
                        "image_name": require('../../assets/photos/STAR_X.png'),
                        "no_passegers": 7,
                        "no_bags": 8,
                        "price": 900,
                        "currency_symbol": "SAR",
                        "enabled": false
                    },
                    {
                        "car_name": "ستاريا",
                        "image_name": require('../../assets/photos/STARIA.png'),
                        "no_passegers": 7,
                        "no_bags": 8,
                        "price": 900,
                        "currency_symbol": "SAR",
                        "enabled": false
                    },
                    {
                        "car_name": "كامري",
                        "image_name": require('../../assets/photos/CAMRY.png'),
                        "no_passegers": 4,
                        "no_bags": 3,
                        "price": 600,
                        "currency_symbol": "SAR",
                        "enabled": false
                    },
                    {
                        "car_name": "هاييس",
                        "image_name": require('../../assets/photos/HIACE.png'),
                        "no_passegers": 12,
                        "no_bags": 15,
                        "price": 1000,
                        "currency_symbol": "SAR",
                        "enabled": false
                    },
                    {
                        "car_name": "كوستر",
                        "image_name": require('../../assets/photos/COASTER.png'),
                        "no_passegers": 23,
                        "no_bags": 23,
                        "price": 1200,
                        "currency_symbol": "SAR",
                        "enabled": false
                    }
                ]
            },
            {
                "id": "18",
                "name": "القصيم إلى المدينة",
                "available_cars": [
                    {
                        "car_name": "ستار إكس",
                        "image_name": require('../../assets/photos/STAR_X.png'),
                        "no_passegers": 7,
                        "no_bags": 8,
                        "price": 900,
                        "currency_symbol": "SAR",
                        "enabled": false
                    },
                    {
                        "car_name": "ستاريا",
                        "image_name": require('../../assets/photos/STARIA.png'),
                        "no_passegers": 7,
                        "no_bags": 8,
                        "price": 900,
                        "currency_symbol": "SAR",
                        "enabled": false
                    },
                    {
                        "car_name": "كامري",
                        "image_name": require('../../assets/photos/CAMRY.png'),
                        "no_passegers": 4,
                        "no_bags": 3,
                        "price": 600,
                        "currency_symbol": "SAR",
                        "enabled": false
                    },
                    {
                        "car_name": "هاييس",
                        "image_name": require('../../assets/photos/HIACE.png'),
                        "no_passegers": 12,
                        "no_bags": 15,
                        "price": 1000,
                        "currency_symbol": "SAR",
                        "enabled": false
                    },
                    {
                        "car_name": "كوستر",
                        "image_name": require('../../assets/photos/COASTER.png'),
                        "no_passegers": 23,
                        "no_bags": 23,
                        "price": 1200,
                        "currency_symbol": "SAR",
                        "enabled": false
                    }
                ]
            }
        ]        
    }

    const handleRouteClick = (value) => {
        if (value > 0) navigation.navigate('Route', { value, route_data: routeData, language, theme });
    };

    const handleWhatsapp = () => {
        const phone_number = "923038722354";
        const url = `whatsapp://send?phone=${phone_number}&text=${encodeURIComponent(`Hello,\nI'm looking for Taxi!`)}`;

        Linking.openURL(url)
            .then((supported) => {
                if (supported) {
                    return Linking.openURL(url);
                } else {
                    alert('WhatsApp is not installed on this device.');
                }
            })
            .catch((err) => {
                alert("Can't open, Please install Whatsapp first.");
            });
    };

    return (
        <ImageBackground
            source={theme == 'light' ? require('../../assets/photos/Group5.png') : require('../../assets/photos/Group6.png')}
            style={theme == 'light' ? styles.bgImg : styles.bgImgDark}
            imageStyle={{ opacity: 0.1 }}
        >
            <LottieView
                source={require('../../assets/photos/car-animation.json')}
                autoPlay
                loop
                style={styles.taxiVector} />

            <View style={styles.dropDownContainer}>
                <Picker
                    selectedValue={routeData.en[0].id}
                    style={{
                        backgroundColor: theme == 'light' ? Colors.primary : '#d3d3d3',
                        color: theme == 'light' ? Colors.lightTextColor : Colors.darkTextColor,
                        fontSize: 18
                    }}
                    onValueChange={(itemValue) => handleRouteClick(itemValue)}
                    dropdownIconColor={theme == 'light' ? Colors.lightTextColor : Colors.darkTextColor}
                >
                    {routeData[language]?.map(item => (
                        <Picker.Item
                            label={item.name}
                            value={item.id}
                            key={`item ${item.id}`}
                        />
                    ))}
                </Picker>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    bgImg: {
        flex: 1,
        backgroundColor: '#fff'
    },
    bgImgDark: {
        flex: 1,
        backgroundColor: '#2a2a2a'
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
    },
});

export default LandingPage;
