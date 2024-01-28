import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { FontAwesome, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { View, Text, StyleSheet, Dimensions, Button } from 'react-native'
import SearchBar from '../Components/Home/SearchBar';
import NavOptions from '../Navigations/NavOptions';
import Header from '../Components/Home/Header';
import { useAuth } from '@clerk/clerk-expo'
//import { GOOGLE_MAPS_APIKEY } from '@env'
import React from 'react'

export default function Home() {

    const {isLoaded, signOut } = useAuth ();
    return (
    <View style={{padding: 20, marginTop: 25}}>
        <Header/>
        <SearchBar setSearchText={(value)=>console.log(value)}/>
          <Text></Text>
          {/* <GooglePlacesAutocomplete 
            placeholder='Depart'
            nearbyPlacesAPI='GooglePlacesSearch'
            debounce={400}
          /> */}
          <NavOptions/>
          {/* <TabNavigation/>  */}         
          <Text>Reservez votre taxi</Text>
          <Ionicons name='checkmark-circle'
              size={24}
              color='Green'
          />
    </View>   
  )}

  const styles = StyleSheet.create({       
    appImage:{
      width:Dimensions.get('screen').width*0.9,
      height: 400,
      borderRadius: 25,
      objectFit: 'contain'
    },
    heading: {
      fontSize: 28,
      fontWeight: 'bold',
    }
  })

   
