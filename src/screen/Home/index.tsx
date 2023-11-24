import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView,useWindowDimensions } from 'react-native';

const Home = () => {
  const {height} = useWindowDimensions();
    const data = [
      { id: '1', text: '0', imageSource: require('../../asset/img/Simpan.png') },
      { id: '2', text: '0', imageSource: require('../../asset/img/Apisemangat.png') },
      { id: '3', text: '0', imageSource: require('../../asset/img/Puzzle.png') },
      { id: '4', text: '5', imageSource: require('../../asset/img/Hati.png') },
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
        <View style={styles.set}>
          <View>
          <Text style={{ color:'#A8870C', fontSize:20,fontWeight:'bold' }}>Activity 1: Sumatera</Text>
          <Text style={{ color:'#A8870C', fontSize:12,fontWeight:'bold' }}>Mengenali kebudayaan berupa tarian yang ada pada pulau sumatera</Text>
          </View>
          <Image
              source={require('../../asset/img/buku.png')}
              style={[styles.logo1, {height: height * 0.3}]}
              resizeMode="contain"
              />
        </View>
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
      padding:10,
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
    set:{
      flexDirection:'row',
      backgroundColor:'#F8FA94'
    }
  });
  
 
  


export default Home;
