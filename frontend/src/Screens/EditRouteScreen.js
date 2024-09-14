import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ActivityIndicator,
  FlatList,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather'; // Ensure you have this installed

const EditRouteScreen = ({ route, navigation }) => {
  const { routeId } = route.params; // Get routeId from navigation parameters
  const [routeName, setRouteName] = useState('');
  const [cars, setCars] = useState([]);
  const [newCar, setNewCar] = useState({
    car_name: '',
    image_name: '',
    no_passegers: '',
    no_bags: '',
    price: '',
    currency_symbol: 'SAR',
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchRoute();
  }, []);

  const fetchRoute = async () => {
    setLoading(true);
    try {
      const response = await fetch(`http://1.2.3.54:3000/routes/${routeId}`); // Adjust URL
      if (!response.ok) {
        throw new Error('Failed to fetch route');
      }
      const result = await response.json();
      setRouteName(result.name);
      setCars(result.available_cars);
    } catch (error) {
      console.error('Error fetching route:', error);
      Alert.alert('Error', 'Failed to fetch route details');
    } finally {
      setLoading(false);
    }
  };

  const handleAddCar = () => {
    if (!newCar.car_name || !newCar.image_name || !newCar.no_passegers || !newCar.no_bags || !newCar.price) {
      Alert.alert('Error', 'Please fill in all car details.');
      return;
    }
    setCars([...cars, newCar]);
    setNewCar({
      car_name: '',
      image_name: '',
      no_passegers: '',
      no_bags: '',
      price: '',
      currency_symbol: 'SAR',
    });
  };

  const handleUpdateRoute = async () => {
    if (!routeName || cars.length === 0) {
      Alert.alert('Error', 'Route name and at least one car are required.');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(`http://1.2.3.54:3000/routes/${routeId}`, { // Adjust URL
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: routeName, available_cars: cars }),
      });

      if (!response.ok) {
        throw new Error('Failed to update route');
      }

      const result = await response.json();

      Alert.alert('Success', 'Route updated successfully');
      navigation.goBack(); // Go back to the previous screen
    } catch (error) {
      console.error('Error updating route:', error);
      Alert.alert('Error', 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteCar = (index) => {
    Alert.alert(
      'Confirm Deletion',
      'Are you sure you want to delete this car?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Delete', onPress: () => setCars(cars.filter((_, i) => i !== index)) },
      ]
    );
  };

  const renderCarItem = ({ item, index }) => (
    <View style={styles.carItem}>
      <Image
        source={{ uri: `http://1.2.3.54:3000/images/${item.image_name}` }} // Adjust URL
        style={styles.carImage}
      />
      <View style={styles.carDetails}>
        <Text style={styles.carName}>{item.car_name}</Text>
        <Text>Passengers: {item.no_passegers}</Text>
        <Text>Bags: {item.no_bags}</Text>
        <Text>Price: {item.price} {item.currency_symbol}</Text>
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => handleDeleteCar(index)}
        >
          <Icon name="trash" size={24} color="#FF4D4D" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit Route</Text>
      <TextInput
        style={styles.input}
        placeholder="Route Name"
        value={routeName}
        onChangeText={setRouteName}
      />
      
      <Text style={styles.subTitle}>Available Cars</Text>
      {loading ? (
        <ActivityIndicator size="large" color="#007BFF" />
      ) : (
        <FlatList
          data={cars}
          renderItem={renderCarItem}
          keyExtractor={(item, index) => index.toString()}
          ListEmptyComponent={<Text style={styles.emptyListText}>No cars available</Text>}
        />
      )}

      <Text style={styles.subTitle}>Add New Car</Text>
      <TextInput
        style={styles.input}
        placeholder="Car Name"
        value={newCar.car_name}
        onChangeText={(text) => setNewCar({ ...newCar, car_name: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Image Name"
        value={newCar.image_name}
        onChangeText={(text) => setNewCar({ ...newCar, image_name: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Number of Passengers"
        keyboardType="numeric"
        value={newCar.no_passegers}
        onChangeText={(text) => setNewCar({ ...newCar, no_passegers: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Number of Bags"
        keyboardType="numeric"
        value={newCar.no_bags}
        onChangeText={(text) => setNewCar({ ...newCar, no_bags: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Price"
        keyboardType="numeric"
        value={newCar.price}
        onChangeText={(text) => setNewCar({ ...newCar, price: text })}
      />
      <TouchableOpacity
        style={styles.addButton}
        onPress={handleAddCar}
      >
        <Text style={styles.buttonText}>Add Car</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={handleUpdateRoute}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator size="small" color="#fff" />
        ) : (
          <Text style={styles.buttonText}>Update Route</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
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
  carItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  carImage: {
    width: 60,
    height: 60,
    marginRight: 10,
    borderRadius: 5,
  },
  carDetails: {
    flex: 1,
  },
  carName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  deleteButton: {
    marginTop: 10,
    alignSelf: 'flex-end',
  },
  addButton: {
    width: '100%',
    padding: 15,
    borderRadius: 5,
    backgroundColor: '#007BFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
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
    fontSize: 16,
    fontWeight: 'bold',
  },
  emptyListText: {
    textAlign: 'center',
    color: '#888',
    marginTop: 20,
  },
});

export default EditRouteScreen;
