import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Image, Picker, Text, TouchableOpacity } from 'react-native';

import planeta from '../../assets/planeta.png';
import portugal from '../../assets/portugal.png';

import styles from './styles';

export default function Destination() {
    const [selectedCountry, setSelectedCountry] = useState('Alemanha');
    const [selectedContinent, setSelectedContinent] = useState('Europa');

    const navigation = useNavigation();

    function NavigateToNegocios() {
        navigation.navigate('Goal', { screen: 'Negocios' });
    }

    function World() {
        return (
            <Image style={styles.image} source={planeta} />
        );
    }

    function Portugal() {
        return (
            <Image style={styles.image} source={portugal} />
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Vamos definir um destino!</Text>

            {console.log(selectedCountry)}
            {selectedCountry === "Portugal" ? Portugal() : World()}

            <View style={styles.pickerContainer}>
                <Picker
                    selectedValue={selectedContinent}
                    style={styles.picker}
                    onValueChange={(itemValue, itemIndex) => setSelectedContinent(itemValue)}
                >
                    <Picker.Item label="Ásia" value="Áfica" />
                    <Picker.Item label="Ásia" value="Ásia" />
                    <Picker.Item label="América do Norte" value="América do Norte" />
                    <Picker.Item label="América Central" value="América Central" />
                    <Picker.Item label="América do Sul" value="América do Sul" />
                    <Picker.Item label="Europa" value="Europa" />
                    <Picker.Item label="Oceania" value="Oceania" />

                </Picker>
            </View>
            
            <View style={styles.pickerContainer}>
                <Picker
                    selectedValue={selectedCountry}
                    style={styles.picker}
                    onValueChange={(itemValue, itemIndex) => setSelectedCountry(itemValue)}
                >
                    <Picker.Item label="Alemanha" value="Alemanha" />
                    <Picker.Item label="Bélgica" value="Bélgica" />
                    <Picker.Item label="França" value="França" />
                    <Picker.Item label="Itália" value="Itália" />
                    <Picker.Item label="Reino Unido" value="Reino Unido" />
                    <Picker.Item label="Portugal" value="Portugal" />

                </Picker>
            </View>

            <TouchableOpacity 
                style={styles.nextButton}
                onPress={NavigateToNegocios}
            >
                <Text style={styles.nextText}>Próximo</Text>
            </TouchableOpacity>

        </View>
    );
}