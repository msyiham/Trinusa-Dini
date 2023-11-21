import React from 'react';
import * as Screen from "../screen"
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { AnimatedTabBarNavigator } from "react-native-animated-nav-tab-bar";
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { Image } from 'react-native';

const Stack = createNativeStackNavigator();
const Tabs = AnimatedTabBarNavigator();

const Main = ({navigation}) =>{
    return(
        <Tabs.Navigator
            tabBarOptions={{
            activeTintColor: "#2F7C6E",
            inactiveTintColor: "#222222",
            activeBackgroundColor: "#F8D6B6",
            }}
        >
            <Tabs.Screen
                name="Beranda"
                component={Screen.Home}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <Image source={require('../asset/img/home.png')} style={{width:25, height: 25}}/>
                    )
                }}
            />
            <Tabs.Screen
                name="Latihan"
                component={Screen.Trophy}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <Image source={require('../asset/img/task.png')} style={{width:25, height: 25}}/>
                    )
                }}
            />
            <Tabs.Screen
                name="Permainan"
                component={Screen.Trophy}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <Image source={require('../asset/img/game.png')} style={{width:25, height: 25}}/>
                    )
                }}
            />
            <Tabs.Screen
                name="Trophy"
                component={Screen.Trophy}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <Image source={require('../asset/img/trophy.png')} style={{width:25, height: 25}}/>
                    )
                }}
            />
        </Tabs.Navigator>
    )
}

const Navigation = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name='SplashScreen' component={Screen.SplashScreen} />
            <Stack.Screen name='Main' component={Main} />
            <Stack.Screen name="Home" component={Screen.Home} />
            <Stack.Screen name="Trophy" component={Screen.Trophy} />
            <Stack.Screen name='Login' component={Screen.Auth.Login} />
            <Stack.Screen name='Register' component={Screen.Auth.Register} />
            <Stack.Screen name='ForgotPassword' component={Screen.Auth.ForgotPassword} />
        </Stack.Navigator>
    );
};

export default Navigation;