import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  KeyboardAvoidingView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import CustomInput from '../../../components/CustomInput';
import CustomButton from '../../../components/CustomButton';
import SocialSignInButtons from '../../../components/SocialSignInButtons';
import {useNavigation} from '@react-navigation/native';
//import SweetAlert from 'react-native-sweet-alert';
import { FIREBASE_AUTH, FIRESTORE_DB } from '../../../../firebase';
import {signInWithEmailAndPassword} from "firebase/auth";
import { doc, setDoc, getDoc } from 'firebase/firestore';
import PopupDialog, {
  DialogTitle,
  DialogButton,
} from 'react-native-popup-dialog';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorDialogVisible, setErrorDialogVisible] = useState(false);
  const [successDialogVisible, setSuccessDialogVisible] = useState(false);
  const [username, setUsername] = useState(''); // Add username state
  const auth = FIREBASE_AUTH;
  const firestore = FIRESTORE_DB;
  const {height} = useWindowDimensions();
  const navigation = useNavigation();
  
  const showDialog = () => {
    setErrorDialogVisible(true);
  };

  const hideDialog = () => {
    setErrorDialogVisible(false);
  };
  const showSuccessDialog = () => {
    setSuccessDialogVisible(true);
  };

  const hideSuccessDialog = () => {
    setSuccessDialogVisible(false);
  };

  const onSignInPressed = () => {
    if (!email || !password) {
      // Validate if email or password is empty
      // SweetAlert.showAlertWithOptions({
      //   title: 'Login Gagal',
      //   subTitle: 'Tolong lengkapi input email & password ',
      //   confirmButtonTitle: 'OK',
      //   style: 'error',
      //   cancellable: false,
      // });
      Alert.alert(
        'Login Gagal',
        `Silahkan Mencoba lagi`,
        [
          {
            text: 'OK',
            onPress: () => console.log('OK Pressed'),
          },
        ],
        { cancelable: false }
      );
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
        // SweetAlert.showAlertWithOptions({
        //   title: 'Login Berhasil',
        //   subTitle: `Selamat datang, ${username}!`,
        //   confirmButtonTitle: 'OK',
        //   style: 'success',
        //   cancellable: false,
        // });
        Alert.alert(
          'Login Berhasil',
          `Selamat datang, ${username}!`,
          [
            {
              text: 'OK',
              onPress: () => console.log('OK Pressed'),
            },
          ],
          { cancelable: false }
        );
      }
    })
      .catch((error) => {
        console.error('Sign-in error:', error.code, error.message);
        if (error.code === 'auth/invalid-email') {
          // SweetAlert.showAlertWithOptions({
          //   title: 'Login Gagal',
          //   subTitle: 'Masukkan email dengan benar',
          //   confirmButtonTitle: 'OK',
          //   style: 'error',
          //   cancellable: false,
          // });
          Alert.alert(
            'Login Gagal',
            'Masukkan email dengan benar',
            [
              {
                text: 'OK',
                onPress: () => console.log('OK Pressed'),
              },
            ],
            { cancelable: false }
          );  
        } else if (error.code === 'auth/user-not-found') {
          // SweetAlert.showAlertWithOptions({
          //   title: 'Login Gagal',
          //   subTitle: 'Email anda belum terdaftar',
          //   confirmButtonTitle: 'OK',
          //   style: 'error',
          //   cancellable: false,
          // });
          Alert.alert(
            'Login Gagal',
            'Email anda belum terdaftar',
            [
              {
                text: 'OK',
                onPress: () => console.log('OK Pressed'),
              },
            ],
            { cancelable: false }
          );  
        } else if (error.code === 'Failed to get document because the client is offline.') {
          // SweetAlert.showAlertWithOptions({
          //   title: 'Login Gagal',
          //   subTitle: 'coba ulangi lagi, masalah terdapat pada jaringan',
          //   confirmButtonTitle: 'OK',
          //   style: 'error',
          //   cancellable: false,
          // });
          Alert.alert(
            'Login Gagal',
            'Coba ulangi lagi, masalah terdapat pada jaringan',
            [
              {
                text: 'OK',
                onPress: () => console.log('OK Pressed'),
              },
            ],
            { cancelable: false }
          );  
        } else if (error.code === 'auth/wrong-password') {
          // SweetAlert.showAlertWithOptions({
          //   title: 'Login Gagal',
          //   subTitle: 'Password Anda Salah!',
          //   confirmButtonTitle: 'OK',
          //   style: 'error',
          //   cancellable: false,
          // });
          Alert.alert(
            'Login Gagal',
            'Password Anda Salah!',
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
          //   title: 'Gagal',
          //   subTitle: error.message,
          //   confirmButtonTitle: 'OK',
          //   style: 'error',
          //   cancellable: false,
          // });
          Alert.alert(
            'Gagal',
            'masukkan data dengan',
            [
              {
                text: 'OK',
                onPress: () => console.log('OK Pressed'),
              },
            ],
            { cancelable: false }
          );  
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
    <View style={styles.root}>
        <Image
          source={require('../../../asset/img/gambar.png')}
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

        <PopupDialog
          visible={errorDialogVisible}
          onTouchOutside={hideDialog}
          dialogTitle={<DialogTitle title="Login Berhasil" />}
        >
        <View style={{ justifyContent:'center',alignItems:'center' }}>
          <Image
              source={require('../../../asset/img/gambar.png')}
              style={[styles.logo1, {height: height * 0.3}]}
              resizeMode="contain"
              />
          <Text style={styles.dialogContent}>Selamat datang {username}!</Text>
          <TouchableOpacity style={styles.customalert} onPress={hideDialog}><Text style={{ color:'white' }}>OK</Text></TouchableOpacity>
        </View>
        </PopupDialog>
        {/* <PopupDialog
          visible={successDialogVisible}
          onTouchOutside={hideSuccessDialog}
          dialogTitle={<DialogTitle title="Login Berhasil" />}
      
        >
        <View style={{ justifyContent:'center',alignItems:'center' }}>
          <Image
              source={require('../../../asset/img/gambar.png')}
              style={[styles.logo1, {height: height * 0.3}]}
              resizeMode="contain"
              />
          <Text style={styles.dialogContent}>Selamat datang, {username}!</Text>
          <TouchableOpacity style={styles.customalert} onPress={hideSuccessDialog}><Text style={{ color:'white' }}>OK</Text></TouchableOpacity>
        </View>
        </PopupDialog> */}
  
        <View style={{flexDirection:'row', alignItems: 'center',justifyContent: 'center', marginTop:10}}>
            <TouchableOpacity onPress={onForgotPasswordPressed}><Text style={styles.forgot}>Forgot pasword ?</Text></TouchableOpacity>
          </View>
     
          <View style={{flexDirection:'row', alignItems: 'center',justifyContent: 'center', marginTop:10}}>
            <Text style={styles.text}>Belum Punya Akun? </Text>
            <TouchableOpacity onPress={onSignUpPress}><Text style={styles.link}>Regis</Text></TouchableOpacity>
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
  logo: {
    width: '70%',
    maxWidth: 300,
    maxHeight: 200,
  },
  logo1:{
  },
  link:{
    fontWeight:'bold',
    color:'#3B71F3'
  },
  forgot:{
    color:'black',
    fontWeight:'450'
  },
  text:{
    color:'black'
  },
  dialogContent: {
    fontSize: 16,
    marginBottom: 0,
    textAlign: 'center',
  },
  customalert:{
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#3B71F3',
    marginTop:10,
    paddingVertical:10,
    elevation:2,
    marginBottom:10,
    width:'90%',
    borderRadius:10
  }
});

export default Login;
