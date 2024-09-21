// App.js
import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  View,
  StatusBar,
  StyleSheet,
  Text
} from 'react-native';
import Colors from './src/colors/Colors';
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LandingPage from './src/Screens/LandingPage';
import SettingsScreen from './src/Screens/SettingsScreen';
import RoutePage from './src/Screens/RoutePage';
import DetailPage from './src/Screens/DetailPage';
import TermsAndConditions from './src/Screens/TermsAndConditions';
import LoginScreen from './src/Screens/LoginScreen';
import AdminRoutesListScreen from './src/Screens/AdminRoutesListScreen';
import AddRouteScreen from './src/Screens/AddRouteScreen';
import EditRouteScreen from './src/Screens/EditRouteScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

const App = () => {
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    const loadLanguage = async () => {
      const savedLanguage = await AsyncStorage.getItem('language');
      if (savedLanguage) {
        setLanguage(savedLanguage);
      }
      SplashScreen.hide();
    };

    loadLanguage();
  }, []);

  const updateLanguage = async (lang) => {
    setLanguage(lang);
    await AsyncStorage.setItem('language', lang);
  };

  const texts = {
    en: {
      title: "Travel Umrah Taxi",
      // welcome: "Welcome to Travel Umrah Taxi",
      home: "Home",
      settings: "Settings",
      route: "Route",
      login: "Login",
    },
    ar: {
      title: "تاكسي سفر عمرة",
      // welcome: "مرحبا بكم في تاكسي سفر عمرة",
      home: "الرئيسية",
      settings: "الإعدادات",
      route: "الطريق",
      login: "تسجيل الدخول",
    },
  };

  return (
    <>
      <StatusBar backgroundColor={Colors.primary} />
      <SafeAreaView style={styles.safeViewHolder}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleHeading}>{texts[language].title}</Text>
        </View>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'Home') {
                  iconName = 'home';
                } else if (route.name === 'Settings') {
                  iconName = 'settings-suggest';
                } else if (route.name === 'Login') {
                  iconName = 'person';
                }

                return <Icon name={iconName} size={size} color={color} />;
              },
              headerShown: false,
            })}
            tabBarOptions={{
              activeTintColor: Colors.primary,
              inactiveTintColor: Colors.primary,
            }}
          >
            <Tab.Screen name="Home" options={{tabBarLabel: texts[language].home}}>
              {(props) => <LandingPage {...props} language={language} />}
            </Tab.Screen>
            <Tab.Screen name="Route" component={RoutePage} options={{ tabBarButton: () => null, tabBarVisible: false }} />
            <Tab.Screen name="CarDetail" component={DetailPage} options={{ tabBarButton: () => null, tabBarVisible: false }} />
            <Tab.Screen name="Terms" component={TermsAndConditions} options={{ tabBarButton: () => null, tabBarVisible: false }} />
            <Tab.Screen name="Settings" options={{tabBarLabel: texts[language].settings}}>
              {(props) => <SettingsScreen {...props} updateLanguage={updateLanguage} />}
            </Tab.Screen>
            <Tab.Screen name="Login" component={LoginScreen} options={{tabBarLabel: texts[language].login}}/>
            <Tab.Screen name="AdminRoutesList" component={AdminRoutesListScreen} options={{ tabBarButton: () => null, tabBarVisible: false }} />
            <Tab.Screen name="AddRoute" component={AddRouteScreen} options={{ tabBarButton: () => null, tabBarVisible: false }} />
            <Tab.Screen name="EditRoute" component={EditRouteScreen} options={{ tabBarButton: () => null, tabBarVisible: false }} />
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
  titleContainer: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary,
    borderBottomWidth: 1,
    borderBottomColor: Colors.selectedColor,
  },
  titleHeading: {
    fontSize: 30,
    fontFamily: 'SUSE-SemiBold',
    fontWeight: '600',
    textAlign: 'center',
    color: '#fff',
  },
});

export default App;
