import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView,useWindowDimensions,TouchableOpacity } from 'react-native';

const CustomSet = () => {
    const {height} = useWindowDimensions();
    return(
    <View style={styles.set}> 
    <View style={{  flexDirection:'row', justifyContent:'center', marginTop:10, marginBottom:10 }}>
      <View style={{ width:210, marginRight:50 }}>
        <Text style={{ color:'#A8870C', fontSize:20,fontWeight:'bold' }}>Activity 1: Sumatera</Text>
        <Text style={{ color:'#A8870C', fontSize:12,fontWeight:'bold' }}>Mengenali kebudayaan berupa tarian yang ada pada pulau sumatera</Text>
      </View>
      <Image 
        source={require('../../asset/img/buku.png')}
        style={[styles.logo1, {height: height * 0.1}]}
        resizeMode="contain"
        /> 
    </View>
  
  </View>
    );
};
const styles = StyleSheet.create({
    set:{
      backgroundColor:'#F8FA94',
    },
});
  

export default CustomSet;