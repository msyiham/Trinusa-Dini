import React, { useState, useCallback, useRef } from 'react';
import { StyleSheet,Text,View,Alert,Image,TouchableOpacity, useWindowDimensions,TextInput,ScrollView,Modal} from 'react-native';
import YoutubePlayer from "react-native-youtube-iframe";
import { useNavigation } from '@react-navigation/native';

const Berlatih = () => {
    const { height } = useWindowDimensions();
    const [playing, setPlaying] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const navigation = useNavigation();
    const closeModal = () => {
        setModalVisible(false);

        navigation.navigate('Home1');
      };
    const onStateChange = useCallback((state) => {
        if (state === "ended") {
          setPlaying(false);
          Alert.alert("video has finished playing!");
        }
        }, []);
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
        <View style={{ flexDirection:'row', alignItems:'center', marginTop:80, marginBottom:0 ,margin:20 }}>
            <Text>Praktik Kebudayaan</Text>
        </View>
        <Text style={{ margin:20, fontWeight:'bold', marginTop:0 }}>Mari adik adik mengikuti gerakan tari dibawah ini!</Text>
        <View>
            <YoutubePlayer
            height={300}
            play={playing}
            videoId={"TJZ6mclliA8"}
            onChangeState={onStateChange}
            />
        </View>
        <View style={{ justifyContent:'center', alignItems:'center' }}>
        <TouchableOpacity style={styles.submitButton} onPress={() => setModalVisible(true)}>
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
            <Text style={styles.modalText}>Selamat, Anda berhasil menyelesaikan latihan! satu api semangat dan satu puzzle anda dapatkan</Text>
            <View style={{ flexDirection:'row' }}>
            <Image
              source={require('../../../asset/img/Apisemangat.png')}
              style={[styles.modalImage, { height: height * 0.1 }]}
              resizeMode="contain"
            />
            <Image
              source={require('../../../asset/img/Puzzle.png')}
              style={[styles.modalImage, { height: height * 0.1 }]}
              resizeMode="contain"
            />
            </View>
            <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
              <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>Tutup</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
      )} ;
  
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
        backgroundColor:'#F8FA94',
        borderRadius:15,
        padding:12,
        width:100,
        alignItems:'center'
    },
    buton2:{
        backgroundColor:'#FFDD5B',
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
        width:'80%',
        height:'35%'
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
  
 
  


export default Berlatih;
