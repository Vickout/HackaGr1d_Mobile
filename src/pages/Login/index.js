import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, Image, Text, TextInput, TouchableOpacity } from 'react-native';

import logoImg from '../../assets/logo.png';

import styles from './styles';

export default function Login() {
    const navigation = useNavigation();

    function navigateToSignIn() {
        navigation.navigate('SignIn');
    }

    function navigateToWelcome() {
        navigation.navigate('Welcome');
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} height={20} width={20} />
                <Text style={styles.title}>Entrar</Text>
                <Text style={styles.description}>Faça login para continuar</Text>
            </View>

            <TextInput 
                style={styles.inputStyle} 
                placeholderTextColor="#aaa"
                placeholder="nome" />
            <TextInput 
                style={styles.inputStyle}

                placeholderTextColor="#aaa"
                placeholder="senha" />
            
            <View style={styles.buttonsContainer}>
                <TouchableOpacity 
                    style={styles.submitButton}
                    onPress={navigateToWelcome}
                >
                    <Text style={styles.buttonText}>ENTRAR</Text>
                </TouchableOpacity>
                
                <View style={styles.anotherLogin}>
                    <TouchableOpacity style={styles.facebookLogin}>
                        <FontAwesome name="facebook-f" size={20} color='white' />
                        <Text style={styles.socialMediaText}>         Login with Facebook     </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.gmailLogin}>
                        <FontAwesome name="google-plus" size={20} color='white' />
                        <Text style={styles.socialMediaText}>    Sign in with Google +      </Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity 
                    style={styles.signIn}
                    onPress={navigateToSignIn}
                >
                        <Text style={styles.signInText}>Não é cadastrado? <Text style={styles.boldText}>Clique aqui</Text></Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}