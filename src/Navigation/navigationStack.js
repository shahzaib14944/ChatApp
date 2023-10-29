import React, {useLayoutEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LOGIN, MAIN, PRODUCT_DETAILS, SHIPPING, CHECKOUT, SEARCH_HOME, CATEGORIES, CART, CATEGORIES_HOME, CHAT_SCREEN, SIGNUP, GPTCHAT_SCREEN } from './payload.routes';
import Login from '../screens/Login';
import RNBootSplash from 'react-native-bootsplash';
import DrawerNavigator from './drawerTabStack';
import ChatScreen from '../screens/ChatScreen';
import SignupScreen from '../screens/Signup';
import auth from '@react-native-firebase/auth';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/actions/userActions';
import GPTChatScreen from '../screens/GPTChatScreen';

const Stack = createNativeStackNavigator();
function Navigation() {
  const dispatch = useDispatch()
  const user = auth().currentUser;
  const initialRouteName = user ? MAIN : LOGIN

  useLayoutEffect(() => {
    if(user) {
      const newUser = {...JSON.parse(JSON.stringify(user)), id: user?.uid?.substring(0, 6)}
      dispatch(setUser(newUser))
    }
  }, [])

  return (
    <NavigationContainer onReady={() => RNBootSplash.hide({ fade: true })}>
      <Stack.Navigator initialRouteName={initialRouteName}>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name={LOGIN}
          component={Login}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name={SIGNUP}
          component={SignupScreen}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name={MAIN}
          component={DrawerNavigator}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name={CHAT_SCREEN}
          component={ChatScreen}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name={GPTCHAT_SCREEN}
          component={GPTChatScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;