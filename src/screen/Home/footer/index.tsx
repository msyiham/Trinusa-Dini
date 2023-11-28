import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import * as Screen from './Screen'; // Pastikan mengganti dengan import yang sesuai

const Footer = ({ navigation }) => {
  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', backgroundColor: '#F8D6B6', paddingVertical: 10 }}>
      <TouchableOpacity onPress={() => navigateToScreen('Beranda')}>
        <Image source={require('../asset/img/home.png')} style={{ width: 25, height: 25 }} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigateToScreen('Permainan')}>
        <Image source={require('../asset/img/game.png')} style={{ width: 25, height: 25 }} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigateToScreen('Latihan')}>
        <Image source={require('../asset/img/task.png')} style={{ width: 25, height: 25 }} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigateToScreen('Profil')}>
        <Image source={require('../asset/img/profilanak.png')} style={{ width: 40, height: 40 }} />
      </TouchableOpacity>
    </View>
  );
};

export default Footer;