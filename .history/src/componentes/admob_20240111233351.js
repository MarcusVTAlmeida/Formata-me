import React from 'react';
import { View } from 'react-native';
import { BannerAd, BannerAdSize } from 'react-native-google-mobile-ads';

const App = () => {
  return (
    <View style={{ alignItems: 'center', alignSelf: 'center' }}>
      <BannerAd
        size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
        unitId={"	ca-app-pub-3940256099942544/6300978111"}
        onAdFailedToLoad={(error) => console.error(error)}
      />
    </View>
  );
}

export default App;