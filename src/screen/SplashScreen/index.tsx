import { StyleSheet, Text, View, Image, useWindowDimensions } from 'react-native'
import React, {useEffect} from 'react'

const SplashScreen = ({navigation}) => {
    const { height } = useWindowDimensions();
    const { width } = useWindowDimensions();
    useEffect(() =>{
        setTimeout(() =>{
            navigation.replace('Login')
        }, 2000);
      });
  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center', backgroundColor:'#FFFFF2'}}>
        <Image source={require('../../asset/img/Logo.png')} style={{width:width*0.6, height:width*0.6,}}/>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({})