import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';

const WaktuBelajar = () => {
const navigation = useNavigation();

const onhalamanutama = () => {
      navigation.navigate('Main');
    };
  const [selectedButton, setSelectedButton] = useState(null);

  const handleCheckboxClick = (buttonNumber) => {
    if (selectedButton === buttonNumber) {
      // Unselect the button if it is already selected
      setSelectedButton(null);
    } else {
      // Select the button if it is not selected
      setSelectedButton(buttonNumber);
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../../asset/img/waktubelajar.png')}
        style={styles.backgroundImage}
      >
        <View style={styles.container1}>
          <TouchableOpacity style={styles.buton2}>
            <Text style={{ color: 'black' }}>Berapa lama pembelajaran yang akan kalian laksanakan dalam sehari ? </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleCheckboxClick(1)} style={[styles.buton1, selectedButton === 1 && styles.selectedButon]}>
            <Text style={{ color: 'black' }}>5 Menit dalam sehari {selectedButton === 1 && <Text style={styles.checkmark}> &#10003; </Text>}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleCheckboxClick(2)} style={[styles.buton1, selectedButton === 2 && styles.selectedButon]}>
            <Text style={{ color: 'black' }}>10 Menit dalam sehari   {selectedButton === 2 && <Text style={styles.checkmark}>  &#10003; </Text>}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleCheckboxClick(3)} style={[styles.buton1, selectedButton === 3 && styles.selectedButon]}>
            <Text style={{ color: 'black' }}>15 Menit dalam sehari   {selectedButton === 3 && <Text style={styles.checkmark}> &#10003; </Text>}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleCheckboxClick(4)} style={[styles.buton1, selectedButton === 4 && styles.selectedButon]}>
            <Text style={{ color: 'black' }}>20 Menit dalam sehari {selectedButton === 4 && <Text style={styles.checkmark}> &#10003; </Text>}</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={onhalamanutama} style={styles.buton}>
          <Text style={{ color: 'black' }}>Next</Text>
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
  buton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFDD5B',
    paddingVertical: 10,
    elevation: 2,
    marginBottom: 10,
    width: '30%',
    borderRadius: 10,
    position: 'absolute',
    bottom: 60,
    right: 30,
  },
  buton1: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8FA94',
    marginTop: 10,
    paddingVertical: 20,
    width: '80%',
    elevation: 2,
    marginBottom: 10,
    borderRadius: 10,
  },
  buton2: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFDD5B',
    marginTop: 10,
    paddingVertical: 20,
    width: '80%',
    elevation: 2,
    marginBottom: 10,
    borderRadius: 10,
  },
  container1: {
    position: 'absolute',
    top: 60,
    alignItems: 'center',
  },
  selectedButon: {
    backgroundColor: '#3B71F3', // Change the background color for the selected button
  },
  checkmark: {
    color: 'black',
    fontSize: 16,
  },
});

export default WaktuBelajar;
