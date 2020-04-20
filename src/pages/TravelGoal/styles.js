import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 10,
        backgroundColor: "#e4e4e4",
        alignItems: "center",
    },

    title: {
        paddingBottom: 20,
        fontSize: 20,
        fontWeight: "bold",
    },

    changePage: {
        marginTop: 20,
        flexDirection: "row",
        alignItems: "center"       
    },

    changePageText: {
        fontSize: 25,
        fontWeight: "bold",
        paddingHorizontal: 80
    },

    paragraph: {
        marginTop:20,
        paddingHorizontal: 10,
        textAlign: "center"
    },

    selectedButton: {
        marginTop: 35
    },

    textSelectedButton: {
        fontSize: 20,
    }
})