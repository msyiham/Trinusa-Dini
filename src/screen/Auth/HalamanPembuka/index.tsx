import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const HalamanPembuka = () => {
  const navigation = useNavigation();

  const onWaktuBelajar = () => {
    navigation.navigate('WaktuBelajar');
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../../asset/img/pembukaan.png')}
        style={styles.backgroundImage}
      >
        {/* Konten atau komponen lainnya akan ditempatkan di sini */}
        <Image
          source={require('../../../asset/img/elang.gif')}
          style={[styles.logo]}
          resizeMode="contain"
        />
        <TouchableOpacity onPress={onWaktuBelajar} style={styles.buton}>
          <Text style={{ color: 'white' }}>Next</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 300,
    height: 300,
    position: 'absolute',
    top: 50,
  },
  buton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFDD5B',
    marginTop: 10,
    paddingVertical: 10,
    elevation: 2,
    marginBottom: 10,
    width: '30%',
    borderRadius: 10,
    position: 'absolute',
    bottom: 60,
    right: 30,
  },
});

export default HalamanPembuka;
