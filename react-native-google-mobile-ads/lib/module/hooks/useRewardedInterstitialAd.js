/*
 * Copyright (c) 2016-present Invertase Limited & Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this library except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

import { useState } from 'react';
import useDeepCompareEffect from 'use-deep-compare-effect';
import { RewardedInterstitialAd } from '../ads/RewardedInterstitialAd';
import { useFullScreenAd } from './useFullScreenAd';

/**
 * React Hook for Rewarded Interstitial Ad.
 *
 * @param adUnitId The Ad Unit ID for the Rewarded Interstitial Ad. You can find this on your Google Mobile Ads dashboard. You can destroy ad instance by setting this value to null.
 * @param requestOptions Optional RequestOptions used to load the ad.
 */
export function useRewardedInterstitialAd(adUnitId) {
  let requestOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  const [rewardedInterstitialAd, setRewardedInterstitialAd] = useState(null);
  useDeepCompareEffect(() => {
    setRewardedInterstitialAd(() => {
      return adUnitId ? RewardedInterstitialAd.createForAdRequest(adUnitId, requestOptions) : null;
    });
  }, [adUnitId, requestOptions]);
  return useFullScreenAd(rewardedInterstitialAd);
}
//# sourceMappingURL=useRewardedInterstitialAd.js.map