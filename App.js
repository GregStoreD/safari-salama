import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo'
import { StyleSheet, SafeAreaView, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import   TabNavigation from './Navigations/TabNavigation'
import   MapScreen from './Screens/MapScreen';
import Profile from './Screens/Profile';
import { Provider} from 'react-redux'
import { useFonts } from 'expo-font'
import   Login from './Screens/Login'
import   Home from './Screens/Home' 
import { store } from './store';

export default function App() {

  const isLoggedIn = true;
  const Stack = createStackNavigator();
  const [fontsLoaded] = useFonts({
    'appfont': require('./assets/fonts/Outfit-Regular.ttf'),
  });

  if (!fontsLoaded){
    return null;
  }

  return (
      <ClerkProvider publishableKey={"pk_test_YW11c2luZy1naG9zdC0zNC5jbGVyay5hY2NvdW50cy5kZXYk"}>
      <Provider store={store}>
        <SafeAreaView style={{flex: 1}}>
          <SignedIn>
           <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen 
                name="Home" 
                component={Home}
                options={{
                  headerShown: false,  
                }}  
              />
               <Stack.Screen 
                name="MapScreen" 
                component={MapScreen}
                options={{
                  headerShown: false,  
                }}  
              />
               <Stack.Screen 
                name="Profile" 
                component={Profile}
                options={{
                  headerShown: false,  
                }}  
              />
            </Stack.Navigator>  
            </NavigationContainer> 
          </SignedIn> 
          <SignedOut>
            <Login/>
          </SignedOut>
        </SafeAreaView>
      </Provider>
      </ClerkProvider>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
