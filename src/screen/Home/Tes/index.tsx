import React, { useState, useCallback, useRef } from 'react';
import { StyleSheet,Text,View,Image,TouchableOpacity,TextInput,Modal,useWindowDimensions, Alert} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Tes = () => {
    const navigation = useNavigation(); 
    const [selectedOption, setSelectedOption] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
    const { height } = useWindowDimensions();

    const handleSelection = (option) => {
        setSelectedOption(option);

    // Di sini, Anda bisa menambahkan logika untuk mengecek jawaban yang benar atau salah
    // Misalnya, dengan membandingkan nilai 'option' dengan jawaban yang benar.
    // Jangan lupa untuk menyesuaikan logika ini sesuai dengan kebutuhan aplikasi Anda.
    // Contoh logika:
    if (option === 'tariPiring') {
      setModalVisible(true); // Tampilkan modal jika jawaban benar
    } else {
      Alert.alert('Jawaban Anda salah. Coba lagi!');
    }
  };

  const closeModal = () => {
    setModalVisible(false);
  };
    return(
    <View>
      <View style={ styles.container }>
        <TouchableOpacity style={styles.buton}>
            <Text style={styles.text}>Step1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buton1}>
            <Text  style={styles.text}>Step2</Text>
        </TouchableOpacity >
        <TouchableOpacity style={styles.buton2}>
            <Text  style={styles.text}>Step3</Text>
        </TouchableOpacity>
        <Image
          source={require('../../../asset/img/Hati.png')}
          style={[styles.logo, {height: height * 0.3}]}
          resizeMode="contain"
          />
          <Text>5</Text>
      </View>
      <View style={{ flexDirection:'row', alignItems:'center', marginBottom:0 }}>
        <Image
        source={require('../../../asset/img/Puzzle.png')}
        style={[styles.logo1, {height: height * 0.1}]}
        resizeMode="contain"
        />
        <Text>Kebudayaan Baru</Text>
      </View>
      <Text style={{ margin:65, fontWeight:'bold', marginTop:0 }}>Pilih gambar dibawah ini, mana yang merupakan Tari Piring!</Text>
      <View style={styles.rowcontainer}>
        <TouchableOpacity onPress={() => handleSelection('optionA')}>
            <Image
                source={require('../../../asset/img/avatar1.png')}
                style={[styles.logo1, {height: height * 0.2}]}
                resizeMode="contain"
            />
        </TouchableOpacity>
        <TouchableOpacity  onPress={() => handleSelection('optionB')}>
            <Image
                    source={require('../../../asset/img/avatar2.png')}
                    style={[styles.logo1, {height: height * 0.2}]}
                    resizeMode="contain"
                />
        </TouchableOpacity>
      </View>
      <View style={styles.rowcontainer}>
        <TouchableOpacity onPress={() => handleSelection('optionC')}>
            <Image
                source={require('../../../asset/img/avatar3.png')}
                style={[styles.logo1, {height: height * 0.2}]}
                resizeMode="contain"
            />
        </TouchableOpacity>
        <TouchableOpacity  onPress={() => handleSelection('tariPiring')}>
            <Image
                source={require('../../../asset/img/avatar4.png')}
                style={[styles.logo1, {height: height * 0.2}]}
                resizeMode="contain"
            />
        </TouchableOpacity>
      </View>
      <View style={{ justifyContent:'center', alignItems:'center' }}>
        <TouchableOpacity style={styles.submitButton} onPress={() => navigation.navigate('Berlatih')}>
           <Text style={styles.submitButtonText}>Selanjutnya</Text>
        </TouchableOpacity>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
          <Text style={styles.modalText}>Selamat, jawaban anda benar, anda mendapat puzzle!</Text>
            <Image
              source={require('../../../asset/img/Puzzle.png')} 
              style={[styles.logo1, {height: height * 0.1}]}
              resizeMode="contain"
            />
            <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
              <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>Tutup</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
    )
  };
  
  const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        flexDirection:"row",
        maxHeight:50,
        marginTop:50
    },
    rowcontainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10,
      },
    buton:{
        backgroundColor:'#F8FA94',
        borderRadius:15,
        padding:15,
        width:100,
        alignItems:'center'
    },
    buton1:{
        backgroundColor:'#FFDD5B',
        borderRadius:15,
        padding:12,
        width:100,
        alignItems:'center'
    },
    buton2:{
        backgroundColor:'#F8FA94',
        borderRadius:15,
        padding:12,
        marginRight:20,
        width:100,
        alignItems:'center'
    },
    text:{
        fontFamily:'Open sans',
        color:'white',
        fontStyle:'normal',
        fontWeight:'bold'
    },
    logo1:{
        marginLeft:20,
        marginRight:10,
    },
    submitButton: {
        backgroundColor: '#FFDD5B',
        padding: 12,
        borderRadius: 8,
        marginTop: 20,
        width:'90%',
        alignItems:'center'
      },
      submitButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
      },
      modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      },
      modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
        width:'70%',
        height:'30%'
      },
      closeButton: {
        backgroundColor: '#FFDD5B',
        padding: 12,
        borderRadius: 8,
        alignItems: 'center',
        width: '80%',
      },
      modalText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign:'center'
      },
  });
  
 
  


export default Tes;
