import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { View, Image, Text, AppState, Pressable, StyleSheet } from 'react-native';
import AppStyles from '../config/AppStyles';
import { colors } from '../config/theme';
import auth from '@react-native-firebase/auth';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/actions/userActions';
import { LOGIN } from '../Navigation/payload.routes';

const CustomDrawerContent = (props) => {
  const dispatch = useDispatch()
  function signOut() {
    auth().signOut();
    dispatch(logout())
    props.navigation.reset({
      index: 0,
      routes: [{ name: LOGIN }],
    });
  }
  return (
    <View style={{ flexGrow: 1, backgroundColor: '#efefef' }}>
      <DrawerContentScrollView contentContainerStyle={{
        paddingTop: 0
      }} style={{ backgroundColor: '#efefef' }} {...props}>
        <View style={styles.header}>
          <Image source={{ uri: 'https://media.istockphoto.com/photos/millennial-male-team-leader-organize-virtual-workshop-with-employees-picture-id1300972574?b=1&k=20&m=1300972574&s=170667a&w=0&h=2nBGC7tr0kWIU8zRQ3dMg-C5JLo9H2sNUuDjQ5mlYfo=' }} style={{ width: 90, height: 90, borderRadius: 50 }} />
          {/* <Text style={[AppStyles.fontBold, AppStyles.textSizeAverageX, { marginTop: 10, color: colors.white }]}>Hello, </Text> */}
          <Text style={[AppStyles.fontBold, AppStyles.textSizeMedium, { marginTop: 10, color: colors.white }]}>Shahzaib Khan</Text>
          <Text style={[AppStyles.fontMedium, AppStyles.textSizeTiny, {color: colors.white, opacity: 0.6, }]}>shahzaib1998@hotmail.com</Text>
        </View>
        <View style={{ paddingTop: 20, flex: 1 }}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={styles.footer}>
        <Pressable onPress={() => signOut()} style={{ paddingVertical: 10, paddingHorizontal: 40, backgroundColor: '#dbdbdb', borderRadius: 5, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
          <Text style={[AppStyles.fontBold, AppStyles.textSizeSmallX]}>Log Out</Text>
        </Pressable>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  header: { paddingHorizontal: 20, paddingVertical: 30, borderBottomWidth: 0.2, borderBottomColor: colors.gray, backgroundColor: colors.primary },
  footer: { alignItems: 'flex-start', margin: 20, borderTopWidth: 0.2, paddingTop: 20, borderTopColor: colors.gray }
})

export default CustomDrawerContent;