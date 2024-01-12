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

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function Sistemas({ navigation }) {
  return (
    <Stack.Navigator >
      <Stack.Screen name="sistemas" component={sistemas} options={{
        title: ''
      }} />
       <Stack.Screen name="win8" component={win8}/>
       <Stack.Screen name="win7" component={win7} />
       <Drawer.Screen name="winxp" component={winxp} />
       <Drawer.Screen name="win10" component={win10} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
       <Drawer.Screen name="inicio" component={inicio} />
       <Drawer.Screen name="win8" component={win8}/>
       <Drawer.Screen name="win7" component={win7} />
       <Drawer.Screen name="winxp" component={winxp} />
       <Drawer.Screen name="rufos" component={rufos} />
       <Drawer.Screen name="Sistemas" component={Sistemas} />
    </Drawer.Navigator>
    </NavigationContainer>
  );
}