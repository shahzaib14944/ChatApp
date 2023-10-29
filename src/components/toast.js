import Toast from 'react-native-toast-message';
import { store } from '../redux/store/store';

export const SuccessToast = (text, duration, onPress, autoHide) => {
  const heading = "Success"

  Toast.show({
    type: 'success',
    text1: heading,
    text2: text || 'Task finished successfully.',
    visibilityTime: duration || 2000,
    onPress: onPress,
    position: 'bottom',
    autoHide: true || autoHide,
  });
}

export const ErrorToast = (text, duration, onPress, autoHide) => {
  Toast.show({
    type: 'error',
    text1: 'Error!',
    text2: text || 'Something went wrong, please try again.',
    visibilityTime: duration || 2000,
    onPress: onPress,
    position: 'bottom',
    autoHide: true || autoHide
  });
}