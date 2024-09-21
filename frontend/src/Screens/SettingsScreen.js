import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Colors from '../colors/Colors';
import Icon from 'react-native-vector-icons/Ionicons';

const SettingsScreen = ({ navigation, updateLanguage, updateTheme }) => {
  const [language, setLanguage] = useState('en');
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const loadSettings = async () => {
      const savedLanguage = await AsyncStorage.getItem('language');
      const savedTheme = await AsyncStorage.getItem('theme');
      if (savedLanguage) {
        setLanguage(savedLanguage);
      }
      if (savedTheme) {
        setTheme(savedTheme);
      }
    };

    loadSettings();
  }, [theme, language]);

  const handleLanguageChange = async (lang) => {
    setLanguage(lang);
    updateLanguage(lang);
    await AsyncStorage.setItem('language', lang);
  };

  const handleThemeChange = async (selectedTheme) => {
    setTheme(selectedTheme);
    updateTheme(selectedTheme);
    await AsyncStorage.setItem('theme', selectedTheme);
  };

  const translations = {
    en: {
      title: 'Settings',
      terms: 'Terms and Conditions',
      chooseLanguage: 'Choose Language',
      chooseTheme: 'Choose Theme',
    },
    ar: {
      title: 'الإعدادات',
      terms: 'الشروط والأحكام',
      chooseLanguage: 'اختر اللغة',
      chooseTheme: 'اختر السمة',
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
          style={[styles.picker, theme=='light'?styles.dark_font:styles.light_font]}
          onValueChange={(itemValue) => handleLanguageChange(itemValue)}
          dropdownIconColor={theme == 'light' ? Colors.darkTextColor: Colors.lightTextColor}
        >
          <Picker.Item label="English" value="en" />
          <Picker.Item label="Arabic" value="ar" />
        </Picker>
      ),
    },
    {
      title: lang.chooseTheme,
      component: (
        <Picker
          selectedValue={theme}
          style={[styles.picker, theme=='light'?styles.dark_font:styles.light_font]}
          onValueChange={(itemValue) => handleThemeChange(itemValue)}
          dropdownIconColor={theme == 'light' ? Colors.darkTextColor: Colors.lightTextColor}
        >
          <Picker.Item label="Light" value="light" />
          <Picker.Item label="Dark" value="dark" />
        </Picker>
      ),
    },
  ];

  return (
    <View style={theme == 'light' ? styles.container: styles.container_dark}>
      <Text style={theme == 'light' ? styles.title: styles.title_dark}>{lang.title}</Text>
      <FlatList
        data={settingsOptions}
        renderItem={({ item }) => (
          <View style={theme == 'light' ? styles.optionContainer: styles.optionContainer_dark}>
            <TouchableOpacity style={styles.option} onPress={item.onPress}>
              <Icon name={item.icon} size={24} color={Colors.primary} />
              <Text style={[styles.optionText, theme=='light'?styles.dark_font:styles.light_font]}>{item.title}</Text>
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
  container_dark: {
    flex: 1,
    padding: 20,
    backgroundColor: '#222',
  },
  title: {
    fontSize: 28,
    marginBottom: 20,
    color: Colors.darkTextColor,
    fontWeight: 'bold',
  },
  title_dark: {
    fontSize: 28,
    marginBottom: 20,
    color: Colors.lightTextColor,
    fontWeight: 'bold',
  },
  optionContainer: {
    backgroundColor: '#FFFFFF',
    marginVertical: 8,
    borderRadius: 8,
    elevation: 2,
    padding: 15,
    color: Colors.darkTextColor
  },
  optionContainer_dark: {
    backgroundColor: '#404040',
    marginVertical: 8,
    borderRadius: 8,
    elevation: 2,
    padding: 15,
    color: Colors.lightTextColor
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  optionText: {
    fontSize: 18,
    flex: 1,
    marginLeft: 10,
  },
  picker: {
    height: 50,
    width: '100%',
    marginTop: 10,
  },
  light_font:{
    color: Colors.lightTextColor
  },
  dark_font: {
    color: Colors.darkTextColor
  }
});

export default SettingsScreen;