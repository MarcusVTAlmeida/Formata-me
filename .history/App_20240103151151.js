import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import win7 from './src/telas/win7'
import win8 from './src/telas/win8'
import winxp from './src/telas/winxp'
import win10 from './src/telas/win10'
import rufos from './src/telas/rufos'
import inicio from './src/telas/inicio'
import sistemas from './src/telas/sistemas'
import { FontAwesome } from '@expo/vector-icons';
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function Inicio({ navigation }) {
  return (
    <Stack.Navigator >
      <Stack.Screen name="inicio" component={inicio} />
      <Stack.Screen name="sistemas" component={sistemas} options={{
        title: ''
      }} />
       <Stack.Screen name="win8" component={win8}/>
       <Stack.Screen name="win7" component={win7} />
       <Stack.Screen name="winxp" component={winxp} />
       <Stack.Screen name="win10" component={win10} />      
     
       <Stack.Screen name="rufos" component={rufos} options={{
        headerLeft: () => (
          <FontAwesome name="bars" size={24} color="black" onPress={() => navigation.openDrawer()} />
        ),
        headerRight: () => (
          <TouchableOpacity>
            <Image source={{ uri: 'https://res.cloudinary.com/dib0twra5/image/upload/v1631563329/Raul%20imagens/RaulIcon_hjazqi.png' }} style={{ width: 50, height: 50, alignSelf: 'center' }}></Image>
          </TouchableOpacity>
        ),
        title: ''
      }} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={{ headerShown: false }}>
       <Drawer.Screen  name="Inicio" component={Inicio} />
    </Drawer.Navigator>
    </NavigationContainer>
  );
}
