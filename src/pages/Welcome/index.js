import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Image, Text, TouchableOpacity } from 'react-native';

import checkIn from '../../assets/check_in.png';
import welcome from '../../assets/welcome.png';
import styles from '../Welcome/styles';

export default function Welcome() {
    const navigation = useNavigation();

    function navigateToDestination() {
        navigation.navigate('Destination');
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={checkIn} height={20} width={20} />
            </View>
            
            <Text style={styles.welcome}>seja bem-vindo,</Text>
            <TouchableOpacity
                onPress={navigateToDestination}
            >
                <Text style={styles.userName}>Victor</Text>
            </TouchableOpacity>

            <View style={styles.footer}>
                <Image source={welcome} height={20} width={20} />
            </View>
        </View>
    );
}