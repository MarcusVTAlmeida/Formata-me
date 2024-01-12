import React from 'react';
import { View } from 'react-native';
import { BannerAd, BannerAdSize } from 'react-native-google-mobile-ads';
//ca-app-pub-2028860531808564/4300685586 admob
const App = () => {
  return (  
        <View style={{ alignItems: 'center', alignSelf: 'center' }}> 
        <BannerAd
        size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
        unitId={"ca-app-pub-2028860531808564/1141385760"}
        onAdFailedToLoad={(error) => console.error(error)}      
      />      
     </View>
      );
}

export default App;