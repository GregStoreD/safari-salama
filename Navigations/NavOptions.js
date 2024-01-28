import { View, Image, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import Constants from 'expo-constants';
import tw from 'tailwind-rn'

const data = [
  {
    id: "23",
    title: "Reservez un taxi",
    imageSource: require('../assets/images/Taxi_Brazza.png'),
    screen: "MapScreen",
  },
  {
    id: "45",
    title: "Nos offres",
    imageSource: require('../assets/images/car.jpg'),
    screen: "Home",
  },
];

const NavOptions = () => {

  const naviagtion = useNavigation();
  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => {naviagtion.navigate(item.screen)}}
    >
      <Image
        source={item.imageSource}
        style={{ width: 150, height: 150, margin: 5 }}
      />
    </TouchableOpacity>
  );

  return (
    <View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={3}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 10,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default NavOptions
