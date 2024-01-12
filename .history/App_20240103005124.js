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

function Inicio({ navigation }) {
  return (
    <Stack.Navigator >
    
      <Stack.Screen name="sistemas" component={sistemas} options={{
        title: ''
      }} />
       <Stack.Screen name="win8" component={win8}/>
       <Stack.Screen name="win7" component={win7} />
       <Stack.Screen name="winxp" component={winxp} />
       <Stack.Screen name="win10" component={win10} />      
       <Stack.Screen name="rufos" component={rufos} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
       <Drawer.Screen name="inicio" component={Inicio} />
    </Drawer.Navigator>
    </NavigationContainer>
  );
}
