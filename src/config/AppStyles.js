import {StyleSheet, Platform} from 'react-native';
import {RFValuePercentage, RFValue} from 'react-native-responsive-fontsize';
import { selectedFont, sfText, sfDisplay, fonts } from './theme';

const AppStyles = StyleSheet.create({
  appRedColor: {
    color: '#FF0000',
  },
  container: {
    flex: 1,
    backgroundColor: 'white'
  },

  zIndex: {
    zIndex: 1,
  },

  paddingHorizontal20: {
    paddingHorizontal: 20,
  },
  paddingHorizontal2: {
    paddingHorizontal: 2,
  },
  bgColor: {
    backgroundColor: '#fff',
  },
  blackColor: {
    backgroundColor: '#000',
  },
  horizontalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  horizontalCenterContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  topBarHeight: {
    // height: 60,
  },

  fitToParent: {
    height: '100%',
    width: '100%',
  },
  bottomContainer: {
    backgroundColor: 'transparent',
    flexDirection: 'column-reverse',
  },
  grayFont: {
    color: '#666666',
  },
  grayLight: {
    color: '#a3a3a3',
  },
  fitToDevice: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },

  crossIcon: {
    position: 'absolute',
    top: 12,
    right: 12,
    opacity: 0.8,
  },
  leftCrossIcon: {
    height: 20,
    width: 20,
    opacity: 0.5,
    marginLeft: 3,
    marginRight: 3,
  },
  backgroundImage: {
    resizeMode: 'cover',
  },
  centerText: {
    textAlign: 'center',
  },
  leftText: {
    textAlign: 'left',
  },
  centerElement: {
    justifyContent: 'center',
  },
  shadow: {
    overflow: Platform.OS == 'android' ? 'hidden' : 'visible',
    // padding: 5,
    shadowColor: Platform.OS == 'android' ? '#000' : '#ccc',
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 2,
    shadowOffset: {
      height: 1,
      weight: 1,
    },
  },

  buttonCenterText: {
    flexDirection: 'row',
    justifyContent: 'center',
  },

  profileImageSmall: {
    height: 34,
    width: 34,
    borderRadius: 17,
    resizeMode: 'cover',
    backgroundColor: '#e5e5e5',
  },
  profileImageMedium: {
    height: 50,
    width: 50,
    borderRadius: 25,
    resizeMode: 'cover',
    backgroundColor: '#e5e5e5',
  },

  profileImageMediumLeaderBoard: {
    height: 50,
    width: 50,
    //  borderRadius: 25,
    resizeMode: 'center',
    tintColor: '#000',
    //backgroundColor: '#e5e5e5',
  },
  profileImageMedium2: {
    height: 60,
    width: 60,
    borderRadius: 30,
    resizeMode: 'cover',
    backgroundColor: '#e5e5e5',
  },

  profileImageLarge: {
    height: 70,
    width: 70,
    borderRadius: 35,
    resizeMode: 'cover',
  },
  profileImageExtraLarge: {
    height: 90,
    width: 90,
    borderRadius: 45,
    resizeMode: 'cover',
  },
  squareImage: {
    height: 60,
    width: 56,
    backgroundColor: 'black',
    // borderRadius: 50,
    resizeMode: 'cover',
  },
  profileIcon: {
    height: 45,
    width: 45,
    justifyContent: 'center',
    alignSelf: 'center',
    resizeMode: 'contain',
  },

  profileIconLeaderBoard: {
    height: 40,
    width: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignSelf: 'center',
    resizeMode: 'cover',
  },
  profileImage1: {
    height: 30,
    width: 30,
    justifyContent: 'center',
    alignSelf: 'center',
    padding: 10,
    resizeMode: 'center',
  },

  profileImage2: {
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignSelf: 'center',
    padding: 10,

    resizeMode: 'center',
  },

  profileIcon2: {
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignSelf: 'center',
    padding: 10,
    resizeMode: 'center',
  },

  margin: {
    margin: 10,
  },
  buttonStyle: {
    shadowOffset: {height: 0, width: 0},
    shadowOpacity: 0,
    elevation: 0,
    borderRadius: 25,
  },
  textColorWhite: {
    color: 'white',
  },
  textColorPrimary: {
    // color: Colors.primary,
  },
  textColorBlack: {
    color: '#000',
  },

  textColorGray: {
    color: '#A9A9A9',
  },

  transparent: {
    color: 'transparent',
  },
  pb5: {
    paddingBottom: 5,
  },
  pb10: {
    paddingBottom: 10,
  },
  pt5: {
    paddingTop: 5,
  },
  pt10: {
    paddingTop: 10,
  },
  pl5: {
    paddingLeft: 5,
  },
  pr5: {
    paddingRight: 5,
  },
  pr10: {
    paddingRight: 10,
  },
  pb10: {
    paddingBottom: 10,
  },
  pl10: {
    paddingLeft: 10,
  },
  pr10: {
    paddingRight: 10,
  },
  pt20: {
    paddingTop: 10,
  },
  pt15: {
    paddingTop: 15,
  },
  pr20: {
    paddingRight: 20,
  },
  pl20: {
    paddingLeft: 20,
  },
  pb20: {
    paddingBottom: 20,
  },
  padding5: {
    padding: 5,
  },
  padding10: {
    padding: 10,
  },
  padding15: {
    padding: 15,
  },
  padding20: {
    padding: 15,
  },
  paddingHorizontal5: {
    paddingHorizontal: 5,
  },
  paddingHorizontal10: {
    paddingHorizontal: 10,
  },
  paddingHorizontal15: {
    paddingHorizontal: 15,
  },
  paddingHorizontal20: {
    paddingHorizontal: 20,
  },
  paddingVertical5: {
    paddingVertical: 5,
  },
  paddingVertical10: {
    paddingVertical: 10,
  },
  paddingVertical15: {
    paddingVertical: 15,
  },
  paddingVertical20: {
    paddingVertical: 20,
  },
  marginHorizontal5: {
    marginHorizontal: 5,
  },
  marginHorizontal10: {
    marginHorizontal: 10,
  },
  marginHorizontal15: {
    marginHorizontal: 15,
  },
  marginHorizontal20: {
    marginHorizontal: 20,
  },
  marginVertical5: {
    marginVertical: 5,
  },
  marginVertical10: {
    marginVertical: 10,
  },
  marginVertical15: {
    marginVertical: 15,
  },
  marginVertical20: {
    marginVertical: 20,
  },
  row: {
    flexDirection: 'row',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  stretch: {
    resizeMode: 'stretch',
  },
  iconSize: {
    width: 20,
    height: 20,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    // borderRadius: 10,
    paddingHorizontal: 20,
    // flex:1,
    // alignItems: "center",
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  notificationShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  ml10: {
    marginLeft: 10,
  },
  ml20: {
    marginLeft: 20,
  },
  mr10: {
    marginRight: 10,
  },
  mr20: {
    marginRight: 20,
  },
  mt10: {
    marginTop: 10,
  },
  mt20: {
    marginTop: 20,
  },
  m5: {
    margin: 5,
  },
  m10: {
    margin: 10,
  },
  m15: {
    margin: 15,
  },
  m20: {
    margin: 20,
  },
  mtt10: {
    marginTop: 10,
  },
  mtt15: {
    marginTop: 15,
  },
  mtt20: {
    marginTop: 20,
  },
  mv10: {
    marginVertical: 10,
  },
  mv20: {
    marginVertical: 20,
  },
  textSizeLarge: {
    fontSize: RFValue(18),
  },
  textSizeMidLarge: {
    fontSize: RFValue(24),
  },
  textSizeIcon: {
    fontSize: RFValue(26),
  },
  textSizeNormal: {
    fontSize: RFValue(17),
  },

  activeView: {
    justifyContent: 'center',
    alignContent: 'center',
    borderBottomColor: 'red',
    borderBottomWidth: 3,
    paddingHorizontal: 20,
    marginHorizontal: 10,
  },
  inActiveView: {
    alignContent: 'center',
    paddingHorizontal: 20,
    borderBottomWidth: 3,
    marginHorizontal: 10,
    borderBottomColor: 'transparent',
  },

  // active: {
  //   fontSize: 14,
  //   padding: 10,
  //   fontFamily: 'Roboto-Medium',
  //   color: 'red',
  // },
  // inActive: {
  //   color: '#000',
  //   fontSize: 14,
  //   padding: 10,
  //   fontFamily: 'Roboto-Medium',
  // },

  activeImageBorder: {
    borderColor: '#ae4c61',
    borderWidth: 3,
    alignItems: 'center',
  },
  inActiveImageBorder: {
    borderColor: 'transparent',
    borderWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textSizeAverage: {
    fontSize: RFValue(14),
  },
  textSizeMedium: {
    fontSize: RFValue(18),
  },
  textSizeBig: {
    fontSize: RFValue(20),
  },
  textSizeAverageX: {
    fontSize: RFValue(16),
  },
  textSizeSmall: {
    fontSize: RFValue(11),
  },
  textSizeTiny: {
    fontSize: RFValue(9),
  },
  textSizeSmallX: {
    fontSize: RFValue(12),
  },
  fontLight: {
    fontFamily: fonts[selectedFont].light,
  },
  fontMedium: {
    fontFamily: fonts[selectedFont].medium,
  },
  fontRegular: {
    fontFamily: fonts[selectedFont].regular,
  },
  fontBold: {
    fontFamily: fonts[selectedFont].bold,
  },
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#000000AA',
  },
  activityIndicatorWrapper: {
    backgroundColor: '#eeeeee',
    width: '86%',
    borderRadius: 4,
    padding: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});
export default AppStyles;
