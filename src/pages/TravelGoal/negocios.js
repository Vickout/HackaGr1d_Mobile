import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from "@expo/vector-icons"

import negocios from '../../assets/negocios.png';

import styles from './styles';

export default function Negocios() {
    const navigation = useNavigation();

    function navigateToEstudos() {
        navigation.navigate('Estudos');
    }

    function navigateToTimeTravel() {
        navigation.navigate('TimeTravel');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Qual o objetivo da viagem?</Text>
            <Image source={negocios} width={20} height={20}  />
        
            <View style={styles.changePage}>
                <TouchableOpacity onPress={() => {}}>
                    <MaterialIcons name="navigate-before" size={30} color="#aaa" />
                </TouchableOpacity>
                <Text style={styles.changePageText}>Negócios</Text>
                <TouchableOpacity onPress={navigateToEstudos}>
                    <MaterialIcons name="navigate-next" size={30} color="#aaa" />
                </TouchableOpacity>
            </View>

            <Text style={styles.paragraph}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Laborum, facilis suscipit? Maiores voluptatum velit fugiat in 
                sapiente fuga! Saepe omnis nemo natus iure quas accusamus 
                repudiandae facilis voluptas, possimus assumenda?
            </Text>

            <TouchableOpacity 
                style={styles.selectedButton}
                onPress={navigateToTimeTravel}
            >
                <Text style={styles.textSelectedButton}>Selecionar</Text>
            </TouchableOpacity>
        </View>
    );
}