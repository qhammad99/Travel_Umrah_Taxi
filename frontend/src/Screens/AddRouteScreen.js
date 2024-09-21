import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ActivityIndicator } from 'react-native';
import API from '../api';
import Colors from '../colors/Colors';

const AddRouteScreen = ({ navigation }) => {
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAddRoute = async () => {
    if (pickup.trim() === '' || destination.trim() === '' || pickup.length > 1000 || destination.length > 1000) {
      Alert.alert('Error', 'Incorrect input');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(API.add_routes_route, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer testuser:testpassword`,
        },
        body: JSON.stringify({ name: `${pickup} to ${destination}`, availableCars:[]}),
      });

      const result = await response.json();

      if (response.ok) {
        Alert.alert('Success', 'Route added successfully');
        setPickup('');
        setDestination('');
        navigation.navigate('AdminRoutesList');
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
        placeholder="Pickup"
        value={pickup}
        onChangeText={setPickup}
        placeholderTextColor='#888'
      />
      <TextInput
        style={styles.input}
        placeholder="Destination"
        value={destination}
        onChangeText={setDestination}
        placeholderTextColor='#888'
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
    color: '#333'
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    color: Colors.darkTextColor
  },
  button: {
    width: '100%',
    padding: 15,
    borderRadius: 5,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default AddRouteScreen;
