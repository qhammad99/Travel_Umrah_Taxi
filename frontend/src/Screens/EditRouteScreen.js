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
  Dimensions,
  Switch
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import API from '../api';
import Colors from '../colors/Colors';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

const EditRouteScreen = ({ route, navigation }) => {
  const { routeId } = route.params;
  const [routeName, setRouteName] = useState('');
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(false);

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      fetchRoute();
    });

    return unsubscribe;
  }, [navigation]);

  const fetchRoute = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${API.get_selected_route}/${routeId}`);
      if (!response.ok) {
        throw new Error('Failed to fetch route');
      }
      const result = await response.json();
      // console.log("result: ", result)
      setRouteName(result.name);
      setCars(result.available_cars);
    } catch (error) {
      console.error('Error fetching route:', error);
      Alert.alert('Error', 'Failed to fetch route details');
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateRoute = async () => {
    if (!routeName || cars.length === 0) {
      Alert.alert('Error', 'Route name and at least one car are required.');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(`${API.get_selected_route}/${routeId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer testuser:testpassword`,
        },
        body: JSON.stringify({ name: routeName, available_cars: cars }),
      });

      if (!response.ok) {
        throw new Error('Failed to update route');
      }

      const result = await response.json();

      Alert.alert('Success', 'Route updated successfully');
      navigation.navigate('AdminRoutesList');
    } catch (error) {
      console.error('Error updating route:', error);
      Alert.alert('Error', 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const updatePrice = (index, new_price) => {
    let current_list = [...cars];
    current_list[index].price = new_price;
    setCars(current_list);
  }

  const renderCarItem = ({ item, index }) => (
    <View style={item.enabled?styles.selector_container: styles.selector_container_disabled}>
      <View style={styles.car_info}>
        <Text style={styles.car_heading}>
          {item.car_name}
        </Text>
        <View style={styles.second_row_holder}>
          <View style={styles.mini_icon_container}>
            <Icon name="luggage" size={24} color="#414141" />
            <Text style={styles.number_style}> {item.no_bags}</Text>
          </View>
          <View style={styles.mini_icon_container}>
            <Icon name="person" size={24} color="#414141" />
            <Text style={styles.number_style}> {item.no_passegers}</Text>
          </View>
        </View>
      </View>

      <View style={{ flexDirection: 'column', width: '20%', alignItems: 'center' }}>
        <Text style={styles.currency_holder}>
          {item.currency_symbol}
        </Text>
        <TextInput
          style={styles.input_price}
          placeholder="price"
          placeholderTextColor="#888"
          value={item.price.toString()}
          onChangeText={(new_price) => updatePrice(index, new_price)}
        />
      </View>

      <Switch
        value={item.enabled}
        onValueChange={(newValue) => {
          let updatedCars = [...cars];
          updatedCars[index].enabled = newValue;
          setCars(updatedCars);
        }}
        thumbColor='#81b0ff'
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        style={styles.toggle_switch}
      />
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

      <Text style={styles.subTitle}>Cars List</Text>
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

      <TouchableOpacity
        style={styles.button}
        onPress={()=>navigation.navigate('AdminRoutesList')}
        disabled={loading}
      >
        <Text style={styles.buttonText}>Go Back</Text>
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
    color: '#333',
    marginBottom: 20,
  },
  subTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#333',
  },
  input: {
    width: '100%',
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 15,
    color: '#151515'
  },
  input_price: {
    width: '100%',
    borderRadius: 5,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    paddingVertical: -10,
    color: '#151515'
  },
  button: {
    alignSelf:'center',
    width: '90%',
    padding: 15,
    borderRadius: 5,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 3
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
  selector_container: {
    width: '90%',
    alignSelf: 'center',
    marginTop: 10,
    backgroundColor: Colors.primary,
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
    elevation: 8,
    justifyContent: 'space-between'
  },
  selector_container_disabled: {
    width: '90%',
    alignSelf: 'center',
    marginTop: 10,
    backgroundColor: Colors.primary,
    opacity: 0.5,
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
    elevation: 8,
    justifyContent: 'space-between'
  },
  car_heading: {
    fontFamily: 'Outfit-SemiBold',
    fontWeight: '400',
    fontSize: 18,
    // textAlign: 'center',
    color: '#414141',
    paddingLeft: 10
  },
  currency_holder: {
    fontFamily: 'Outfit-SemiBold',
    fontWeight: '400',
    fontSize: 16,
    textAlign: 'center'
  },
  second_row_holder: {
    flexDirection: 'row',
    marginTop: 4,
    // justifyContent: 'space-evenly',
    paddingLeft: 10
  },
  mini_icon_container: {
    display: 'flex',
    flexDirection: 'row',
    marginRight: 10
  },
  number_style: {
    fontFamily: 'Outfit-Medium',
    fontWeight: '400',
    fontSize: 14,
    textAlign: 'center',
    color: '#414141'
  }
});

export default EditRouteScreen;
