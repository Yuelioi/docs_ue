# GetSteamVRGlobalPredictedSeconds-

返回全局PredictedSecondsFromNow的当前值，用于任何Get Pose Action Data调用（即获取控制器转换）。一个-9999.f的值会触发GetPoseActionDataForNextFrame，否则GetPoseActionRelativeToNow会以这个值被调用。

目标是Steam VRInput设备功能库

## 图示

![]($-20221218-21043708.png)

## Inputs

In: Exec.  

## Outputs

出：执行。

返回值。Float（单精度）。 float - 当前从SteamVRInput设备中预测的秒数。
