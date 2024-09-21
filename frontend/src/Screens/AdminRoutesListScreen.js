import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Button, Alert, ActivityIndicator } from 'react-native';
import API from '../api';
import Colors from '../colors/Colors';

const AdminRoutesListScreen = ({ navigation }) => {
  const [routes, setRoutes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      fetchRoutes();
    });

    return unsubscribe;
  }, [navigation]);

  const fetchRoutes = async () => {
    setLoading(true);
    try {
      const response = await fetch(API.get_routes_route);
      const result = await response.json();
      setRoutes(result);
    } catch (error) {
      console.error('Error fetching routes:', error);
      Alert.alert('Error', 'Failed to load routes');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    Alert.alert(
      'Delete Route',
      'Are you sure you want to delete this route?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Delete',
          onPress: async () => {
            try {
              const response = await fetch(`${API.delete_routes_route}/${id}`, { 
                method: 'DELETE',
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer testuser:testpassword`,
                },
              });
              const result = await response.json();
              if(result.message != "Forbidden"){
                // console.log("result: ", result)
                Alert.alert('Success', 'Route deleted successfully');
                fetchRoutes()
              }
            } catch (error) {
              console.error('Error deleting route:', error);
              Alert.alert('Error', 'Failed to delete route');
            }
          },
        },
      ],
      { cancelable: false }
    );
  };

  const renderRouteItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemTitle}>{item.name}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.editButton}
          onPress={() => navigation.navigate('EditRoute', { routeId: item.id })}
        >
          <Text style={styles.buttonText}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => handleDelete(item.id)}
        >
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
     {loading && <ActivityIndicator size="large" color="#007BFF" />}
      <FlatList
        data={routes}
        renderItem={renderRouteItem}
        keyExtractor={item => item.id.toString()}
        refreshing={refreshing}
        onRefresh={fetchRoutes}
        ListEmptyComponent={<Text style={styles.emptyText}>No routes available</Text>}
      />
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('AddRoute')}
      >
        <Text style={styles.addButtonText}>Add Route</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  itemContainer: {
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 10,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
    elevation: 5,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: Colors.darkTextColor,
    fontFamily: 'Outfit-Medium'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  editButton: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
  },
  deleteButton: {
    backgroundColor: '#FF4D4D',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 5,
    position: 'absolute',
    bottom: 16,
    right: 16,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  emptyText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#888',
    marginTop: 20,
  },
});

export default AdminRoutesListScreen;
