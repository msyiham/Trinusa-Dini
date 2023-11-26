import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Alert ,TouchableOpacity,navigation } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CustomScrolButon = () => {
    const navigation = useNavigation();
    const showAlert = () => {
        Alert.alert(
          'Konfirmasi',
          'Apakah kamu ingin bermain?',
          [
            {
              text: 'Tidak',
              style: 'cancel',
            },
            {
              text: 'Ya',
              onPress: () => {
                // Logika yang ingin Anda jalankan jika user memilih "Ya"
                navigation.navigate('Bermain');
              },
            },
          ],
          { cancelable: false }
        );
      };
    return(
    <View > 
        <TouchableOpacity style={styles.imageContainer} onPress={showAlert}>
          <Image  source={require('../../asset/img/buton1.png')} style={styles.image1} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image  source={require('../../asset/img/buton2.png')} style={styles.image1} />
        </TouchableOpacity>
        <View style={ styles.imageContainer2}>
          <TouchableOpacity>
            <Image  source={require('../../asset/img/Hadiah.png')} />
          </TouchableOpacity>
          <Image  source={require('../../asset/img/Taka.png')} style={styles.image2} />
        </View>
        <TouchableOpacity >
          <Image  source={require('../../asset/img/buton2.png')} style={styles.image1} />
        </TouchableOpacity>
        <TouchableOpacity style={{ alignItems:'flex-end' }}>
          <Image  source={require('../../asset/img/buton2.png')} style={styles.image1} />
        </TouchableOpacity>
    </View>
    );
};
const styles = StyleSheet.create({
    rowContainer: {
        flexDirection: 'row',
      },
      imageContainer: {
        alignItems:'flex-end'
      },
      imageContainer2: {
        margin: 20,
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems:'center'
      },
      image1: {
        width: 200,
        height: 200,
       // Setengah dari lebar dan tinggi gambar
      },
      image2: {
        width: 150,
        height: 150,
       // Setengah dari lebar dan tinggi gambar
      },
});
  

export default CustomScrolButon;