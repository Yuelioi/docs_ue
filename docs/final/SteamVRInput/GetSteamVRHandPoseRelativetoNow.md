# GetSteamVRHandPoseRelativetoNow

返回从当前时间开始的任何时间点的手变数据，给定一个相对的秒数。

目标是Steam VRInput设备功能库

## 图示

![]($-20221218-21043829.png)

## Inputs

在。执行。

手。ESteamVRHand Enum。我们要检索转换的手。

从现在起预测的秒数。Float（单精度）。  

## Outputs

出：执行。

位置。向量。

方向：旋转器。

返回值。布尔值。位置 - 指针在该时间点的位置，给定一个相对的秒数，从当前时间开始。

Returns the data for the hand transform at any point in time from current time, given a relative number of seconds

Target is Steam VRInput Device Function Library

## 图示

![]($-20221218-21043829.png)

## Inputs

In: Exec.

Hand: ESteamVRHand Enum. The hand that we're going to retrieve the transform for.

Predicted Seconds from Now: Float (single-precision).  

## Outputs

Out: Exec.

Position: Vector.

Orientation: Rotator.

Return Value: Boolean. Position - The position of the hand at the point in time, given a relative number of seconds, from the current time.

