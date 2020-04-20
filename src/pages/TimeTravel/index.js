import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import DatePicker from 'react-native-datepicker';

import data from '../../assets/data.png';

import styles from './styles';

export default function Negocios() {
    const [departureDate, setDepartureDate] = useState('');
    const [returnDate, setReturnDate] = useState('');

    const navigation = useNavigation();

    function NavigateToPlanning() {
        navigation.navigate('Planning');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Quando vamos partir?</Text>
            <Image source={data} width={20} height={20}  />

            <DatePicker 
                format="DD/MM/YYYY"
                style={styles.datePicker}
                date={departureDate}
                onDateChange={ (value) => setDepartureDate(value) }
            />
            
            <View>
                <Text style={styles.description}>Quando voltamos?</Text>

                <DatePicker 
                    format="DD/MM/YYYY"
                    style={styles.datePicker}
                    date={returnDate}
                    onDateChange={ (value) => setReturnDate(value) }
                />
            </View>

            <TouchableOpacity 
                style={styles.FinishButton}
                onPress={NavigateToPlanning}
            >
                <Text style={styles.textFinishButton}>Finalizar</Text>
            </TouchableOpacity>
        </View>
    );
}