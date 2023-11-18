import React from 'react';
import * as Screen from "../screen"
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { AnimatedTabBarNavigator } from "react-native-animated-nav-tab-bar";
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const Stack = createNativeStackNavigator();
const Tabs = AnimatedTabBarNavigator();

const Main = ({navigation}) =>{
    return(
            <Tabs.Navigator
            tabBarOptions={{
            activeTintColor: "#2F7C6E",
            inactiveTintColor: "#222222"
            }}
        >
            <Tabs.Screen
                name="Home"
                component={Screen.Home}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <Icon
                            name="home"
                            size={size ? size : 24}
                            color={focused ? color : "#222222"}
                            focused={focused}
                            color={color}
                        />
                    )
                }}
            />
            <Tabs.Screen
                name="Trophy"
                component={Screen.Trophy}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <Icon
                            name="trophy"
                            size={size ? size : 24}
                            color={focused ? color : "#222222"}
                            focused={focused}
                            color={color}
                        />
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