import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { CATEGORIES, HOME, PROFILE, SEARCH, SEARCH_HOME, WISHLIST, ORDERS } from "./payload.routes";
import CustomDrawerContent from "../components/customDrawer";
import { colors } from "../config/theme";
import Icons from 'react-native-vector-icons/AntDesign';
import Home from "../screens/Home";
import MessageScreen from "../screens/MessagesScreen";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen
        name={HOME}
        component={MessageScreen}
        options={{
            headerShown: false,
            drawerActiveBackgroundColor: 'rgba(247, 205, 124, 0.3)', drawerActiveTintColor: colors.primary, drawerIcon: () => <Icons
        name="home"
        size={25}
        color={colors.primary}
        />
            }}
        />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;