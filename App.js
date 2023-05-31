import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const Stack = createNativeStackNavigator();

import EkranHome from './screens/EkranHome';
import EkranUsluge from './screens/EkranUsluge';
import EkranProfil from './screens/EkranProfil';


export default function App() {
  const TabsEkrani = () => {
    return (
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: { paddingTop: StatusBar.currentHeight }
        }}
      >
        <Tab.Screen name='Naslovna' component={EkranHome} options={{ headerShown: false }} />
        <Tab.Screen name='Profil' component={EkranProfil} options={{ headerShown: false }} />

      </Tab.Navigator>
    )
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='HomePage' component={TabsEkrani} options={{ headerShown: false }} />
        <Stack.Screen name='Usluge' component={EkranUsluge} options={{ headerShown: false }} />

      </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flexDirection: 'row'
  }
});
