import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Image, Text, TouchableOpacity } from 'react-native';

import sozinho from '../../assets/sozinho.png';
import corretor from '../../assets/corretor.png';

import styles from './styles';

export default function Planning() {

    const navigation = useNavigation();

    function NavigateToLogin() {
        navigation.navigate('Login');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Como você quer planejar?</Text>
            <TouchableOpacity>
                <Image style={styles.image} source={corretor} />
            </TouchableOpacity>

            <Text style={styles.description}>Com um <Text style={styles.boldText}>Insurance Travel</Text> </Text>
            <TouchableOpacity
                onPress={NavigateToLogin}
            >
                <Image style={styles.image} source={sozinho} />
            </TouchableOpacity>


        </View>
    );
}