import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ActivityIndicator } from 'react-native';

const AddRouteScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [availableCars, setAvailableCars] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAddRoute = async () => {
    if (name.trim() === '' || availableCars.trim() === '') {
      Alert.alert('Error', 'Route name and available cars are required.');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('http://1.2.3.54:3000/routes', { // Replace with your backend address
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, availableCars: JSON.parse(availableCars) }),
      });

      const result = await response.json();

      if (response.ok) {
        Alert.alert('Success', 'Route added successfully');
        navigation.goBack(); // Go back to the previous screen
      } else {
        Alert.alert('Error', result.message || 'Failed to add route');
      }
    } catch (error) {
      console.error('Error adding route:', error);
      Alert.alert('Error', 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Route</Text>
      <TextInput
        style={styles.input}
        placeholder="Route Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Available Cars (JSON format)"
        value={availableCars}
        onChangeText={setAvailableCars}
        multiline
      />
      <TouchableOpacity
        style={styles.button}
        onPress={handleAddRoute}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator size="small" color="#fff" />
        ) : (
          <Text style={styles.buttonText}>Add Route</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  button: {
    width: '100%',
    padding: 15,
    borderRadius: 5,
    backgroundColor: '#007BFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default AddRouteScreen;
