import React, { useState, useEffect } from 'react';
import {
    View,
    StyleSheet,
    ImageBackground
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import CarSelector from '../Components/CarSelector';

const RoutePage = ({ route, navigation }) => {
    const { value, route_data, language } = route.params; 
    const [selectedRoute, setSelectedRoute] = useState(value);

    useEffect(() => {
        setSelectedRoute(value);
    }, [value]);

    const handleRouteClick = (value) => {
        setSelectedRoute(value);
    };

    const handleDetailClick = (selected_car) => {
        navigation.navigate('CarDetail', { path_detail: route_data[language][selectedRoute], selected_car, language });
    };

    return (
        <ImageBackground
            source={require('../../assets/photos/Group5.png')}
            style={styles.bgImg}
            imageStyle={{ opacity: 0.1 }}
        >
            {/* Dropdown for routes */}
            <View style={styles.dropDownContainer}>
                <Picker
                    selectedValue={selectedRoute}
                    style={{
                        backgroundColor: '#d3d3d3',
                        color: '#151515',
                        fontSize: 18
                    }}
                    onValueChange={(itemValue) => handleRouteClick(itemValue)}
                    dropdownIconColor="#151515"
                >
                    {route_data[language].map(item => (
                        item.id >= 0 && (
                            <Picker.Item
                                label={item.name} // Use name directly from route data
                                value={item.id}
                                key={`item ${item.id}`}
                                style={{ fontFamily: 'Outfit-Medium' }}
                            />
                        )
                    ))}
                </Picker>
            </View>

            {/* Show available cars */}
            {
                (route_data[language][selectedRoute].available_cars.length > 0) &&
                route_data[language][selectedRoute].available_cars.map((car_detail, index) => (
                    <CarSelector car_detail={car_detail} key={index} clickHandle={handleDetailClick}  language={language}/>
                ))
            }
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    safeViewHolder: {
        flex: 1,
    },
    bgImg: {
        flex: 1,
        backgroundColor: '#fff'
    },
    dropDownContainer: {
        width: '90%',
        alignSelf: 'center',
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: '#d3d3d3',
        marginTop: 10,
        marginBottom: 5,
        borderWidth: 1,
        borderColor: "#a7a7a7",
        elevation: 10
    }
});

export default RoutePage;
