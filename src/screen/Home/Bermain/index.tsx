import React, { useState, useCallback, useRef } from 'react';
import { StyleSheet,Text,View,Alert,Image,TouchableOpacity, useWindowDimensions,TextInput,ScrollView,Modal} from 'react-native';
import YoutubePlayer from "react-native-youtube-iframe";
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Bermain = () => {
    const navigation = useNavigation(); 
    const {height} = useWindowDimensions();
    const [playing, setPlaying] = useState(false);

    const [jawaban, setJawaban] = useState('');
    const [modalVisible, setModalVisible] = useState(false);

    const handleChangeText = (text) => {
      setJawaban(text);
    };

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("video has finished playing!");
    }
    }, []);

    const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);
  const handleSubmission = () => {
    const jawabanLowerCase = jawaban.toLowerCase();
    const isTariPiring = jawabanLowerCase.includes('tari piring');

    // Menampilkan alert berdasarkan hasil pengecekan
    if (isTariPiring) {
      setModalVisible(true); 
    } else {
      Alert.alert("Jawaban Anda belum benar. Coba lagi!");
    }
  };
  const closeModal = () => {
    navigation.navigate('Tes');
    
    // navigation.reset({
    //     index: 0,
    //     routes: [{ name: 'Main' }],
    //   });
  };
    return(
    <View>
        <YoutubePlayer
        height={300}
        play={playing}
        videoId={"As5r4VxqEGQ"}
        onChangeState={onStateChange}
      />
   
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
      <View style={{ justifyContent:'center', alignItems:'center' }}>
        <View style={styles.box}>
            <Text style={{ color:'red' }}>Perhatikan Video di atas</Text>
            <Text style={{ margin:50, fontWeight:"bold",  textAlign: 'center', textAlignVertical: 'center' }}>"Menurut adik adik apakah nama tarian di atas ??"</Text>
            <View style={styles.answerBox}>
            <TextInput
                style={styles.answerInput}
                placeholder="Masukkan jawaban di sini..."
                value={jawaban}
                onChangeText={handleChangeText}
            />
            </View>
        </View>
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmission}>
          <Text style={styles.submitButtonText}>Submit</Text>
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
            <Text style={styles.modalText}>Selamat, Anda mendapat api semangat!</Text>
            <Image
              source={require('../../../asset/img/Apisemangat.png')}
              style={styles.modalImage}
              resizeMode="contain"
            />
            <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
              <Text style={styles.closeButtonText}>Selanjutnya</Text>
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
        marginTop:0
    },
    box: {
        width: 350, 
        height: 350, 
        backgroundColor: 'white',
        justifyContent:'center',
        borderRadius:20,
        alignItems:'center',
        borderColor: 'gray',
      },
    buton:{
        backgroundColor:'#FFDD5B',
        borderRadius:15,
        padding:12,
    },
    buton1:{
        backgroundColor:'#F8FA94',
        borderRadius:15,
        padding:12
    },
    buton2:{
        backgroundColor:'#F8FA94',
        borderRadius:15,
        padding:12
    },
    text:{
        fontFamily:'Open sans',
        color:'white',
        fontStyle:'normal',
        fontWeight:'bold'
    },
    logo:{
        marginLeft:10
    },
    answerBox: {
        backgroundColor: '#FFF',
        padding: 10,
        margin: 20,
        borderRadius: 10,
        width: '80%',
        position: 'relative',
      },
      answerInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingLeft: 10,
        borderRadius:20,
        textAlign:'center'
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
      },
      modalText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
      },
      modalImage: {
        width: 100,
        height: 100,
        marginBottom: 20,
      },
      closeButton: {
        backgroundColor: '#FFDD5B',
        padding: 12,
        borderRadius: 8,
        alignItems: 'center',
        width: '80%',
      },
      closeButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
      },
  });
  
 
  


export default Bermain;
