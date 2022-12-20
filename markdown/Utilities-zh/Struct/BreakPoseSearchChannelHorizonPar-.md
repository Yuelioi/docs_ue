# BreakPoseSearchChannelHorizonPar-

Adds a node that breaks a 'PoseSearchChannelHorizonParams' into its member fields

## 图示

![]($-20221218-14411417.png)

## Inputs

Pose Search Channel Horizon Params: Pose Search Channel Horizon Params Structure (by ref).  

## Outputs

Weight: Float (single-precision). Weight:. Total score contribution of all samples within this horizon, normalized with other horizons.

Interpolate: Boolean. Interpolate:. Whether to interpolate samples within this horizon.

Initial Value: Float (single-precision). Initial Value:. Horizon sample weights will be interpolated from InitialValue to 1.0 - InitialValue and then normalized.

Interpolation Method: EAlphaBlendOption Enum. Interpolation Method:. Curve type for horizon interpolation.

