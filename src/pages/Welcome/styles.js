import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight,
        backgroundColor: "#e4e4e4"
    },

    welcome: {
        marginTop: 90,
        fontSize: 20
    },

    userName: {
        fontSize: 50,
        fontWeight: "bold"

    },

    footer: {
        position: "absolute",
        bottom: 0,  
    }
})