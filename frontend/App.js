import React, { useEffect } from 'react';
import {
  SafeAreaView,
  View,
  StatusBar,
  StyleSheet,
  Text,
  Linking,
  ImageBackground,
  TouchableOpacity,
  Alert
} from 'react-native';
import Colors from './src/colors/Colors';
import SplashScreen from 'react-native-splash-screen';
import LandingPage from './src/Screens/LandingPage';
import LottieView from 'lottie-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import RoutePage from './src/Screens/RoutePage';
import DetailPage from './src/Screens/DetailPage';
import TermsAndConditions from './src/Screens/TermsAndConditions';
import CustomDrawer from './src/Components/CustomDrawer';
import LoginScreen from './src/Screens/LoginScreen';
import AdminRoutesListScreen from './src/Screens/AdminRoutesListScreen';
import AddRouteScreen from './src/Screens/AddRouteScreen';
import EditRouteScreen from './src/Screens/EditRouteScreen';

const Drawer = createDrawerNavigator();

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, [])

  return (
    <>
      <StatusBar backgroundColor={Colors.primary} />
      <SafeAreaView style={styles.safeViewHolder}>
        {/* Title Text */}
        <View style={styles.titleContainer}>
          <Text style={styles.titleHeading}>
            Taxi Online
          </Text>
        </View>
        <NavigationContainer>
          <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />} screenOptions={{headerShown: false}}>
            <Drawer.Screen name="Home" component={LandingPage} />
            <Drawer.Screen name="Route" component={RoutePage} options={{drawerItemStyle: { display: 'none' }}}/>
            <Drawer.Screen name="CarDetail" component={DetailPage} options={{drawerItemStyle: { display: 'none' }}} />
            <Drawer.Screen name="Terms" component={TermsAndConditions} />
            <Drawer.Screen name="Login" component={LoginScreen} />
            <Drawer.Screen name="AdminRoutesList" component={AdminRoutesListScreen} options={{drawerItemStyle: { display: 'none' }}} />
            <Drawer.Screen name="AddRoute" component={AddRouteScreen} options={{drawerItemStyle: { display: 'none' }}} />
            <Drawer.Screen name="EditRoute" component={EditRouteScreen} options={{drawerItemStyle: { display: 'none' }}} />
          </Drawer.Navigator>
        </NavigationContainer>
      </SafeAreaView>

    </>
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
  titleContainer: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary,
    borderBottomWidth: 1,
    borderBottomColor: Colors.selectedColor

  },
  titleHeading: {
    fontSize: 30,
    fontFamily: 'SUSE-SemiBold',
    fontWeight: '600',
    // fontStyle: 'italic',
    textAlign: 'center',
    color: '#fff'
  },
});

export default App;