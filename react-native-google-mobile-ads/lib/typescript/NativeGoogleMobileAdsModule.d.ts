import type { TurboModule } from 'react-native';
import { UnsafeObject } from 'react-native/Libraries/Types/CodegenTypes';
import { AdapterStatus } from './types';
export interface Spec extends TurboModule {
    initialize(): Promise<AdapterStatus[]>;
    setRequestConfiguration(requestConfiguration?: UnsafeObject): Promise<void>;
    openAdInspector(): Promise<void>;
    openDebugMenu(adUnit: string): void;
}
declare const _default: Spec;
export default _default;
//# sourceMappingURL=NativeGoogleMobileAdsModule.d.ts.map