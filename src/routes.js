import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Constants from 'expo-constants';

const Tab = createMaterialTopTabNavigator();
const AppStack = createStackNavigator();

import TutorialOne from './pages/Tutorial/tutorial_1.js';
import TutorialTwo from './pages/Tutorial/tutorial_2.js';
import TutorialThree from './pages/Tutorial/tutorial_3.js';

import Negocios from './pages/TravelGoal/negocios.js';
import Estudos from './pages/TravelGoal/estudo.js';
import Lazer from './pages/TravelGoal/lazer.js';

import Login from './pages/Login';
import SignIn from './pages/SignIn';
import Welcome from './pages/Welcome';
import Destination from './pages/Destination/continent.js';
import TimeTravel from './pages/TimeTravel';
import Planning from './pages/Planning';

export default function Routes() {

    function Tutorial() {
        return (
            <Tab.Navigator 
                tabBarOptions={{
                    showLabel: false,
                    indicatorStyle: {
                        height: 6,
                        borderRadius: 3
                    },
                    style: {
                        marginTop: Constants.statusBarHeight,
                        marginHorizontal: 50,
                        height: 6,
                        backgroundColor: "#777",
                        borderRadius: 3
                    }
                }}
            >
                <Tab.Screen name="TutorialOne" component={TutorialOne} />
                <Tab.Screen name="TutorialTwo" component={TutorialTwo} />
                <Tab.Screen name="TutorialThree" component={TutorialThree} />
            </Tab.Navigator>
        );
    }

    function Goal() {
        return (
            <Tab.Navigator 
                tabBarOptions={{
                    showLabel: false,
                    indicatorStyle: {
                        height: 6,
                        borderRadius: 3
                    },
                    style: {
                        marginTop: Constants.statusBarHeight,
                        marginHorizontal: 50,
                        height: 6,
                        backgroundColor: "#777",
                        borderRadius: 3
                    }
                }}
            >
                <Tab.Screen name="Negocios" component={Negocios} />
                <Tab.Screen name="Estudos" component={Estudos} />
                <Tab.Screen name="Lazer" component={Lazer} />
            </Tab.Navigator>
        );
    }

    return (

        <NavigationContainer>

            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name='Tutorial' component={Tutorial} />
                <AppStack.Screen name='Login' component={Login} />
                <AppStack.Screen name='SignIn' component={SignIn} />
                <AppStack.Screen name='Welcome' component={Welcome} />
                <AppStack.Screen name='Destination' component={Destination} />
                <AppStack.Screen name='Goal' component={Goal} />
                <AppStack.Screen name='TimeTravel' component={TimeTravel} />
                <AppStack.Screen name='Planning' component={Planning} />
            </AppStack.Navigator>

        </NavigationContainer>
    );
}