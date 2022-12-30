# SetSteamVRGlobalPredictedSeconds-

Sets the the current value of the global PredictedSecondsFromNow to use in any Get Pose Action Data calls (i.e. Getting controller transform). A value of -9999.f will trigger a GetPoseActionDataForNextFrame, otherwise GetPoseActionRelativeToNow will be called with this value

Target is Steam VRInput Device Function Library

## 图示

![]($-20221218-21044997.png)

## Inputs

In: Exec.

New Value: Float (single-precision). The value for PredictedSecondsFromNow that will be used by the SteamVRInput device for Get Action Pose Data calls.  

## Outputs

Out: Exec.

Return Value: Float (single-precision). float - The current Predicted Seconds From Now from the SteamVRInput device.

