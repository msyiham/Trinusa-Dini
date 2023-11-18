import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import CustomInput from '../../../components/CustomInput';
import CustomButton from '../../../components/CustomButton';
import SocialSignInButtons from '../../../components/SocialSignInButtons';
import {useNavigation} from '@react-navigation/core';
import { FIREBASE_AUTH, FIRESTORE_DB } from '../../../../firebase';
import SweetAlert from "react-native-sweet-alert";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from 'firebase/firestore';
const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = FIREBASE_AUTH;
  const navigation = useNavigation();
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
      });
  
      console.log(response);
      navigation.replace('SignIn');
      SweetAlert.showAlertWithOptions({
        title: 'Selamat',
        subTitle: `Anda Berhasil Mendaftar, ${username}!`, // Add username here
        confirmButtonTitle: 'OK',
        style: 'success',
        cancellable: false,
      });
    } catch (error) {
      console.log(error);
      if (!email || !password || !username) {
        SweetAlert.showAlertWithOptions({
          title: 'Gagal',
          subTitle: 'Tolong lengkapi input!',
          confirmButtonTitle: 'OK',
          style: 'error',
          cancellable: false,
        });
      }  else if (error.code === 'auth/email-already-in-use') {
        SweetAlert.showAlertWithOptions({
          title: 'Gagal',
          subTitle: 'Email anda sudah terdaftar, silahkan Login!',
          confirmButtonTitle: 'OK',
          style: 'error',
          cancellable: false,
        });
      } else if (error.code === 'auth/invalid-email') {
        SweetAlert.showAlertWithOptions({
          title: 'Gagal',
          subTitle: 'Gunakan email yang valid',
          confirmButtonTitle: 'OK',
          style: 'error',
          cancellable: false,
        });
      } else {
        SweetAlert.showAlertWithOptions({
          title: 'Error',
          subTitle: `Sign up failed: ${error.message}`,
          confirmButtonTitle: 'OK',
          confirmButtonColor: '#746555',
        });
      }

    } finally {
      setLoading(false);
    }
  };
  

  const onSignInPress = () => {
    navigation.navigate('SignIn');
  };

  const onTermsOfUsePressed = () => {
    console.warn('onTermsOfUsePressed');
  };

  const onPrivacyPressed = () => {
    console.warn('onPrivacyPressed');
  };

  return (
        <View style={{flex:1}}>
          <Text style={styles.title}>Buat Akun</Text>

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
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 10,
  },
  text: {
    color: 'gray',
    marginVertical: 10,
  },
  link: {
    color: '#FDB075',
  },
});

export default Register;
