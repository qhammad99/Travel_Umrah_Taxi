import React, { useState } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    ImageBackground,
    Image,
    Dimensions,
    TouchableOpacity,
    Linking,
    Alert
} from 'react-native';
import Colors from '../colors/Colors';
import { Picker } from '@react-native-picker/picker';
import CarSelector from '../Components/CarSelector';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FonIcon from 'react-native-vector-icons/FontAwesome5';



const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

const DetailPage = ({ route }) => {
    const { path_detail, selected_car } = route.params;
    const splitted_path = path_detail.name.split(' to ');

    const handleCall = () => {
        const number = "+923038722354"
        let phoneNumber = '';
        if (Platform.OS === 'android') { phoneNumber = `tel:${number}`; }
        else {phoneNumber = `telprompt:${number}`; }
        Linking.openURL(phoneNumber);
    };

    const handleWhatsapp = () => {
        const phone_number = "923038722354"
        const url = `whatsapp://send?phone=${phone_number}&text=${encodeURIComponent(`
            Car Model: ${selected_car.car_name},\n
            Route: ${path_detail.name}, '\n
            Price: ${selected_car.currency_symbol}${selected_car.price}`)}`;
    
        Linking.openURL(url)
          .then((supported) => {
            // console.log(supported)
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
            source={require('../../assets/photos/Group5.png')}
            style={styles.bgImg}
            imageStyle={{ opacity: 0.1 }}
        >
            <View style={styles.div_container}>
                <Image
                    source={selected_car.image_name}
                    style={styles.image_dis}
                    resizeMode='contain'
                />

                <View style={styles.written_info_container}>
                    <View style={styles.break_line_main} />

                    <View style={styles.route_container}>
                        <Icon name="directions-car" size={26} color="#414141" />
                        <View style={styles.text_icon_container}>
                            <Text style={styles.icon_label}>Car Model:</Text>
                            <Text style={styles.icon_main}>{selected_car.car_name}</Text>
                        </View>
                    </View>

                    <View style={{flexDirection:'row'}}>
                    <View style={styles.route_container}>
                        <Icon name="person" size={26} color="#414141" />
                        <View style={styles.text_icon_container}>
                            <Text style={styles.icon_label}>Passengers Capaciy:</Text>
                            <Text style={styles.icon_main}>{selected_car.no_passegers}</Text>
                        </View>
                    </View>

                    <View style={styles.side_route_container}>
                        <Icon name="luggage" size={26} color="#414141" />
                        <View style={styles.text_icon_container}>
                            <Text style={styles.icon_label}>Luggage Capacity:</Text>
                            <Text style={styles.icon_main}>{selected_car.no_bags}</Text>
                        </View>
                    </View>
                    </View>

                    <View style={styles.break_line} />

                    <View style={styles.route_container}>
                        <Icon name="location-on" size={26} color="green" />
                        <View style={styles.text_icon_container}>
                            <Text style={styles.icon_label}>Pick up:</Text>
                            <Text style={styles.icon_main}>{splitted_path[0]}</Text>
                        </View>
                    </View>
                    <View style={styles.route_container}>
                        <Icon name="location-on" size={26} color="red" />
                        <View style={styles.text_icon_container}>
                            <Text style={styles.icon_label}>Destination:</Text>
                            <Text style={styles.icon_main}>{splitted_path[1]}</Text>
                        </View>
                    </View>

                    <View style={styles.break_line} />

                    <View style={styles.route_container}>
                        <Icon name="payments" size={26} color="green" />
                        <View style={styles.text_icon_container}>
                            <Text style={styles.icon_label}>Price:</Text>
                            <Text style={styles.icon_main}>{selected_car.currency_symbol}{selected_car.price}</Text>
                            <Text style={styles.icon_sub_main}>Payment Cash After Ride</Text>
                        </View>
                    </View>

                    <View style={styles.break_line} />
                    <View style={styles.contact_container}>
                        <TouchableOpacity style={styles.footer_icon_holder} onPress={handleCall}>
                                <Icon name="call" size={40} color="#154c79" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.footer_icon_holder_2} onPress={handleWhatsapp}>
                            <FonIcon name="whatsapp" size={40} color="green" />
                        </TouchableOpacity>
                    </View>

                </View>



            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    div_container: {
        width: '90%',
        alignSelf: 'center',
        borderRadius: 10,
        backgroundColor: '#eee',
        marginTop: 10,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: "#a7a7a7",
        elevation: 10,
        display: 'flex',
        flexDirection: 'column'
    },
    image_dis: {
        height: viewportWidth * 0.5,
        width: viewportWidth * 0.8,
        alignSelf: 'center',
    },
    break_line_main: {
        height: 1,
        width: '90%',
        alignSelf: 'center',
        borderWidth: 0.1,
        marginBottom:3,
        borderColor: "#a7a7a7",
        elevation: 1
    },
    break_line: {
        height: 1,
        width: '90%',
        alignSelf: 'center',
        borderWidth: 0.1,
        marginTop:3,
        marginBottom:3,
        borderColor: "#a7a7a7",
        elevation: 1
    },
    written_info_container: {
        paddingRight: 10,
        paddingLeft: 20,
        paddingBottom: 10
    },
    route_container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 2,
        marginBottom: 2,
    },
    side_route_container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 2,
        marginBottom: 2,
        marginLeft:10
    },
    icon_label: {
        fontFamily: 'Outfit-Medium',
        fontSize: 10,
        padding: 0,
        marginTop: 2,
        marginLeft:5,
        textAlign: 'left',
        color: '#151515'
    },
    icon_main: {
        fontFamily: 'Outfit-Medium',
        fontSize: 16,
        padding: 0,
        marginTop: -4,
        marginLeft:5,
        textAlign: 'left',
        color: '#151515'
    },
    icon_sub_main: {
        fontFamily: 'Outfit-Medium',
        fontSize: 12,
        padding: 0,
        marginTop: -4,
        marginLeft:5,
        textAlign: 'left',
        color: '#151515'
    },
    contact_container:{
        flexDirection:'row',
        justifyContent:'center'
    },
    footer_icon_holder:{
        width: viewportWidth * 0.2,
        justifyContent:'center',
        alignItems:'center',
        margin:10,
        // borderTopStartRadius: 30,
        // borderBottomEndRadius: 30,
        borderRadius: 20,
        paddingVertical: 5,
        paddingHorizontal: 8,
        backgroundColor: '#eee',
        elevation: 5,
        borderWidth: 0,
        borderTopColor: 'green',
        borderLeftColor: 'blue',
        borderBottomColor:'indigo',
        borderRightColor: 'violet'
    },
    footer_icon_holder_2:{
        width: viewportWidth * 0.2,
        justifyContent:'center',
        alignItems:'center',
        marginVertical:10,
        marginHorizontal: 5,
        // borderTopStartRadius: 30,
        // borderBottomEndRadius: 30,
        borderRadius: 20,
        paddingVertical: 5,
        paddingHorizontal: 8,
        backgroundColor: '#eee',
        elevation: 5,
        borderWidth: 0,
        borderTopColor: 'green',
        borderLeftColor: 'blue',
        borderBottomColor:'indigo',
        borderRightColor: 'violet'
    },
    footer_icon_sub_holder:{
        
    }
});

export default DetailPage;