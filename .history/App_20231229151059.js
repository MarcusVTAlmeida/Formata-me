import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import win7 from './src/telas/win7'
import win8 from './src/telas/win8'
import winxp from './src/telas/winxp'
import rufos from './src/telas/rufos'
import inicio from './src/telas/inicio'

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
       <Drawer.Screen name="win8" component={win8}/>
       <Drawer.Screen name="win7" component={win7} />
       <Drawer.Screen name="winxp" component={winxp} />
       <Drawer.Screen name="rufos" component={rufos} />
       <Drawer.Screen name="inicio" component={inicio} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}
