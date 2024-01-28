import {FontAwesome, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { View, Text, Image } from 'react-native'
import {  useUser } from '@clerk/clerk-expo'
import React from 'react'


export default function Header() {

  const {isLoaded,isSignedIn,user} = useUser();

    if (!isLoaded || !isSignedIn){
        return null
    }
  return (
    <View style={{display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between'
    }}>
      <View style={{
        display: 'flex',
        flexDirection: 'row',
        gap: 7,
        alignItems: 'center'
      }}>
        <Image source={{uri:user.imageUrl}}
         style={{width: 45, height: 45, borderRadius:99}}   
        />
        <View>
             <Text>Bonjour, 👋</Text>
            <Text>{user.firstName}</Text>
        </View>
      </View>
        <Ionicons name='notifications-outline'
                size={24}
                color='black'
        />
  </View>
  )
}