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
import CarSelector from '../Components/CarSelector';

const RoutePage = ({route, navigation}) => {
    const { value, route_data } = route.params;
    const [selectedRoute, setSelectedRoute] = useState(value);

    const handleRouteClick = (value) => {
        setSelectedRoute(value);
    };

    const handleDetailClick = (selected_car) => {
        navigation.navigate('CarDetail', { path_detail: route_data[value], selected_car });
    };

    return (
        <ImageBackground
        source={require('../../assets/photos/Group5.png')}
        style={styles.bgImg}
        imageStyle={{ opacity: 0.1 }}
      >
            {/* 2. button for route */}
            <View style={styles.dropDownContainer}>
                <Picker
                    selectedValue={selectedRoute}
                    style={{
                        backgroundColor: '#d3d3d3',
                        color: '#636363',
                        fontSize: 18
                    }}
                    onValueChange={(itemValue) => handleRouteClick(itemValue)}
                    dropdownIconColor="#636363"
                >
                    {route_data.map(item => item.id >= 0 && <Picker.Item label={item.name} value={item.id} key={`item ${item.id}`} style={{fontFamily:'Outfit-Medium'}}/>)}
                </Picker>
            </View>

            {/* 3. show available cars */}
            { 
              (route_data[selectedRoute].available_cars.length > 0) &&
              route_data[selectedRoute].available_cars.map((car_index, index)=><CarSelector car_detail={car_index} key={index} clickHandle={handleDetailClick}/> )
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
        backgroundColor:'#fff'
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