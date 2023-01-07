# SetSteamVRGlobalPredictedSeconds-

设置全局 PredictedSecondsFromNow 的当前值，用于任何 Get Pose Action Data 调用（即获取控制器转换）。一个-9999.f 的值将触发 GetPoseActionDataForNextFrame，否则 GetPoseActionRelativeToNow 将以这个值被调用。

目标是 Steam VRInput 设备功能库

## 图示

![](/uploads/projects/ue-bluprint/20221218-21044997.png)

## Inputs

在。执行。

新值。Float（单精度）。将被 SteamVRInput 设备用于获取动作姿态数据调用的 PredictedSecondsFromNow 的值。

## Outputs

出：执行。

返回值。Float（单精度）。 float - 当前从 SteamVRInput 设备中预测的秒数。

<hr>

Sets the the current value of the global PredictedSecondsFromNow to use in any Get Pose Action Data calls (i.e. Getting controller transform). A value of -9999.f will trigger a GetPoseActionDataForNextFrame, otherwise GetPoseActionRelativeToNow will be called with this value

Target is Steam VRInput Device Function Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-21044997.png)

## Inputs

In: Exec.

New Value: Float (single-precision). The value for PredictedSecondsFromNow that will be used by the SteamVRInput device for Get Action Pose Data calls.

## Outputs

Out: Exec.

Return Value: Float (single-precision). float - The current Predicted Seconds From Now from the SteamVRInput device.
