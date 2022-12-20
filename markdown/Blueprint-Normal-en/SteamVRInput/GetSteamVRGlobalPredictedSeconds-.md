# GetSteamVRGlobalPredictedSeconds-

Returns the the current value of the global PredictedSecondsFromNow use in any Get Pose Action Data calls (i.e. Getting controller transform). A value of -9999.f triggers a GetPoseActionDataForNextFrame, otherwise GetPoseActionRelativeToNow is called with this value

Target is Steam VRInput Device Function Library

## 图示

![]($-20221218-21043708.png)

## Inputs

In: Exec.  

## Outputs

Out: Exec.

Return Value: Float (single-precision). float - The current Predicted Seconds From Now from the SteamVRInput device.

