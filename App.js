import React, { useEffect, useState } from "react";
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
import boot from './src/telas/boot'
import utilitarios from './src/telas/utilitarios'
import Admob from './src/componentes/admob'
import { Icon } from 'react-native-elements'
import { BannerAd, BannerAdSize, InterstitialAd } from 'react-native-google-mobile-ads';

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

function Utilitarios({ navigation }) {
  return (
    <Stack.Navigator >
      <Stack.Screen name="utilitarios" component={utilitarios} options={{
        headerLeft: () => (
          <Icon
          name='arrow-back-outline' type="ionicon" color="#2F4F4F" onPress={() => navigation.navigate('Inicio')} />
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

function Boot({ navigation }) {
  return (
    <Stack.Navigator >
      <Stack.Screen name="boot" component={boot} options={{
        headerLeft: () => (
          <Icon
          name='arrow-back-outline' type="ionicon" color="#2F4F4F" onPress={() => navigation.navigate('Inicio')} />
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

function Inicio({ navigation }) {
  return (
    <Stack.Navigator >
      <Stack.Screen name="inicio" component={inicio} options={{
        headerLeft: () => (
          <Icon
            name='bars' type="font-awesome" color="#2F4F4F" onPress={() => navigation.openDrawer()} />
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

function Pendrive({ navigation }) {
  return (
    <Stack.Navigator >
      <Stack.Screen name="rufos" component={rufos} options={{
        headerLeft: () => (
          <Icon
          name='arrow-back-outline' type="ionicon" color="#2F4F4F" onPress={() => navigation.navigate('Inicio')} />
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
      <Stack.Screen name="sistemas" component={sistemas} options={{
        headerLeft: () => (
          <Icon
          name='arrow-back-outline' type="ionicon" color="#2F4F4F" onPress={() => navigation.navigate('Inicio')} />
        ),
        headerRight: () => (
          <TouchableOpacity>
            <Image source={{ uri: 'https://res.cloudinary.com/dib0twra5/image/upload/v1704409913/Formateme/lznu7bswpmapsmniftqx.png' }} style={{ width: 50, height: 50, alignSelf: 'center' }}></Image>
          </TouchableOpacity>
        ),
        title: ''
      }} />
      <Stack.Screen name="win8" component={win8} options={{
        headerLeft: () => (
          <Icon
            name='arrow-back-outline' type="ionicon" color="#2F4F4F" onPress={() => navigation.navigate('sistemas')} />
        ),
        headerRight: () => (
          <TouchableOpacity>
            <Image source={{ uri: 'https://res.cloudinary.com/dib0twra5/image/upload/v1704409913/Formateme/lznu7bswpmapsmniftqx.png' }} style={{ width: 50, height: 50, alignSelf: 'center' }}></Image>
          </TouchableOpacity>
        ),
        title: ''
      }} />
      <Stack.Screen name="win7" component={win7} options={{
        headerLeft: () => (
          <Icon
            name='arrow-back-outline' type="ionicon" color="#2F4F4F" onPress={() => navigation.navigate('sistemas')} />
        ),
        headerRight: () => (
          <TouchableOpacity>
            <Image source={{ uri: 'https://res.cloudinary.com/dib0twra5/image/upload/v1704409913/Formateme/lznu7bswpmapsmniftqx.png' }} style={{ width: 50, height: 50, alignSelf: 'center' }}></Image>
          </TouchableOpacity>
        ),
        title: ''
      }} />
      <Stack.Screen name="winxp" component={winxp} options={{
        headerLeft: () => (
          <Icon
            name='arrow-back-outline' type="ionicon" color="#2F4F4F" onPress={() => navigation.navigate('sistemas')} />
        ),
        headerRight: () => (
          <TouchableOpacity>
            <Image source={{ uri: 'https://res.cloudinary.com/dib0twra5/image/upload/v1704409913/Formateme/lznu7bswpmapsmniftqx.png' }} style={{ width: 50, height: 50, alignSelf: 'center' }}></Image>
          </TouchableOpacity>
        ),
        title: ''
      }} />
      <Stack.Screen name="win10" component={win10} options={{
        headerLeft: () => (
          <Icon
            name='arrow-back-outline' type="ionicon" color="#2F4F4F" onPress={() => navigation.navigate('sistemas')} />
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

const adUnitId = 'ca-app-pub-3940256099942544/1033173712';

const interstitial = InterstitialAd.createForAdRequest(adUnitId, {
  requestNonPersonalizedAdsOnly: true,
  keywords: ['fashion', 'clothing'],
});

export default function App() {
  useEffect(() => {
    interstitial.load();
    setTimeout(() => {
      interstitial.show()
    }, 10000);
  }, []);
  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={{ headerShown: false }}
        drawerContent={(props) => <CustomSidebarMenu {...props} />}>
        <Drawer.Screen name="Inicio" component={Inicio} options={{
          drawerActiveTintColor: '#2F4F4F', drawerLabel: 'Tela inicial', drawerIcon: () => (
            <Icon type="material-community" name="home" color="#2F4F4F" />
          )
        }} />
        <Drawer.Screen name="Pendrive" component={Pendrive} options={{
          drawerActiveTintColor: '#2F4F4F', drawerLabel: 'Pen drive bootável', drawerIcon: () => (
            <Icon type="material-community" name="usb-flash-drive" color="#2F4F4F" />
          )
        }} />
        <Drawer.Screen name="Sistemas" component={Sistemas} options={{
          drawerActiveTintColor: '#2F4F4F', drawerLabel: 'Sistemas', drawerIcon: () => (
            <Icon type="antdesign" name="iconfontdesktop" color="#2F4F4F" />
          )
        }} />
        <Drawer.Screen name="Boot" component={Boot} options={{
          drawerActiveTintColor: '#2F4F4F', drawerLabel: 'Boot', drawerIcon: () => (
            <Icon type="antdesign" name="setting" color="#2F4F4F" />
          )
        }} />
        <Drawer.Screen name="Utilitarios" component={Utilitarios} options={{
          drawerActiveTintColor: '#2F4F4F', drawerLabel: 'Utilitarios', drawerIcon: () => (
            <Icon type="antdesign" name="tool" color="#2F4F4F" />
          )
        }} />

      </Drawer.Navigator>
      <Admob />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    resizeMode: 'center',
    width: 280,
    height: 280,
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