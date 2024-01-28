import {FontAwesome, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'

export default function SearchBar({setSearchText}) {

    const [searchInput, setSearchInput]=useState();

  return (
    <View style={{marginTop:15}}>
        <View style={{
          display: 'flex',
          flexDirection: 'row',
          gap: 5,
          alignItems: 'center',
          borderWidth:0.7, 
          borderColor: '#dadbde', 
          borderRadius: 15
        }}>
         <MaterialCommunityIcons name="layers-search-outline" size={24}/>
        <TextInput placeholder='Rechercher'
                   onChangeText={(value)=>setSearchInput(value)}
                   onSubmitEditing={()=>setSearchText(searchInput)}
                   style={{width: '100%'}}
        />
      </View>
    </View>
  )
}