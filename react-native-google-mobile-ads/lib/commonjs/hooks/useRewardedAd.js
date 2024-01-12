"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useRewardedAd = useRewardedAd;
var _react = require("react");
var _useDeepCompareEffect = _interopRequireDefault(require("use-deep-compare-effect"));
var _RewardedAd = require("../ads/RewardedAd");
var _useFullScreenAd = require("./useFullScreenAd");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
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

/**
 * React Hook for Rewarded Ad.
 *
 * @param adUnitId The Ad Unit ID for the Rewarded Ad. You can find this on your Google Mobile Ads dashboard. You can destroy ad instance by setting this value to null.
 * @param requestOptions Optional RequestOptions used to load the ad.
 */
function useRewardedAd(adUnitId) {
  let requestOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  const [rewardedAd, setRewardedAd] = (0, _react.useState)(null);
  (0, _useDeepCompareEffect.default)(() => {
    setRewardedAd(() => {
      return adUnitId ? _RewardedAd.RewardedAd.createForAdRequest(adUnitId, requestOptions) : null;
    });
  }, [adUnitId, requestOptions]);
  return (0, _useFullScreenAd.useFullScreenAd)(rewardedAd);
}
//# sourceMappingURL=useRewardedAd.js.map