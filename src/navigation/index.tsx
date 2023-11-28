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
                name="Permainan"
                component={Screen.Permainan}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <Image source={require('../asset/img/game.png')} style={{width:25, height: 25}}/>
                    )
                }}
            />
            <Tabs.Screen
                name="Latihan"
                component={Screen.Latihan}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <Image source={require('../asset/img/task.png')} style={{width:25, height: 25}}/>
                    )
                }}
            />
         
            <Tabs.Screen
                name="Profil"
                component={Screen.Profil}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <Image source={require('../asset/img/profilanak.png')} style={{width:40, height: 40}}/>
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
            <Stack.Screen name="Profil" component={Screen.Profil} />
      
            <Stack.Screen name='Login' component={Screen.Auth.Login} />
            <Stack.Screen name='Register' component={Screen.Auth.Register} />
            <Stack.Screen name='ForgotPassword' component={Screen.Auth.ForgotPassword} />
            <Stack.Screen name='HalamanPembuka' component={Screen.Auth.HalamanPembuka} />
            <Stack.Screen name='WaktuBelajar' component={Screen.Auth.WaktuBelajar} />
            <Stack.Screen name='Bermain' component={Screen.Bermain} />
            <Stack.Screen name='Tes' component={Screen.Tes} />
            <Stack.Screen name='Berlatih' component={Screen.Berlatih} />
            <Stack.Screen name='Home1' component={Screen.Home1} />
            <Stack.Screen name='Permainan' component={Screen.Permainan} />
            <Stack.Screen name='Latihan' component={Screen.Latihan} />

            
        </Stack.Navigator>
    );
};

export default Navigation;