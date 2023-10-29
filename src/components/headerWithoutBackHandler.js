import React from "react";
import { View, StyleSheet, StatusBar, Text } from 'react-native';
import AppStyles from "../config/AppStyles";
import { colors } from "../config/theme";

const BacklessHeader = ({ navigation, iconCart, rightIconPress, title, }) => {
    return (
        <View style={styles.headerStyle}>
            <StatusBar
                hidden={false}
                backgroundColor={colors.primary}
            />
            <Text style={[AppStyles.fontBold, AppStyles.textSizeAverageX, { color: colors.white }]}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headerStyle: { flexDirection: 'row', alignItems: 'center', backgroundColor: colors.primary, paddingVertical: 15, justifyContent: 'center', paddingHorizontal: 20, borderBottomWidth: 0.2, borderBottomColor: colors.gray }
})

export default BacklessHeader;