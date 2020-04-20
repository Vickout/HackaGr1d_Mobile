import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 40,
        backgroundColor: "#e4e4e4",
        alignItems: "center"
    },

    title: {
        paddingBottom: 20,
        fontSize: 20,
        fontWeight: "bold",
    },

    image: {
        marginBottom: 30
    },

    pickerContainer: {
        borderBottomWidth: 1,
        marginBottom: 40
    },

    picker: {
        height: 50,
        width: 300,
    },

    nextButton: {
        position: "absolute",
        bottom: 40,
    },

    nextText: {
        fontSize: 20
    }
})