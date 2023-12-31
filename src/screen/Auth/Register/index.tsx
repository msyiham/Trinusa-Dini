import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity,Image,useWindowDimensions, Alert} from 'react-native';
import CustomInput from '../../../components/CustomInput';
import CustomButton from '../../../components/CustomButton';
import SocialSignInButtons from '../../../components/SocialSignInButtons';
import {useNavigation} from '@react-navigation/core';
import { FIREBASE_AUTH, FIRESTORE_DB } from '../../../../firebase';
// import SweetAlert from "react-native-sweet-alert";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from 'firebase/firestore';
const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = FIREBASE_AUTH;
  const navigation = useNavigation();
  const {height} = useWindowDimensions();
  const firestore = FIRESTORE_DB;
  const [loading, setLoading] = useState(false);

  const onPasswordChange = (text) => {
    setPassword(text); // Set the password in the state
  };
  const onSignUpPressed = async () => {
    try {
      setLoading(true);
      const response = await createUserWithEmailAndPassword(auth, email, password);
      const user = response.user;
  
      // Add user data to Firestore with UID as the document ID
      await setDoc(doc(firestore, 'users', user.uid), {
        username: username,
        email: user.email,
        uid: user.uid,
        checkPoint: "",
      });
  
      console.log(response);
      navigation.replace('Login');
      // SweetAlert.showAlertWithOptions({
      //   title: 'Selamat',
      //   subTitle: `Anda Berhasil Mendaftar, ${username}!`, // Add username here
      //   confirmButtonTitle: 'OK',
      //   style: 'success',
      //   cancellable: false,
      // });
      Alert.alert(
        'Selamat',
        `Anda berhasil mendaftar, ${username}!`,
        [
          {
            text: 'OK',
            onPress: () => {
              console.log('OK Pressed');
              // Navigasi ke halaman selanjutnya di sini
              navigation.navigate('HalamanPembuka');
            },
          },
        ],
        { cancelable: false }
      );
    } catch (error) {
      console.log(error);
      if (!email || !password || !username) {
        // SweetAlert.showAlertWithOptions({
        //   title: 'Gagal',
        //   subTitle: 'Tolong lengkapi input!',
        //   confirmButtonTitle: 'OK',
        //   style: 'error',
        //   cancellable: false,
        // });
        Alert.alert(
          'Gagal',
          `Tolong lengkapi input`,
          [
            {
              text: 'OK',
              onPress: () => console.log('OK Pressed'),
            },
          ],
          { cancelable: false }
        );
      }  else if (error.code === 'auth/email-already-in-use') {
        // SweetAlert.showAlertWithOptions({
        //   title: 'Gagal',
        //   subTitle: 'Email anda sudah terdaftar, silahkan Login!',
        //   confirmButtonTitle: 'OK',
        //   style: 'error',
        //   cancellable: false,
        // });
        Alert.alert(
          'Gagal',
          `Email sudah terdaftar, silahkan login`,
          [
            {
              text: 'OK',
              onPress: () => {
                console.log('OK Pressed');
                // Navigasi ke halaman selanjutnya di sini
                navigation.navigate('Login');
              },
            },
          ],
          { cancelable: false }
        );
      } else if (error.code === 'auth/invalid-email') {
        // SweetAlert.showAlertWithOptions({
        //   title: 'Gagal',
        //   subTitle: 'Gunakan email yang valid',
        //   confirmButtonTitle: 'OK',
        //   style: 'error',
        //   cancellable: false,
        // });
        Alert.alert(
          'Gagal',
          `Gunakan email yang valid`,
          [
            {
              text: 'OK',
              onPress: () => console.log('OK Pressed'),
            },
          ],
          { cancelable: false }
        );
      } else {
        // SweetAlert.showAlertWithOptions({
        //   title: 'Error',
        //   subTitle: `Sign up failed: ${error.message}`,
        //   confirmButtonTitle: 'OK',
        //   confirmButtonColor: '#746555',
        // });
        Alert.alert(
          'Gagal',
          error.message,
          [
            {
              text: 'OK',
              onPress: () => console.log('OK Pressed'),
            },
          ],
          { cancelable: false }
        );

      }

    } finally {
      setLoading(false);
    }
  };
  

  const onSignInPress = () => {
    navigation.navigate('Login');
  };
  const onHalamanPembuka = () => {
    navigation.navigate('HalamanPembuka');
  };

  const onTermsOfUsePressed = () => {
    console.warn('onTermsOfUsePressed');
  };

  const onPrivacyPressed = () => {
    console.warn('onPrivacyPressed');
  };

  return (
        <View style={styles.root}>
          <Image
            source={require('../../../asset/img/register.png')}
            style={[styles.logo, {height: height * 0.3}]}
            resizeMode="contain"
          />

          <CustomInput keyboardType='email-address' placeholder="Email" value={email} setValue={setEmail} />
          <CustomInput placeholder="Username" value={username} setValue={setUsername} />
          <CustomInput placeholder="Password" onPasswordChange={onPasswordChange} secureTextEntry value={password} setValue={setPassword}/>
          <CustomButton bgColor={'#746555'} text="Register" onPress={onSignUpPressed} />


          <View style={{flexDirection:'row', alignItems: 'center',justifyContent: 'center', margin:15}}>
            <Text style={styles.text}>Sudah Punya Akun? </Text>
            <TouchableOpacity onPress={onSignInPress}><Text style={styles.link}>Masuk</Text></TouchableOpacity>
          </View>
        </View>
  );
};


const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFDD5B',
  },
  text: {
    color: 'gray',
    marginVertical: 10,
  },
  link: {
    color: '#FDB075',
  },
  logo: {
    width: '70%',
    maxWidth: 300,
    maxHeight: 200,
  },
});

export default Register;
