import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView,useWindowDimensions,TouchableOpacity,Dimensions } from 'react-native';
import CustomSet from '../../../components/CustomSet';
import CustomScrolButon1 from '../../../components/CustomScrolButon1';




const Home1 = () => {
    const data = [
      { id: '1', text: '0', imageSource: require('../../../asset/img/Simpan.png') },
      { id: '2', text: '0', imageSource: require('../../../asset/img/Apisemangat.png') },
      { id: '3', text: '0', imageSource: require('../../../asset/img/Puzzle.png') },
      { id: '4', text: '5', imageSource: require('../../../asset/img/Hati.png') },
    ];
    return (
      <View style={styles.container}>
      <View style={styles.headerContainer}>
        {data.map(item => (
          <View key={item.id} style={styles.itemContainer}>
            <Image style={styles.image} source={item.imageSource} />
            <Text style={styles.text}>{item.text}</Text>
          </View>
        ))}
      </View>
      <ScrollView style={styles.scrollView}>
        <CustomSet
        />
        <CustomScrolButon1
        />
        <Image
        source={require('../../../asset/img/lock2.png')}
        />
      </ScrollView>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    headerContainer: {
      flexDirection: 'row', 
      justifyContent:'center',
      alignItems:'center',
      padding:2.5,
      backgroundColor: '#FFDD5B',
    },
    itemContainer: {
      marginTop:30,
      marginBottom:15,
      alignItems: 'center', 
      flexDirection:'row'
    },
    image: {
      marginLeft:12,
      marginRight:12,
      maxWidth: 40,
      maxHeight: 40,
      marginBottom: 0,
    },
    text: {
      fontSize: 20,
      color:'#F94F46',
      fontWeight:'bold'
    },
    scrollView: {
      flex:1,
      backgroundColor: '#f0f0f0',
    },
    columnContainer: {
      flexDirection: 'column',
    },
  
  });
  
 
  


export default Home1;
