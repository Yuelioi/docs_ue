# GetSteamVRGlobalPredictedSeconds-

返回全局 PredictedSecondsFromNow 的当前值，用于任何 Get Pose Action Data 调用（即获取控制器转换）。一个-9999.f 的值会触发 GetPoseActionDataForNextFrame，否则 GetPoseActionRelativeToNow 会以这个值被调用。

目标是 Steam VRInput 设备功能库

## 图示

![](/uploads/projects/ue-bluprint/20221218-21043708.png)

## Inputs

In: Exec.

## Outputs

出：执行。

返回值。Float（单精度）。 float - 当前从 SteamVRInput 设备中预测的秒数。

<hr>

Returns the the current value of the global PredictedSecondsFromNow use in any Get Pose Action Data calls (i.e. Getting controller transform). A value of -9999.f triggers a GetPoseActionDataForNextFrame, otherwise GetPoseActionRelativeToNow is called with this value

Target is Steam VRInput Device Function Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-21043708.png)

## Inputs

In: Exec.

## Outputs

Out: Exec.

Return Value: Float (single-precision). float - The current Predicted Seconds From Now from the SteamVRInput device.
