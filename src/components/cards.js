import React from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import AppStyles from '../config/AppStyles';
import { colors } from '../config/theme';
import Icons from 'react-native-vector-icons/AntDesign'
import { width } from '../helpers/screenDimension';


export const RoundCards = ({ category, image, containerStyles, onPress, imageStyle }) => {
  let tint = image ? null : 'black';
  return (
    <View style={[styles.containerRound, containerStyles]}>
      <Pressable onPress={onPress} style={{ alignItems: 'center', maxWidth: 80 }}>
        <View style={[styles.round_image, AppStyles.shadow, imageStyle]}>
          {image == null
            ?
            null
            // <Text style={{fontSize:9,textAlign:'center',fontWeight:'bold',color:'grey'}}  numberOfLines={3}>{category}</Text>
            :
            <Image
              style={{
                width: '100%',
                height: '100%',
                borderRadius: 50,
                tintColor: tint,
                backgroundColor: 'lightgrey',
              }}
              resizeMode="contain"
              source={{ uri: image }}
            />
          }
        </View>
        <Text numberOfLines={3} style={[styles.listTitle, AppStyles.fontBold, AppStyles.textSizeSmall, { paddingTop: 5, textAlign: 'center' }]}>{category}</Text>
      </Pressable>
    </View>
  );
};

export const ProductCard = ({ title, price, imageUrl, ratings, discount, onPress, isFavorite, percent }) => {
  return (
    <Pressable onPress={onPress} style={styles.productContainer}>
      {isFavorite ? (
        <View style={styles.favorites}>
          <Icons
            name="heart"
            size={18}
            color={colors.primary}

          />
        </View>
      ) : discount?.length > 0 ? (
        <Text style={styles.discountLabel}>{`${percent}% OFF`}</Text>
      ) :
        <></>}
      <Image style={styles.image} source={{ uri: imageUrl }} resizeMode="contain" />
      <View style={{ paddingHorizontal: 10, flex: 1, }}>
        <Text style={[AppStyles.fontMedium, AppStyles.textSizeSmall, { paddingTop: 10, paddingBottom: 5 }]}>{title}</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap' }}>
          {discount?.length > 1 ? (
            <>
              <Text style={[AppStyles.fontMedium, AppStyles.textSizeAverage, { color: 'orange' }]}><Text style={[AppStyles.fontMedium, AppStyles.textSizeSmall, { color: 'orange' }]}>Rs. </Text>{discount}</Text>
              <Text style={[AppStyles.fontMedium, AppStyles.textSizeTiny, { textDecorationLine: 'line-through', paddingLeft: 5, color: colors.gray }]}>Rs. {price}</Text>
            </>
          ) :
            <><Text style={[AppStyles.fontMedium, AppStyles.textSizeAverage, { color: 'orange' }]}><Text style={[AppStyles.fontMedium, AppStyles.textSizeSmall, { color: 'orange' }]}>Rs. </Text>{price}</Text></>}

        </View>
        <View style={{ paddingVertical: 10, flexDirection: 'row', alignItems: 'center' }}>
          <View>
            <Rating
              count={5}
              defaultRating={5}
              size={5}
              imageSize={10}
            />
          </View>
          <Text style={[AppStyles.fontLight, AppStyles.textSizeTiny, { paddingHorizontal: 5 }]}>{`(${ratings})`}</Text>
        </View>
      </View>

    </Pressable>
  )
}

const styles = StyleSheet.create({
  productContainer: {
    backgroundColor: 'white', width: width / 2.5, margin: 5, borderRadius: 5, shadowOpacity: 0.25,
    shadowRadius: 4.84,
    elevation: 2,
    minHeight: width / 1.5
  },
  containerRound: {
    flex: 1,
    alignItems: 'flex-start',
    // height:width/3,
    marginHorizontal: 15,
    overflow: 'hidden',
    // backgroundColor:'grey'
  },
  round_image: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 80,
    width: 80,
    borderRadius: 50,
    backgroundColor: colors.white,
    shadowColor: colors.primary,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    alignItems: 'center', justifyContent: 'center', backgroundColor: 'white'
  },
  favorites: { position: 'absolute', zIndex: 1, alignSelf: 'flex-end', padding: 5 },
  image: { width: '100%', height: 160, backgroundColor: 'white', borderRadius: 5 },
  discountLabel: { position: 'absolute', zIndex: 1, alignSelf: 'flex-end', paddingVertical: 2, backgroundColor: colors.secondary, borderTopLeftRadius: 5, borderTopRightRadius: 5, paddingHorizontal: 5, color: colors.white, fontSize: 9, ...AppStyles.fontBold },
})