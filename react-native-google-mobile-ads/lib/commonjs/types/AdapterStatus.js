"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InitializationState = void 0;
let InitializationState = /*#__PURE__*/function (InitializationState) {
  InitializationState[InitializationState["AdapterInitializationStateNotReady"] = 0] = "AdapterInitializationStateNotReady";
  InitializationState[InitializationState["AdapterInitializationStateReady"] = 1] = "AdapterInitializationStateReady";
  return InitializationState;
}({});
/**
 * An immutable snapshot of a mediation adapter's initialization status.
 */
exports.InitializationState = InitializationState;
//# sourceMappingURL=AdapterStatus.js.map