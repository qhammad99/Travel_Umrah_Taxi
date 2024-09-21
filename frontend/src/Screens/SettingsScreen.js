// SettingsScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Colors from '../colors/Colors';
import Icon from 'react-native-vector-icons/Ionicons';

const SettingsScreen = ({ navigation, updateLanguage }) => {
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    const loadLanguage = async () => {
      const savedLanguage = await AsyncStorage.getItem('language');
      if (savedLanguage) {
        setLanguage(savedLanguage);
      }
    };

    loadLanguage();
  }, []);

  const handleLanguageChange = async (lang) => {
    setLanguage(lang);
    updateLanguage(lang);  // Call the prop function to update language in App.js
    await AsyncStorage.setItem('language', lang);
  };

  const translations = {
    en: {
      title: 'Settings',
      terms: 'Terms and Conditions',
      chooseLanguage: 'Choose Language',
    },
    ar: {
      title: 'الإعدادات',
      terms: 'الشروط والأحكام',
      chooseLanguage: 'اختر اللغة',
    },
  };

  const lang = translations[language] || translations.en; // Fallback to English

  const settingsOptions = [
    {
      title: lang.terms,
      onPress: () => navigation.navigate('Terms'),
      icon: 'document-text',
    },
    {
      title: lang.chooseLanguage,
      component: (
        <Picker
          selectedValue={language}
          style={styles.picker}
          onValueChange={(itemValue) => handleLanguageChange(itemValue)}
          dropdownIconColor={Colors.darkTextColor}
        >
          <Picker.Item label="English" value="en" />
          <Picker.Item label="Arabic" value="ar" />
        </Picker>
      ),
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{lang.title}</Text>
      <FlatList
        data={settingsOptions}
        renderItem={({ item }) => (
          <View style={styles.optionContainer}>
            <TouchableOpacity style={styles.option} onPress={item.onPress}>
              <Icon name={item.icon} size={24} color={Colors.primary} />
              <Text style={styles.optionText}>{item.title}</Text>
            </TouchableOpacity>
            {item.component}
          </View>
        )}
        keyExtractor={(item) => item.title}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 28,
    marginBottom: 20,
    color: Colors.darkTextColor,
    fontWeight: 'bold',
  },
  optionContainer: {
    backgroundColor: '#FFFFFF',
    marginVertical: 8,
    borderRadius: 8,
    elevation: 2,
    padding: 15,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  optionText: {
    fontSize: 18,
    color: Colors.darkTextColor,
    flex: 1,
    marginLeft: 10,
  },
  picker: {
    height: 50,
    width: '100%',
    marginTop: 10,
    color: Colors.darkTextColor,
  },
});

export default SettingsScreen;
