import { StyleSheet, Text, View, Image, useWindowDimensions, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'

const Latihan = () => {
    const { height } = useWindowDimensions();
     return (
        <View>
            <View style={{justifyContent:'center', alignItems:'center', }}>
                <Image
                source={require('../../asset/img/NAV.png')}
                resizeMode="contain"
                />
                </View>
                <View>
                    <TouchableOpacity>
                    <Text style={{fontWeight:'bold', margin: 20, fontSize:20, marginBottom:10 }}>Semua Tarian</Text>
                    </TouchableOpacity>
                    <ScrollView>
                        <TouchableOpacity>
                        <Image
                            source={require('../../asset/img/butontarisumatera.png')}
                            style={styles.logo1}
                            resizeMode="contain"
                        />
                        </TouchableOpacity>
                        <TouchableOpacity>
                        <Image
                            source={require('../../asset/img/butontarijawa.png')}
                            style={styles.logo1}
                            resizeMode="contain"
                        />
                        </TouchableOpacity>
                    </ScrollView>
                </View>
                <View>
                    <TouchableOpacity>
                    <Text style={{fontWeight:'bold', margin: 20, fontSize:20, marginBottom:10 }}>Koleksi</Text>
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
        </View>
  
    
  )
}
const styles = StyleSheet.create({
    submitButton: {
        backgroundColor: '#FFDD5B',
        padding: 30,
        borderRadius: 8,
        marginTop: 10,
        width:'90%',
        alignItems:'center',
      },
      submitButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
      },
      logo1:{
        marginLeft:20,
        width:'90%',
      }
})
export default Latihan

