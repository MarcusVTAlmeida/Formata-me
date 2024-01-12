export declare enum RewardedAdEventType {
    /**
     * An event fired when a rewarded ad has loaded.
     *
     * This type differs from `AdEventType.LOADED` as when a rewarded ad is loaded,
     * an additional data payload is provided to the event handler containing the ad reward
     * (assuming the user earns the reward).
     *
     * The reward contains a `type` and `amount`.
     *
     * #### Example
     *
     * ```js
     * import { RewardedAdEventType } from 'react-native-google-mobile-ads';
     *
     * rewardedAd.addEventListener(RewardedAdEventType.LOADED, (reward) => {
     *   console.log(`Rewarded Ad loaded with ${data.amount} ${data.type} as reward`);
     *   // E.g. "Rewarded Ad loaded with 50 coins as reward"
     *   rewardedAd.show();
     * });
     * ```
     */
    LOADED = "rewarded_loaded",
    /**
     * An event fired when the user earned the reward for the video. If the user does not earn a reward,
     * the `AdEventType.CLOSED` event will be fired with no rewarded event.
     *
     * The reward contains a `type` and `amount`.
     *
     * #### Example
     *
     * ```js
     * import { RewardedAdEventType } from 'react-native-google-mobile-ads';
     *
     * rewardedAd.addEventListener(RewardedAdEventType.EARNED_REWARD, (reward) => {
     *   console.log(`User earned ${data.amount} ${data.type}`);
     *   // E.g. "User earned 50 coins"
     * });
     * ```
     */
    EARNED_REWARD = "rewarded_earned_reward"
}
//# sourceMappingURL=RewardedAdEventType.d.ts.map