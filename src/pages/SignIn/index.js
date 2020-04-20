import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import styles from './styles';

export default function SignIn() {
    const navigation = useNavigation();

    function navigateToLogin() {
        navigation.navigate('Login');
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Cadastre-se</Text>
                <Text style={styles.description}>Crie sua conta para continuar</Text>
            </View>

            <TextInput 
                style={styles.inputStyle} 
                placeholderTextColor="#aaa"
                placeholder="nome completo" 
            />
            <TextInput 
                style={styles.inputStyle}
                placeholderTextColor="#aaa"
                placeholder="telefone"
                keyboardType="phone-pad" 
            />
            <TextInput 
                style={styles.inputStyle} 
                placeholderTextColor="#aaa"
                placeholder="e-mail"
                keyboardType="email-address" 
            />
            <TextInput 
                style={styles.inputStyle}
                placeholderTextColor="#aaa"
                placeholder="senha" 
            />
            
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.submitButton}>
                    <Text style={styles.buttonText}>CADASTRAR</Text>
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
                    onPress={navigateToLogin}
                >
                        <Text style={styles.signInText}>Já é cadastrado? <Text style={styles.boldText}>Faça Login</Text></Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}