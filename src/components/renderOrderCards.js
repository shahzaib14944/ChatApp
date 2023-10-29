import React from 'react';
import { View, Text, FlatList } from 'react-native';
import AppStyles from '../config/AppStyles';
import { colors } from '../config/theme';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

const RenderOrders = ({data}) => {

    const functions = {
        _renderOrderCards: ({ item, index }) => {
            return (
                <View style={[AppStyles.shadow, { flex: 1, margin: 10, padding: 10, backgroundColor: colors.white, borderRadius: 5 }]}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={[AppStyles.fontBold, AppStyles.textSizeSmallX, { flex: 1, color: 'black' }]}>Order {item.orderNo}</Text>
                        <Text style={[AppStyles.fontLight, AppStyles.textSizeSmall]}>{item.date}</Text>
                    </View>
                    <Text style={[AppStyles.fontLight, AppStyles.textSizeSmall, { marginTop: 8 }]}>Tracking Number: <Text style={[AppStyles.fontBold, AppStyles.textSizeSmall, { color: 'black' }]}>{item.tracking_no}</Text></Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={[AppStyles.fontLight, AppStyles.textSizeSmall, { flex: 1, marginTop: 5 }]}>Quantity: <Text style={[AppStyles.fontBold, AppStyles.textSizeSmall, { color: 'black' }]}>{item.quantity}</Text></Text>
                        <Text style={[AppStyles.fontLight, AppStyles.textSizeSmall]} >Total Amount: <Text style={[AppStyles.fontBold, AppStyles.textSizeSmall, { color: 'black' }]}>{item.totalAmount}</Text></Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                        <View style={{ flex: 1 }}>
                            <Pressable style={{ alignItems: 'center', justifyContent: 'center', paddingVertical: 5, backgroundColor: colors.secondary, width: 70, marginTop: 20, borderRadius: 30, marginBottom: 10 }}>
                                <Text style={[AppStyles.fontMedium, AppStyles.textSizeSmall, { color: colors.white }]}>Details</Text>
                            </Pressable>
                        </View>
                        <Text style={[AppStyles.fontMedium, AppStyles.textSizeSmall, { color: 'green' }]}>{item.status}</Text>
                    </View>
                </View>
            )
        }
    }

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={data}
                renderItem={functions._renderOrderCards}
                keyExtractor={item => item.orderNo}
                contentContainerStyle={{ paddingHorizontal: 5 }}
            />
        </View>
    )
}

export default RenderOrders;