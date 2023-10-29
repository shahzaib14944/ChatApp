import React from 'react';
import { View, Text, StyleSheet, TextInput, Pressable } from 'react-native';
import AppStyles from '../config/AppStyles'
import Icon from 'react-native-vector-icons/Ionicons'
import { language, strings } from '../config/strings';
import { colors } from '../config/theme';

const {STR_SEARCH_PLACEHOLDER} =  strings[language]

const SearchBar = ({ isPressable, onPress, onBackPress, isHome }) => {
    return (
        <View style={{ backgroundColor: '#232f3f', borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}>
            {isPressable ? (
                <Pressable
                    onPress={onPress}
                    style={styles.searchView}>
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                        <Icon name="search-outline" size={25} color="grey" style={{ flex: 0.2 }} />
                        <View>
                            <Text style={[{
                                color: 'black',
                                opacity: 0.5,
                            }, AppStyles.fontMedium]}>{STR_SEARCH_PLACEHOLDER}</Text>
                        </View>
                    </View>
                </Pressable>
            ) : (
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    {isHome ?
                        <Icon name="chevron-back-outline" size={25} color={colors.white} style={{ paddingLeft: 20 }} onPress={onBackPress} />
                        :
                        <></>
                    }
                    <View
                        style={styles.searchView}>

                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                            <Icon name="search-outline" size={25} color="grey" style={{ flex: 0.1 }} />
                            <TextInput
                                returnKeyType="search"
                                autoFocus={isHome ? true : false}
                                placeholderTextColor="#aaa"
                                placeholder={STR_SEARCH_PLACEHOLDER}
                                style={[{
                                    color: 'black',
                                    flex: 0.9,
                                }, AppStyles.fontMedium]}
                            />
                        </View>
                        <Icon name="close" size={25} color="grey" />
                    </View>
                </View>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    searchView: {
        height: 50,
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        margin: 20,
        flex: 1,
        alignItems: 'center'
    }
})

export default SearchBar;