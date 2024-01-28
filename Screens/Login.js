
import { View, Text, Image, StyleSheet } from 'react-native'
import SignInWithOAuth from '../Components/SignInWithOAuth'
import Colors from '../assets/shared/Colors'
import FT2 from '../assets/images/FT2.jpg'
import React from 'react'



export default function Login() {
  return (
    <View style={{alignItems:'center', backgroundColor:Colors.LigthGray }}>
      <Image source={FT2}
        style={styles.appImage}
      />
       <View style={{ padding:25,
          alignItems: 'center',
          marginTop: -130,
          elevation: 2
       }}>
          <Text style={styles.heading}>Safari-Salama</Text>
          <Text style={{textAlign: 'left', marginTop:15}}>Votre satisfaction est notre préoccupation</Text>
          <SignInWithOAuth/>
        </View>
      </View>      
      )
    }

    const styles = StyleSheet.create({
       
      appImage:{
        width: 600,
        height: 750,
        objectFit: 'contain'

      },
      heading: {
        fontSize: 28,
        fontWeight: 'bold',
        color:  Colors.MagentoBlue

      },
      heading_2: {
        fontSize: 18,
        fontWeight: 'bold'
      }
    })

   
