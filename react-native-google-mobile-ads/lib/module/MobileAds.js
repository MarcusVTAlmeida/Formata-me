import RNGoogleMobileAdsModule from './NativeGoogleMobileAdsModule';
import { validateAdRequestConfiguration } from './validateAdRequestConfiguration';
import { SharedEventEmitter } from './internal/SharedEventEmitter';
import { GoogleMobileAdsNativeEventEmitter } from './internal/GoogleMobileAdsNativeEventEmitter';
const NATIVE_MODULE_EVENT_SUBSCRIPTIONS = {};
const nativeEvents = ['google_mobile_ads_app_open_event', 'google_mobile_ads_interstitial_event', 'google_mobile_ads_rewarded_event', 'google_mobile_ads_rewarded_interstitial_event'];
class MobileAdsModule {
  constructor() {
    if (nativeEvents && nativeEvents.length) {
      for (let i = 0, len = nativeEvents.length; i < len; i++) {
        this.subscribeToNativeModuleEvent(nativeEvents[i]);
      }
    }
  }
  subscribeToNativeModuleEvent(eventName) {
    if (!NATIVE_MODULE_EVENT_SUBSCRIPTIONS[eventName]) {
      GoogleMobileAdsNativeEventEmitter.addListener(eventName, event => {
        SharedEventEmitter.emit(`${eventName}:${event.adUnitId}:${event.requestId}`, event);
      });
      NATIVE_MODULE_EVENT_SUBSCRIPTIONS[eventName] = true;
    }
  }
  initialize() {
    return RNGoogleMobileAdsModule.initialize();
  }
  setRequestConfiguration(requestConfiguration) {
    let config;
    try {
      config = validateAdRequestConfiguration(requestConfiguration);
    } catch (e) {
      if (e instanceof Error) {
        throw new Error(`googleMobileAds.setRequestConfiguration(*) ${e.message}`);
      }
    }
    return RNGoogleMobileAdsModule.setRequestConfiguration(config);
  }
  openAdInspector() {
    return RNGoogleMobileAdsModule.openAdInspector();
  }
  openDebugMenu(adUnit) {
    if (!adUnit) throw new Error('googleMobileAds.openDebugMenu expected a non-empty string value');
    RNGoogleMobileAdsModule.openDebugMenu(adUnit);
  }
}
const MobileAdsInstance = new MobileAdsModule();
export const MobileAds = () => {
  return MobileAdsInstance;
};
export default MobileAds;
//# sourceMappingURL=MobileAds.js.map