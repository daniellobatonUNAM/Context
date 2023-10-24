import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import IndexScreen from './src/screens/IndexScreen';

const Navigator = createStackNavigator();

function Stack() {
  return (
    <Navigator.Navigator
      initialRouteName="Index"
    >

      <Navigator.Screen name="Index" component={IndexScreen} />
      
    </Navigator.Navigator>
  );
}

export default function Navigation(){

    return (

        <NavigationContainer>

            <Stack/>

        </NavigationContainer>

    )

}