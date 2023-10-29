import AsyncStorage from '@react-native-async-storage/async-storage';
import { BACKEND_URL, instance } from '../Apis/apis';

export const _saveUser = async userData => {
    try {
        const data = JSON.stringify(userData);
        await AsyncStorage.setItem('userData', data);
    } catch (e) {
        console.log(e, '_saveUser');
    }
};
export const _getUser = async () => {
    try {
        const value = await AsyncStorage.getItem('userData');
        if (value !== null) {
            return JSON.parse(value);
        }
        return false;
    } catch (e) {
        return false;
    }
};
export const _removeUser = async () => {
    await AsyncStorage.removeItem('userData');
    try {
        await AsyncStorage.getItem('userData');
    } catch (e) {
        console.log(e, '_removeUser');
    }
};