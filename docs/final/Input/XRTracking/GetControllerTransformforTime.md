# GetControllerTransformforTime

获取虚幻世界空间中当前帧附近指定时间的变换和可能的速度数据。这是为了与来自SetXRTimedInputActionDelegate的子帧输入动作计时数据一起使用，或者将来在核心输入系统中对时间戳的支持。有效的时间窗口取决于平台，但OpenXR的意图是最多从过去或未来的几帧中获取变换的时间。OpenXR规范表明，过去的50ms应该会返回一个准确的结果。对未来没有保证，但底层系统可能已经被设计成可以预测到50ms左右。在一些平台上，这将总是只返回一个缓存的位置和旋转，而忽略了时间。AngularVelocityRadPerSec是一个矢量，其方向是旋转轴，其长度是旋转速度，单位是弧度/秒。

目标是头戴式显示器功能库

## 图示

![]($-20221218-19301411.png)

## Inputs

在。执行。

世界背景。对象参考。

控制器索引：整数。

动作来源。名称。

时间：时间范围结构。  

## Outputs

出：执行。

时间被使用。布尔值。

方向：旋转器。

位置。向量。

提供的线性速度。布尔型。

线性速度。矢量。

提供的角速度。布尔型。

角速度Rad Per Sec:矢量。

提供的线性加速度。布尔型。

线性加速度。矢量。

返回值。布尔值。获取虚幻世界空间中当前帧附近指定时间的变换和可能的速度数据。这是为了与来自SetXRTimedInputActionDelegate的子帧输入动作计时数据一起使用，或者在核心输入系统中对时间戳的未来支持。有效的时间窗口取决于平台，但OpenXR的意图是最多从过去或未来的几帧中获取变换的时间。OpenXR规范表明，过去的50ms应该会返回一个准确的结果。对未来没有保证，但底层系统可能已经被设计成可以预测到50ms左右。在一些平台上，这将总是只返回一个缓存的位置和旋转，而忽略了时间。AngularVelocityRadPerSec是一个矢量，其方向是旋转轴，其长度是旋转速度，单位是弧度/秒。

Get the transform and potentially velocity data at a specified time near the current frame in unreal world space.. This is intended for use with sub-frame input action timing data from SetXRTimedInputActionDelegate, or future support for timestamps in the core input system.. The valid time window is platform dependent, but the intention per OpenXR is to fetch transforms for times from, at most, the previous few frames in the past or future.. The OpenXR spec suggests that 50ms in the past should return an accurate result. There is no guarantee for the future, but the underlying system is likely to have been. designed to predict out to about 50ms as well.. On some platforms this will always just return a cached position and rotation, ignoring time. bTimeWasUsed will be false in that case.. AngularVelocityRadPerSec is a vector whose direction is the axis of rotation and whoes length is the speed of rotation in radians per second.

Target is Head Mounted Display Function Library

## 图示

![]($-20221218-19301411.png)

## Inputs

In: Exec.

World Context: Object Reference.

Controller Index: Integer.

Motion Source: Name.

Time: Timespan Structure.  

## Outputs

Out: Exec.

Time Was Used: Boolean.

Orientation: Rotator.

Position: Vector.

Provided Linear Velocity: Boolean.

Linear Velocity: Vector.

Provided Angular Velocity: Boolean.

Angular Velocity Rad Per Sec: Vector.

Provided Linear Acceleration: Boolean.

Linear Acceleration: Vector.

Return Value: Boolean. Get the transform and potentially velocity data at a specified time near the current frame in unreal world space.. This is intended for use with sub-frame input action timing data from SetXRTimedInputActionDelegate, or future support for timestamps in the core input system.. The valid time window is platform dependent, but the intention per OpenXR is to fetch transforms for times from, at most, the previous few frames in the past or future.. The OpenXR spec suggests that 50ms in the past should return an accurate result. There is no guarantee for the future, but the underlying system is likely to have been. designed to predict out to about 50ms as well.. On some platforms this will always just return a cached position and rotation, ignoring time. bTimeWasUsed will be false in that case.. AngularVelocityRadPerSec is a vector whose direction is the axis of rotation and whoes length is the speed of rotation in radians per second..

