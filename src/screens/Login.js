import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import { MAIN, SIGNUP } from '../Navigation/payload.routes';
import { ErrorToast, SuccessToast } from '../components/toast';
import { colors } from '../config/theme';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/actions/userActions';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const dispatch = useDispatch()

  const handleLogin = async () => {
    if(!email || !password) return
    try {
      const {user} = await auth().signInWithEmailAndPassword(email, password);
      if (user) {
        const newUser = {...JSON.parse(JSON.stringify(user)), id: user.uid.substring(0, 6)}
        SuccessToast("Login Successful")
        dispatch(setUser(newUser))
        navigation.reset({
            index: 0,
            routes: [{ name: MAIN }],
          });
      }
    } catch (err) {
        console.log(err)
      ErrorToast("Invalid Credentials.")
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
    >
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={text => setEmail(text)}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={text => setPassword(text)}
      />
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <Text style={styles.signUpText}>
        Don't have an account?{' '}
        <Text
          style={styles.signUpLink}
          onPress={() => navigation.navigate(SIGNUP)}
        >
          Sign up
        </Text>
      </Text>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 32,
    marginBottom: 24,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 20,
    marginBottom: 16,
    padding: 12,
    fontSize: 16,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  loginButton: {
    backgroundColor: colors.primary,
    borderRadius: 20,
    width: '80%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  signUpText: {
    marginTop: 20,
    fontSize: 16,
  },
  signUpLink: {
    color: '#3498db',
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;
