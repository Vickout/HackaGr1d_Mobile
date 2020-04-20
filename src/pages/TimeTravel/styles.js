import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 40,
        backgroundColor: "#e4e4e4",
        alignItems: "center",
    },

    title: {
        paddingBottom: 20,
        fontSize: 20,
        fontWeight: "bold",
    },

    description: {
        marginTop: 10,
        fontSize: 20
    },

    datePicker: {
        marginVertical: 20,
        width: 300
    },

    FinishButton: {
        marginTop: 20
    },

    textFinishButton: {
        fontSize: 20,
    }
})