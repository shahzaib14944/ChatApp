
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../config/theme';
import { IconSe, IconSet } from './Icons';

const Header = ({ screenName }) => {
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
      <IconSet materialCommunityIcons name='arrow-left-thin' color={colors.secondary} size={25} />
      </TouchableOpacity>
      <Text style={styles.screenName}>{screenName}</Text>
      <View style={{ flex: 1 }}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.primary,
    padding: 5,
  },
  backButton: {
    padding: 10,
    flex: 1,
  },
  screenName: {
    fontSize: 18,
    color: 'white',
    flex: 1,
  },
});

export default Header;
