import 'react-native-gesture-handler';
import React from 'react';
import Navigation from './src/Navigation/navigationStack';
import { store } from './src/redux/store/store';
import { Provider } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';

const App = () => {

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Provider store={store}>
        {/* <PersistGate persistor={persistor}> */}
        <Navigation />
        {/* </PersistGate> */}
      </Provider>
      <Toast />
    </SafeAreaView>
  )
}



export default App;