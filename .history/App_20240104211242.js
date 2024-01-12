import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { DrawerContentScrollView, DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableOpacity, Image, SafeAreaView, StyleSheet } from 'react-native';
import win7 from './src/telas/win7'
import win8 from './src/telas/win8'
import winxp from './src/telas/winxp'
import win10 from './src/telas/win10'
import rufos from './src/telas/rufos'
import inicio from './src/telas/inicio'
import sistemas from './src/telas/sistemas'
import { Icon } from 'react-native-elements'

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const CustomSidebarMenu = (props) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <TouchableOpacity>
          <Image
            source={{ uri: 'https://res.cloudinary.com/dib0twra5/image/upload/v1704409913/Formateme/lznu7bswpmapsmniftqx.png' }}
            style={styles.sideMenuProfileIcon}
          />
        </TouchableOpacity>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </SafeAreaView>
  );
};

function Inicio({ navigation }) {
  return (
    <Stack.Navigator >
      <Stack.Screen name="inicio" component={inicio}  options={{
        headerLeft: () => (
          <Icon
          name='bars' type="font-awesome" onPress={() => navigation.openDrawer()}/>
        ),
        headerRight: () => (
          <TouchableOpacity>
            <Image source={{ uri: 'https://res.cloudinary.com/dib0twra5/image/upload/v1704409913/Formateme/lznu7bswpmapsmniftqx.png' }} style={{ width: 50, height: 50, alignSelf: 'center' }}></Image>
          </TouchableOpacity>
        ),
        title: ''
      }}/>
    </Stack.Navigator>
  );
}

function Pendrive({ navigation }) {
  return (
    <Stack.Navigator >
        <Stack.Screen name="rufos" component={rufos} options={{
         headerLeft: () => (
          <Icon
          name='arrow-back-outline' type="ionicon" onPress={() => navigation.navigate('inicio')}/>
        ),  
        headerRight: () => (
          <TouchableOpacity>
            <Image source={{ uri: 'https://res.cloudinary.com/dib0twra5/image/upload/v1704409913/Formateme/lznu7bswpmapsmniftqx.png' }} style={{ width: 50, height: 50, alignSelf: 'center' }}></Image>
          </TouchableOpacity>
        ),
        title: ''
      }} />
    </Stack.Navigator>
  );
}

function Sistemas({ navigation }) {
  return (
    <Stack.Navigator >
        <Stack.Screen name="sistemas" component={sistemas}  options={{
        headerLeft: () => (
          <Icon
          name='bars' type="font-awesome" onPress={() => navigation.openDrawer()}/>
        ),
        headerRight: () => (
          <TouchableOpacity>
            <Image source={{ uri: 'https://res.cloudinary.com/dib0twra5/image/upload/v1704409913/Formateme/lznu7bswpmapsmniftqx.png' }} style={{ width: 50, height: 50, alignSelf: 'center' }}></Image>
          </TouchableOpacity>
        ),
        title: ''
      }}/>
       <Stack.Screen name="win8" component={win8}  options={{   
         headerLeft: () => (
          <Icon
          name='arrow-back-outline' type="ionicon" onPress={() => navigation.navigate('sistemas')}/>
        ),    
        headerRight: () => (
          <TouchableOpacity>
            <Image source={{ uri: 'https://res.cloudinary.com/dib0twra5/image/upload/v1704409913/Formateme/lznu7bswpmapsmniftqx.png' }} style={{ width: 50, height: 50, alignSelf: 'center' }}></Image>
          </TouchableOpacity>
        ),
        title: ''
      }}/>
       <Stack.Screen name="win7" component={win7}  options={{    
         headerLeft: () => (
          <Icon
          name='arrow-back-outline' type="ionicon" onPress={() => navigation.navigate('sistemas')}/>
        ),   
        headerRight: () => (
          <TouchableOpacity>
            <Image source={{ uri: 'https://res.cloudinary.com/dib0twra5/image/upload/v1704409913/Formateme/lznu7bswpmapsmniftqx.png' }} style={{ width: 50, height: 50, alignSelf: 'center' }}></Image>
          </TouchableOpacity>
        ),
        title: ''
      }}/>
       <Stack.Screen name="winxp" component={winxp}  options={{    
         headerLeft: () => (
          <Icon
          name='arrow-back-outline' type="ionicon" onPress={() => navigation.navigate('sistemas')}/>
        ),  
        headerRight: () => (
          <TouchableOpacity>
            <Image source={{ uri: 'https://res.cloudinary.com/dib0twra5/image/upload/v1704409913/Formateme/lznu7bswpmapsmniftqx.png' }} style={{ width: 50, height: 50, alignSelf: 'center' }}></Image>
          </TouchableOpacity>
        ),
        title: ''
      }}/>
       <Stack.Screen name="win10" component={win10}  options={{    
        headerLeft: () => (
          <Icon
          name='arrow-back-outline' type="ionicon" onPress={() => navigation.navigate('sistemas')}/>
        ),    
        headerRight: () => (
          <TouchableOpacity>
            <Image source={{ uri: 'https://res.cloudinary.com/dib0twra5/image/upload/v1704409913/Formateme/lznu7bswpmapsmniftqx.png' }} style={{ width: 50, height: 50, alignSelf: 'center' }}></Image>
          </TouchableOpacity>
        ),
        title: ''
      }}/>      
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={{ headerShown: false }}
      drawerContent={(props) => <CustomSidebarMenu {...props} />}>
       <Drawer.Screen  name="Inicio" component={Inicio} options={{
          drawerActiveTintColor: 'black', drawerLabel: 'Tela inicial', drawerIcon: () => (
<Icon type="material-community" name="home" />
          )
        }} />
        <Drawer.Screen  name="Pendrive" component={Pendrive} options={{
          drawerActiveTintColor: 'black', drawerLabel: 'Pen drive bootável', drawerIcon: () => (
<Icon type="material-community" name="usb-flash-drive" />
          )
        }} />
          <Drawer.Screen  name="Sistemas" component={Sistemas} options={{
          drawerActiveTintColor: 'black', drawerLabel: 'Sistemas', drawerIcon: () => (
<Icon type="antdesign" name="iconfontdesktop" />
          )
        }} />
    </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    resizeMode: 'center',
    width: 400,
    height: 200,
    alignSelf: 'center',
    paddingTop: 20
  },
  iconStyle: {
    width: 15,
    height: 15,
    marginHorizontal: 5,
  },
  customItem: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
});