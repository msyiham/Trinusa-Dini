import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';

const Home = () => {

  return (
    <View style={styles.container1}>
       <Image style={styles.logo}
        source={require('../../asset/img/Simpan.png')} 
        resizeMode="contain"
      />
       <Image style={styles.logo}
        source={require('../../asset/img/Apisemangat.png')} 
        resizeMode="contain"
      />
       <Image style={styles.logo}
        source={require('../../asset/img/Puzzle.png')} 
        resizeMode="contain"
      />
       <Image style={styles.logo}
        source={require('../../asset/img/Hati.png')} 
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container1: {
    backgroundColor: '#FFDD5B',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    padding:5,
  },
  logo: {
    maxWidth: 40,
    maxHeight: 40,
    margin:20,
    marginBottom:5
  },
});

export default Home;
