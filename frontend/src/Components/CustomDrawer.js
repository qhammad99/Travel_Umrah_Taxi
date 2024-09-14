import React from "react";
import {
    DrawerContentScrollView,
    DrawerItemList,
} from '@react-navigation/drawer';
import { Image, View, Text } from "react-native";

const CustomDrawer = (props) => {
    return (
        <View style={{flex:1,}}>
            <DrawerContentScrollView {...props}>
                <Image 
                    source={require('../../assets/photos/drawer_background.jpg')} 
                    style={{
                        width: '100%',
                        height: '100%',
                        marginTop: -5,
                        borderBottomRightRadius: 10
                    }}>
                </Image>
                <DrawerItemList {...props} />
            </DrawerContentScrollView>
            <View style={{padding:20, borderTopWidth:1,borderTopColor:'#ccc'}}>
                <Text>
                    Developed by @maadiTeachings
                </Text>
            </View>
        </View>
    );
}

export default CustomDrawer;