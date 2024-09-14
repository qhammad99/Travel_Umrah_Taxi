import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions,
    TouchableOpacity
} from 'react-native';
import Colors from '../colors/Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

const CarSelector = (params) => {
    const car_details = params.car_detail;

    const handleDetailClick = () => {
        params.clickHandle(params.car_detail);
    };

    return (
        <TouchableOpacity onPress={handleDetailClick}>

            <View style={styles.selector_container}>
                <View style={styles.car_info}>
                    <Text style={styles.car_heading}>
                        {car_details.car_name}
                    </Text>
                    <Text style={styles.currency_holder} >
                        {car_details.currency_symbol} {car_details.price}
                    </Text>
                    <View style={styles.second_row_holder}>
                        <View style={styles.mini_icon_container}>
                            <Icon name="luggage" size={24} color="#414141" />
                            <Text style={styles.number_style}> {car_details.no_bags}</Text>
                        </View>
                        <View style={styles.mini_icon_container}>
                            <Icon name="person" size={24} color="#414141" />
                            <Text style={styles.number_style}> {car_details.no_passegers}</Text>
                        </View>
                    </View>
                </View>
                <Image
                    source={car_details.image_name}
                    style={styles.car_photo}
                    resizeMode='contain'
                />
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    selector_container: {
        width: '90%',
        alignSelf: 'center',
        marginTop: 10,
        backgroundColor: Colors.primary,
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'row',
        padding: 10,
        elevation: 8
    },
    car_photo: {
        flex: 1,
        height: viewportWidth * 0.2,
        width: viewportWidth * 0.2
    },
    car_info: {
        flex: 1,
    },
    car_heading: {
        fontFamily: 'Outfit-SemiBold',
        fontWeight: '400',
        fontSize: 18,
        // textAlign: 'center',
        color: '#414141',
        paddingLeft: 10
    },
    currency_holder: {
        fontFamily: 'Outfit-SemiBold',
        fontWeight: '400',
        fontSize: 16,
        // textAlign: 'center',
        paddingLeft: 10
    },
    second_row_holder: {
        flexDirection: 'row',
        marginTop: 4,
        // justifyContent: 'space-evenly',
        paddingLeft: 10
    },
    mini_icon_container: {
        display: 'flex',
        flexDirection: 'row',
        marginRight: 10
    },
    number_style: {
        fontFamily: 'Outfit-Medium',
        fontWeight: '400',
        fontSize: 14,
        textAlign: 'center',
        color: '#414141'
    }
});

export default CarSelector;