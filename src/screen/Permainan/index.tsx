import { StyleSheet, Text, View, Image, useWindowDimensions } from 'react-native'
import React from 'react'

const Permainan = () => {
    const { height } = useWindowDimensions();
  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center', backgroundColor:'#FDFEE3' }}>
        <Image
        source={require('../../asset/img/Permainan.png')}
        style={[styles.logo1, {height: height * 0.3}]}
        resizeMode="contain"
        />
    </View>
  )
}

export default Permainan

const styles = StyleSheet.create({})