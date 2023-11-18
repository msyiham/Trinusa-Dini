import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import CustomInput from '../../../components/CustomInput';
import CustomButton from '../../../components/CustomButton';
import SocialSignInButtons from '../../../components/SocialSignInButtons';
import {useNavigation} from '@react-navigation/native';
import SweetAlert from 'react-native-sweet-alert';
import { FIREBASE_AUTH, FIRESTORE_DB } from '../../../../firebase';
import {signInWithEmailAndPassword} from "firebase/auth";
import { doc, setDoc, getDoc } from 'firebase/firestore';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = FIREBASE_AUTH;
  const firestore = FIRESTORE_DB;
  const {height} = useWindowDimensions();
  const navigation = useNavigation();


  const onSignInPressed = () => {
    if (!email || !password) {
      // Validate if email or password is empty
      SweetAlert.showAlertWithOptions({
        title: 'Login Gagal',
        subTitle: 'Tolong lengkapi input email & password ',
        confirmButtonTitle: 'OK',
        style: 'error',
        cancellable: false,
      });
      return;
    }
    signInWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
      const user = userCredential.user;
      console.log('User signed in:', user.uid);
      const userDocRef = doc(firestore, 'users', user.uid);
      const userDocSnap = await getDoc(userDocRef);
      if (userDocSnap.exists()) {
        const userData = userDocSnap.data();
        const username = userData.username;

        navigation.reset({
          index: 0,
          routes: [{ name: 'Main' }],
        });
        SweetAlert.showAlertWithOptions({
          title: 'Login Berhasil',
          subTitle: `Selamat datang, ${username}!`,
          confirmButtonTitle: 'OK',
          style: 'success',
          cancellable: false,
        });
      }
    })
      .catch((error) => {
        console.error('Sign-in error:', error.code, error.message);
        if (error.code === 'auth/invalid-email') {
          SweetAlert.showAlertWithOptions({
            title: 'Login Gagal',
            subTitle: 'Masukkan email dengan benar',
            confirmButtonTitle: 'OK',
            style: 'error',
            cancellable: false,
          });
        } else if (error.code === 'auth/user-not-found') {
          SweetAlert.showAlertWithOptions({
            title: 'Login Gagal',
            subTitle: 'Email anda belum terdaftar',
            confirmButtonTitle: 'OK',
            style: 'error',
            cancellable: false,
          });
        } else if (error.code === 'Failed to get document because the client is offline.') {
          SweetAlert.showAlertWithOptions({
            title: 'Login Gagal',
            subTitle: 'coba ulangi lagi, masalah terdapat pada jaringan',
            confirmButtonTitle: 'OK',
            style: 'error',
            cancellable: false,
          });
        } else if (error.code === 'auth/wrong-password') {
          SweetAlert.showAlertWithOptions({
            title: 'Login Gagal',
            subTitle: 'Password Anda Salah!',
            confirmButtonTitle: 'OK',
            style: 'error',
            cancellable: false,
          });
        } else {
          SweetAlert.showAlertWithOptions({
            title: 'Gagal',
            subTitle: error.message,
            confirmButtonTitle: 'OK',
            style: 'error',
            cancellable: false,
          });
        }
      })
  };
  const onForgotPasswordPressed = () => {
    navigation.navigate('ForgotPassword');
  };

  const onSignUpPress = () => {
    navigation.navigate('Register');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image
          source={require('../../../asset/img/Logo.png')}
          style={[styles.logo, {height: height * 0.3}]}
          resizeMode="contain"
        />

        <CustomInput
          placeholder="Email"
          value={email}
          setValue={setEmail}
        />
        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry
        />

        <CustomButton text="Sign In" onPress={onSignInPressed} />

        <CustomButton
          text="Forgot password?"
          onPress={onForgotPasswordPressed}
          type="TERTIARY"
        />

        <CustomButton
          text="Don't have an account? Create one"
          onPress={onSignUpPress}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: '70%',
    maxWidth: 300,
    maxHeight: 200,
  },
});

export default Login;
