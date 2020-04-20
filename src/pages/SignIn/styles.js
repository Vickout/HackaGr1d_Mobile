import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
        backgroundColor: "#e4e4e4"
    },

    header: {
        alignItems: 'center',
        paddingTop: 20,
    },

    title: {
        fontSize: 30,
        fontWeight: "bold",
    },

    description: {
        fontSize: 16
    },

    inputStyle: {
        marginTop: 30,
        borderBottomWidth: 1,
        borderColor: '#aaa',
        alignItems: "center"
    },

    buttonsContainer: {
        alignItems: "center"
    },

    submitButton: {
        marginVertical: 30,
        backgroundColor: '#00568b',
        height: 40,
        width: 180,
        justifyContent: "center",
        alignItems: "center",
    },

    buttonText: {
        color: 'white'
    },

    facebookLogin: {
        backgroundColor: "#3c67c3",
        height: 35,
        width: 180,
        paddingLeft: 10,
        marginBottom: 15,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row"
    },

    gmailLogin: {
        backgroundColor: "#cf4332",
        height: 35,
        width: 180,
        paddingLeft: 10,
        marginBottom: 15,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row"

    },

    socialMediaText: {
        color: 'white',
        fontSize: 13,
    },

    signIn: {
        marginVertical: 20
    },

    boldText: {
        color: 'black',
        fontWeight: "bold",
    }


});