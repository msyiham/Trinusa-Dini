import React, { useState, useCallback } from 'react';
import { StyleSheet, Text, View, ImageBackground, useWindowDimensions, TouchableOpacity,Image, Alert,Dimensions, ScrollView } from 'react-native';
import { signOut } from 'firebase/auth';
import {CommonActions} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
import { useFocusEffect } from '@react-navigation/native';
import { FIREBASE_AUTH, FIRESTORE_DB, FIREBASE_STORAGE } from '../../../firebase';
import { doc, getDoc } from 'firebase/firestore';
import ImagePicker from 'react-native-image-picker';
const Profil = () => {
  const { height } = useWindowDimensions();
  const { width } = useWindowDimensions();
  const auth = FIREBASE_AUTH;
  const firestore = FIRESTORE_DB;
  const navigation = useNavigation();
  const [user, setUser] = useState();
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [fullName, setFullName] = useState('');
  const [photoURL, setPhotoURL] = useState('');
  const windowWidth = Dimensions.get('window').width;
 
  useFocusEffect(
    useCallback(() => {
      // Mengambil semua dokumen dari koleksi "DataBook"
      const unsubscribe = auth.onAuthStateChanged((user) => {
        if (user) {
          setUser(user);
          setEmail(user.email);
          fetchUserData(user.uid);
        }
      });
      return () => unsubscribe();
    }, [user])
  );
  const fetchUserData = async (uid) => {
    try {
      const userDocRef = doc(firestore, 'users', uid);
      const userDocSnap = await getDoc(userDocRef);
  
      if (userDocSnap.exists()) {
        const userData = userDocSnap.data();
        setUserName(userData.username);
        setFullName(userData.fullName);
        if (userData.photoURL) {
          setPhotoUrl(userData.photoURL);
        } else {
          setPhotoUrl(null);
      }
    }
    } catch (error) {
      console.log('Error fetching user data:', error);
    }
  };

  const showConfirmLogOut = () => {
    Alert.alert(
      'Konfirmasi',
      'Apakah Anda yakin ingin keluar akun?',
      [
        { text: 'Batal', style: 'cancel' },
        { text: 'Ya', onPress: logout },
      ]
    );
  };
  const logout = () => {
    signOut(auth).then(() => navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: 'Login' }],
      })
    ));
    console.log('Logged out');
    // SweetAlert.showAlertWithOptions(
    //   {
    //     subTitle: 'Anda Berhasil Keluar Akun',
    //     confirmButtonTitle: 'YA',
    //     confirmButtonColor: '#000',
    //     style: 'success',
    //     cancellable: true
    //   },
    // );
    Alert.alert('Anda Berhasil Keluar Akun')
  };
  return (
    <View>
      <View style={{ backgroundColor:"#FFDD5B", width:430, height:230, flexDirection:'row' }}>
        <TouchableOpacity style={{ justifyContent:'center', margin:20 }} >
        <Image source={{ uri: photoURL || 'https://firebasestorage.googleapis.com/v0/b/etnochem-696d8.appspot.com/o/default_photo.png?alt=media&token=0dbd1725-a978-427f-a47f-e2ce3f489d1b' }} style={[styles.avatar, {width: width*0.25, height:width*0.25, borderRadius:width*0.25, marginStart: width*0.02}]}/>
        </TouchableOpacity>
        <View style={{ justifyContent:'center',}}>
        <Text style={{fontSize:30}}>{userName}</Text>

        <Text style={styles.email}>{email.length > 25 ? email.slice(0, 25) + '...' : email}</Text>  
        <TouchableOpacity>
            <Image
            source={require('../../asset/img/butontambah.png')}
            style={{ margin:10, right:25 }}
            />
          </TouchableOpacity>
        </View>
      </View>
        <ScrollView style={{ backgroundColor:'white' }}>
          <View style={{ flex:1 }}>
            <View style={[styles.halfWidthView, { height: windowWidth / 1.9 }]}>
              <Text style={{ margin:20, color:'#EC7C12', fontWeight:'bold', fontSize:20, top:8 }}>Statistik</Text>
              <View style={styles.rowcontainer}>
              <TouchableOpacity style={styles.tombol}>
                  <Image
                      source={require('../../asset/img/Puzzle.png')}
                      style={[ {height: height * 0.1}]}
                      resizeMode="contain"
                  />
                   <Text style={{ color:'#9F5DE4', marginLeft:8, fontWeight:'bold' }}>1 didapatkan</Text>
              </TouchableOpacity>
             
              <TouchableOpacity  style={styles.tombol}>
                  <Image
                          source={require('../../asset/img/Apisemangat.png')}
                          style={[ {height: height * 0.1}]}
                          resizeMode="contain"
                      />
                  <Text style={{ color:'#D68644', marginLeft:8, fontWeight:'bold' }}>1 didapatkan</Text>  
              </TouchableOpacity>
              </View>
              <View style={styles.rowcontainer}>
              <TouchableOpacity style={styles.tombol}>
                  <Image
                      source={require('../../asset/img/Hati.png')}
                      style={[ {height: height * 0.1}]}
                      resizeMode="contain"
                  />
                   <Text style={{ color:'#A82622', marginLeft:8, fontWeight:'bold' }}>Belum didapatkan</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.tombol}>
  
              </TouchableOpacity>
              </View>
              </View>
              <View>
                <TouchableOpacity>
                  <Text style={{fontWeight:'bold', margin: 20, fontSize:20, marginBottom:10, color:'black' }}>Koleksi</Text>
                </TouchableOpacity>
                  <ScrollView>
                    <TouchableOpacity>
                      <Image
                        source={require('../../asset/img/butonsimpantari.png')}
                        style={styles.logo1}
                        resizeMode="contain"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                          source={require('../../asset/img/butoncerita.png')}
                          style={styles.logo1}
                          resizeMode="contain"
                        />
                    </TouchableOpacity>
              </ScrollView>
              </View>
        <View style={[ { height: windowWidth / 0.4 }]}>
          <Text style={{ margin:20, color:'black', fontWeight:'bold', fontSize:20, top:8 }}>About Team</Text>
          <View style={styles.rowcontainer}>
        
            <TouchableOpacity>
                  <Image
                      source={require('../../asset/img/1.png')}
                      style={[ {height: height * 0.2}]}
                      resizeMode="contain"
                  />
              </TouchableOpacity>
        
              <TouchableOpacity>
                  <Image
                      source={require('../../asset/img/2.png')}
                      style={[ {height: height * 0.2}]}
                      resizeMode="contain"
                  />
              </TouchableOpacity>
            </View>
          <View style={styles.rowcontainer}>
              <TouchableOpacity>
                  <Image
                      source={require('../../asset/img/3.png')}
                      style={[ {height: height * 0.2}]}
                      resizeMode="contain"
                  />
              </TouchableOpacity>
              <TouchableOpacity>
                  <Image
                      source={require('../../asset/img/5.png')}
                      style={[ {height: height * 0.2}]}
                      resizeMode="contain"
                  />
              </TouchableOpacity>
            </View>
          <View style={styles.rowcontainer1}>
              <TouchableOpacity>
                  <Image
                      source={require('../../asset/img/4.png')}
                      style={[ {height: height * 0.2}]}
                      resizeMode="contain"
                  />
              </TouchableOpacity>
            </View>
        <View style={{ justifyContent:'center', alignItems:'center' }}>
        <TouchableOpacity onPress={showConfirmLogOut} style={[styles.settingButton]}>
            <Text style={styles.settingButtonText}>Keluar Akun</Text>
        </TouchableOpacity>
        </View>
       </View>
       </View>
      </ScrollView>
    </View>
  )
};

const styles = StyleSheet.create({
  settingButtonText:{
    color:'black',
    fontSize: 15,
    fontWeight:'bold'
  },
  userName:{
    color:'black',
    fontSize: 20,

  },
  halfWidthView1: {
     backgroundColor:'white',
     elevation:10
  },
  rowcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  rowcontainer1: {
    alignItems:'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  logoutButton:{
    backgroundColor:'#B29E87',
  },
  settingButton:{
    flexDirection:'row',
    justifyContent:'center',
    borderRadius: 5,
    borderWidth: 1,
    paddingVertical: 10,
    width:"90%"
  },
  tombol:{
    width:175,
    height:50,
    elevation:10,
    backgroundColor:'#FFFFFF',
    borderRadius:10,
    alignItems:"center",
    flexDirection:'row',
    justifyContent:'center'
  },
  tombol1:{
    alignItems:'center',
    justifyContent:'center'
  },
  logo1:{
    marginLeft:10,
    bottom:2,
    width:'95%',
    height:75
  },

 
});

export default Profil;
