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

const { width: viewportWidth } = Dimensions.get('window');

const CarSelector = (params) => {
    const car_details = params.car_detail;
    const language = params.language;

    const handleDetailClick = () => {
        params.clickHandle(car_details);
    };

    const isArabic = language === 'ar';

    return (
        <TouchableOpacity onPress={handleDetailClick}>
            <View style={styles.selector_container}>
                {isArabic ? (
                    <>
                        <Image
                            source={car_details.image_name}
                            style={styles.car_photo}
                            resizeMode='contain'
                        />
                        <View style={styles.car_info}>
                            <Text style={styles.car_heading}>
                                {car_details.car_name}
                            </Text>
                            <Text style={styles.currency_holder}>
                                {car_details.currency_symbol} {car_details.price}
                            </Text>
                            <View style={styles.second_row_holder}>
                                <View style={styles.mini_icon_container}>
                                    <Icon name="luggage" size={24} color={Colors.dimTextColor} />
                                    <Text style={styles.number_style}> {car_details.no_bags}</Text>
                                </View>
                                <View style={styles.mini_icon_container}>
                                    <Icon name="person" size={24} color={Colors.dimTextColor} />
                                    <Text style={styles.number_style}> {car_details.no_passegers}</Text>
                                </View>
                            </View>
                        </View>
                    </>
                ) : (
                    <>
                        <View style={styles.car_info}>
                            <Text style={styles.car_heading}>
                                {car_details.car_name}
                            </Text>
                            <Text style={styles.currency_holder}>
                                {car_details.currency_symbol} {car_details.price}
                            </Text>
                            <View style={styles.second_row_holder}>
                                <View style={styles.mini_icon_container}>
                                    <Icon name="luggage" size={24} color={Colors.dimTextColor} />
                                    <Text style={styles.number_style}> {car_details.no_bags}</Text>
                                </View>
                                <View style={styles.mini_icon_container}>
                                    <Icon name="person" size={24} color={Colors.dimTextColor} />
                                    <Text style={styles.number_style}> {car_details.no_passegers}</Text>
                                </View>
                            </View>
                        </View>
                        <Image
                            source={car_details.image_name}
                            style={styles.car_photo}
                            resizeMode='contain'
                        />
                    </>
                )}
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
        color: Colors.lightTextColor,
        paddingLeft: 10
    },
    currency_holder: {
        fontFamily: 'Outfit-SemiBold',
        fontWeight: '400',
        fontSize: 16,
        paddingLeft: 10,
        color: Colors.dimTextColor
    },
    second_row_holder: {
        flexDirection: 'row',
        marginTop: 4,
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
        color: Colors.dimTextColor
    }
});

export default CarSelector;
