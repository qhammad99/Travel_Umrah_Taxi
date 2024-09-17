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
// import { createDrawerNavigator } from '@react-navigation/drawer';

import RoutePage from './src/Screens/RoutePage';
import DetailPage from './src/Screens/DetailPage';
import TermsAndConditions from './src/Screens/TermsAndConditions';
import CustomDrawer from './src/Components/CustomDrawer';
import LoginScreen from './src/Screens/LoginScreen';
import AdminRoutesListScreen from './src/Screens/AdminRoutesListScreen';
import AddRouteScreen from './src/Screens/AddRouteScreen';
import EditRouteScreen from './src/Screens/EditRouteScreen';

// const Drawer = createDrawerNavigator();
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

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
          {/* <Tab.Navigator drawerContent={props => <CustomDrawer {...props} />} screenOptions={{headerShown: false}}> */}
            {/* <Tab.Screen name="Home" component={LandingPage} />
            <Tab.Screen name="Route" component={RoutePage} options={{drawerItemStyle: { display: 'none' }}}/>
            <Tab.Screen name="CarDetail" component={DetailPage} options={{drawerItemStyle: { display: 'none' }}} />
            <Tab.Screen name="Terms" component={TermsAndConditions} />
            <Tab.Screen name="Login" component={LoginScreen} />
            <Tab.Screen name="AdminRoutesList" component={AdminRoutesListScreen} options={{drawerItemStyle: { display: 'none' }}} />
            <Tab.Screen name="AddRoute" component={AddRouteScreen} options={{drawerItemStyle: { display: 'none' }}} />
            <Tab.Screen name="EditRoute" component={EditRouteScreen} options={{drawerItemStyle: { display: 'none' }}} /> */}
          <Tab.Navigator screenOptions={{headerShown: false}}>
            <Tab.Screen name="Home" component={LandingPage} />
            <Tab.Screen name="Route" component={RoutePage} options={{tabBarButton: () => null,tabBarVisible: false}}/>
            <Tab.Screen name="CarDetail" component={DetailPage} options={{tabBarButton: () => null,tabBarVisible: false}} />
            <Tab.Screen name="Terms" component={TermsAndConditions} />
            <Tab.Screen name="Login" component={LoginScreen} />
            <Tab.Screen name="AdminRoutesList" component={AdminRoutesListScreen} options={{tabBarButton: () => null,tabBarVisible: false}} />
            <Tab.Screen name="AddRoute" component={AddRouteScreen} options={{tabBarButton: () => null,tabBarVisible: false}} />
            <Tab.Screen name="EditRoute" component={EditRouteScreen} options={{tabBarButton: () => null,tabBarVisible: false}} />
          </Tab.Navigator>
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