import React, { useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    Image,
    Dimensions,
    TouchableOpacity,
    Linking,
} from 'react-native';
import Colors from '../colors/Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FonIcon from 'react-native-vector-icons/FontAwesome5';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

const DetailPage = ({ route }) => {
    const { path_detail, selected_car, language, theme } = route.params;
    // console.log("theme: ", theme)

    useEffect(()=>{
    }, [theme, language]);
    let splitted_path;
    if(language == 'en') 
        splitted_path= path_detail.name.split(' to ');
    else
        splitted_path = path_detail.name.split(' إلى ');

    const translations = {
        en: {
            carModel: "Car Model:",
            passengersCapacity: "Passengers Capacity:",
            luggageCapacity: "Luggage Capacity:",
            pickUp: "Pick up:",
            destination: "Destination:",
            price: "Price:",
            paymentNote: "Payment Cash After Ride",
            rulesNote: "Location & Rates will be fix by mutual conversation"
        },
        ar: {
            carModel: "نموذج السيارة",
            passengersCapacity: "سعة الركاب",
            luggageCapacity: "سعة الأمتعة",
            pickUp: "استلام",
            destination: "وجهة",
            price: "السعر",
            paymentNote: "الدفع نقدًا بعد الرحلة",
            rulesNote: "الموقع والأسعار ستحدد بالتفاهم المتبادل"
        },
    };

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
            source={theme == 'light' ? require('../../assets/photos/Group5.png') : require('../../assets/photos/Group6.png')}
            style={theme == 'light' ? styles.bgImg : styles.bgImgDark}
            imageStyle={{ opacity: 0.1 }}
        >
            <View style={theme == 'light' ? styles.div_container : styles.div_container_dark}>
                <Image
                    source={selected_car.image_name}
                    style={styles.image_dis}
                    resizeMode='contain'
                />

                <View style={styles.written_info_container}>
                    <View style={styles.break_line_main} />

                    <View style={language == 'en'? styles.route_container : styles.route_container_reverse}>
                        <Icon name="directions-car" size={30} color={theme == 'light' ? "#414141" : Colors.lightTextColor} />
                        <View style={styles.text_icon_container}>
                            <Text style={[styles.icon_label, theme=='light'?styles.dark_font:styles.light_font]}>{translations[language].carModel}</Text>
                            <Text style={[styles.icon_main, theme=='light'?styles.dark_font:styles.light_font]}>{selected_car.car_name}</Text>
                        </View>
                    </View>

                    <View style={{flexDirection:'row', justifyContent: language == 'en' ? 'flex-start' : 'flex-end'}}>
                    <View style={language == 'en'? styles.route_container : styles.route_container_reverse}>
                        <Icon name="person" size={30} color={theme == 'light' ? "#414141" : Colors.lightTextColor} />
                        <View style={styles.text_icon_container}>
                            <Text style={[styles.icon_label, theme=='light'?styles.dark_font:styles.light_font]}>{translations[language].passengersCapacity}</Text>
                            <Text style={[styles.icon_main, theme=='light'?styles.dark_font:styles.light_font]}>{selected_car.no_passegers}</Text>
                        </View>
                    </View>

                    <View style={language == 'en'? styles.side_route_container : styles.route_container_reverse}>
                        <Icon name="luggage" size={30} color={theme == 'light' ? "#414141" : Colors.lightTextColor} />
                        <View style={styles.text_icon_container}>
                            <Text style={[styles.icon_label, theme=='light'?styles.dark_font:styles.light_font]}>{translations[language].luggageCapacity}</Text>
                            <Text style={[styles.icon_main, theme=='light'?styles.dark_font:styles.light_font]}>{selected_car.no_bags}</Text>
                        </View>
                    </View>
                    </View>

                    <View style={styles.break_line} />

                    <View style={language == 'en'? styles.route_container : styles.route_container_reverse}>
                        <Icon name="location-on" size={30} color="green" />
                        <View style={styles.text_icon_container}>
                            <Text style={[styles.icon_label, theme=='light'?styles.dark_font:styles.light_font]}>{translations[language].pickUp}</Text>
                            <Text style={[styles.icon_main, theme=='light'?styles.dark_font:styles.light_font]}>{splitted_path[0]}</Text>
                        </View>
                    </View>
                    <View style={language == 'en'? styles.route_container : styles.route_container_reverse}>
                        <Icon name="location-on" size={30} color="red" />
                        <View style={styles.text_icon_container}>
                            <Text style={[styles.icon_label, theme=='light'?styles.dark_font:styles.light_font]}>{translations[language].destination}</Text>
                            <Text style={[styles.icon_main, theme=='light'?styles.dark_font:styles.light_font]}>{splitted_path[1]}</Text>
                        </View>
                    </View>

                    <View style={styles.break_line} />

                    <View style={language == 'en'? styles.route_container : styles.route_container_reverse}>
                        <Icon name="payments" size={30} color="green" />
                        <View style={styles.text_icon_container}>
                            <Text style={[styles.icon_label, theme=='light'?styles.dark_font:styles.light_font]}>{translations[language].price}</Text>
                            <Text style={[styles.icon_main, theme=='light'?styles.dark_font:styles.light_font]}>{selected_car.currency_symbol}{selected_car.price}</Text>
                            <Text style={[styles.icon_sub_main, theme=='light'?styles.dark_font:styles.light_font]}>{translations[language].paymentNote}</Text>
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

                    <Text style={[styles.icon_sub_main, {fontSize: 13}, theme=='light'?styles.dark_font:styles.light_font]}>{translations[language].rulesNote}</Text>


                </View>



            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({    bgImg: {
    flex: 1,
    backgroundColor: '#fff'
},
bgImgDark: {
    flex: 1,
    backgroundColor: '#2a2a2a'
},
    bgImg: {
        flex: 1,
        backgroundColor: '#fff'
    },
    bgImgDark: {
        flex: 1,
        backgroundColor: '#2a2a2a'
    },
    div_container: {
        width: '90%',
        alignSelf: 'center',
        borderRadius: 10,
        backgroundColor: '#eee',
        marginTop: 30,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: "#a7a7a7",
        elevation: 10,
        display: 'flex',
        color: Colors.darkTextColor,
        flexDirection: 'column'
    },
    div_container_dark: {
        width: '90%',
        alignSelf: 'center',
        borderRadius: 10,
        backgroundColor: '#404040',
        marginTop: 30,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: "#a7a7a7",
        elevation: 10,
        display: 'flex',
        color: '#fff',
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
    route_container_reverse: {
        display: 'flex',
        flexDirection: 'row-reverse',
        alignItems: 'center',
        marginTop: 2,
        marginBottom: 2,
        paddingRight: 20
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
    },
    dark_font: {
        color: Colors.darkTextColor
    },
    light_font: {
        color: Colors.lightTextColor
    },
    icon_main: {
        fontFamily: 'Outfit-Medium',
        fontSize: 16,
        padding: 0,
        marginTop: -4,
        marginLeft:5,
        textAlign: 'left'
    },
    icon_sub_main: {
        fontFamily: 'Outfit-Medium',
        fontSize: 12,
        padding: 0,
        marginTop: -4,
        marginLeft:5,
        textAlign: 'left',
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