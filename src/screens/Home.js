import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, BackHandler, ToastAndroid, TextInput, Image, Dimensions, Pressable } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import AppStyles from '../config/AppStyles'
import CustomHeader from '../components/header'
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { ProductCard, RoundCards } from '../components/cards';
import { productData, categories } from '../config/tempData';
import { width } from '../helpers/screenDimension';
import { PRODUCT_DETAILS, SEARCH, SEARCH_HOME, CATEGORIES, CATEGORIES_HOME } from '../Navigation/payload.routes';
import SearchBar from '../components/searchBar';

let backHandler;

const Home = ({ navigation }) => {

    // VARIABLE DEFINITION
    let exit = false
    const isFocused = useIsFocused();

    useEffect(() => {
        if (isFocused) {
            backHandler = functions.backHandler()
        } else {
            backHandler.remove();
        }
    }, [isFocused])

    const functions = {
        backHandler: () => {
            return BackHandler.addEventListener('hardwareBackPress', function () {
                if (!exit) {
                    exit = true
                    ToastAndroid.show("Press again to exit.", ToastAndroid.SHORT);
                    setTimeout(() => {
                        exit = false
                    }, 3000)
                    return true
                } else {
                    BackHandler.exitApp()
                }
            });
        },
        renderProducts: ({ item, index }) => {
            return (
                <View style={{ flex: 1, overflow: 'hidden' }}>
                    <ProductCard
                        title={item.title}
                        imageUrl={item.image}
                        price={item.price}
                        ratings={item.ratings}
                        discount={item.discounted_Price}
                        percent={item.percent}
                        onPress={() => navigation.navigate(PRODUCT_DETAILS, {
                            productDetail: item
                        })}
                    />
                </View>
            )
        },
        renderCategories: ({ item, index }) => {
            return (
                <RoundCards
                    onPress={() => { }}
                    // starSize={12}
                    category={item.title}
                    image={item.image}
                    // productTitle={item.productTitle}
                    containerStyles={{ paddingVertical: 10 }}
                    imageStyle={{ width: 70, height: 70 }}
                />
            )
        }
    }
    return (
        <View style={{ flex: 1 }}>
            <CustomHeader navigation={navigation} iconCart={true} />
            <ScrollView>
                <SearchBar isPressable={true} onPress={() => navigation.navigate(SEARCH_HOME, { isHome: true })} />
                <View style={{ margin: 20 }}>
                    <View>
                        <Pressable onPress={() => navigation.navigate(CATEGORIES_HOME)} style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={[AppStyles.fontBold, AppStyles.textSizeAverageX, { flex: 1 }]}>Categories</Text>
                            <Text style={[AppStyles.fontBold, AppStyles.textSizeTiny, { textDecorationLine: 'underline' }]}>View All</Text>
                        </Pressable>
                        <FlatList
                            data={categories}
                            renderItem={functions.renderCategories}
                            keyExtractor={item => item.id}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <Text style={[AppStyles.fontBold, AppStyles.textSizeAverageX]}>Best Collections</Text>
                        <FlatList
                            data={productData}
                            renderItem={functions.renderProducts}
                            keyExtractor={item => item.id}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={{ paddingHorizontal: 5, paddingVertical: 10 }}
                        />
                    </View>
                    <View>
                    </View>
                    <View style={{ alignItems: 'center', marginTop: 10 }}>
                        <Image resizeMode='contain' style={{ width: width / 1.1, height: 180, borderRadius: 10 }} source={{ uri: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/grocery-sale-retail-or-e-commerce-banner-ad-design-template-67720435bb809be27f46dfb1dd44c6fa_screen.jpg?ts=1606113265' }} />
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <Text style={[AppStyles.fontBold, AppStyles.textSizeAverageX]}>Trending</Text>
                        <FlatList
                            data={productData}
                            renderItem={functions.renderProducts}
                            keyExtractor={item => item.id}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={{ paddingHorizontal: 10, paddingVertical: 10 }}
                        />
                    </View>
                </View>
            </ScrollView>

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
    }
})

export default Home;