// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ActivityIndicator } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';

// const LoginScreen = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const handleLogin = async () => {
//     if (username.trim() === '' || password.trim() === '' || username.length > 20 || password.length > 20) {
//       Alert.alert('Error', 'Please enter both username and password.');
//       return;
//     }

//     setLoading(true);

//     try {
//       const response = await fetch('http://1.2.3.54:3000/login/', {  // Replace with your machine's IP address
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ username, password }),
//       });

//       const result = await response.json();

//       if (response.ok) {
//         Alert.alert('Login Successful', result.message);
//       } else {
//         Alert.alert('Login Failed', result.message || 'Invalid credentials');
//       }
//     } catch (error) {
//       console.error('Login error:', error.message);
//       Alert.alert('Error', 'Something went wrong. Please check your network and try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Login</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Username"
//         placeholderTextColor="#888"
//         value={username}
//         onChangeText={setUsername}
//       />
//       <View style={styles.passwordContainer}>
//         <TextInput
//           style={styles.passwordInput}
//           placeholder="Password"
//           placeholderTextColor="#888"
//           secureTextEntry={!showPassword}
//           value={password}
//           onChangeText={setPassword}
//         />
//         <TouchableOpacity
//           style={styles.eyeIcon}
//           onPress={() => setShowPassword(!showPassword)}
//         >
//           <Icon name={showPassword ? 'eye' : 'eye-slash'} size={20} color="#888" />
//         </TouchableOpacity>
//       </View>
//       <TouchableOpacity
//         style={styles.button}
//         onPress={handleLogin}
//         disabled={loading}
//       >
//         {loading ? (
//           <ActivityIndicator size="small" color="#fff" />
//         ) : (
//           <Text style={styles.buttonText}>Login</Text>
//         )}
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f5f5f5',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#333',
//     marginBottom: 20,
//   },
//   input: {
//     width: '80%',
//     padding: 10,
//     borderRadius: 5,
//     backgroundColor: '#fff',
//     borderWidth: 1,
//     borderColor: '#ddd',
//     marginBottom: 15,
//   },
//   passwordContainer: {
//     width: '80%',
//     position: 'relative',
//   },
//   passwordInput: {
//     paddingRight: 40, // Make space for the eye icon
//     paddingLeft: 10, // Add padding on the left for consistency
//     borderRadius: 5,
//     backgroundColor: '#fff',
//     borderWidth: 1,
//     borderColor: '#ddd',
//   },
//   eyeIcon: {
//     position: 'absolute',
//     right: 10,
//     top: '50%',
//     transform: [{ translateY: -10 }],
//   },
//   button: {
//     width: '80%',
//     padding: 15,
//     borderRadius: 5,
//     backgroundColor: '#007BFF',
//     justifyContent: 'center',
//     alignItems: 'center',
//     flexDirection: 'row', // Align spinner and text horizontally
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });

// export default LoginScreen;

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (username.trim() === '' || password.trim() === '' || username.length > 20 || password.length > 20) {
      Alert.alert('Error', 'Please enter both username and password.');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('http://1.2.3.54:3000/login', {  // Replace with your backend address
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const result = await response.json();

      if (response.ok) {
        Alert.alert('Login Successful', result.message);
        // Navigate to the Admin Routes List screen
        navigation.navigate('AdminRoutesList');
      } else {
        Alert.alert('Login Failed', result.message || 'Invalid credentials');
      }
    } catch (error) {
      console.error('Login error:', error.message);
      Alert.alert('Error', 'Something went wrong. Please check your network and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor="#888"
        value={username}
        onChangeText={setUsername}
      />
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Password"
          placeholderTextColor="#888"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity
          style={styles.eyeIcon}
          onPress={() => setShowPassword(!showPassword)}
        >
          <Icon name={showPassword ? 'eye' : 'eye-slash'} size={20} color="#888" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={handleLogin}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator size="small" color="#fff" />
        ) : (
          <Text style={styles.buttonText}>Login</Text>
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
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 15,
  },
  passwordContainer: {
    width: '80%',
    position: 'relative',
  },
  passwordInput: {
    paddingRight: 40, // Make space for the eye icon
    paddingLeft: 10, // Add padding on the left for consistency
    borderRadius: 5,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  eyeIcon: {
    position: 'absolute',
    right: 10,
    top: '50%',
    transform: [{ translateY: -10 }],
  },
  button: {
    width: '80%',
    padding: 15,
    borderRadius: 5,
    backgroundColor: '#007BFF',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row', // Align spinner and text horizontally
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
