# GetControllerTransformforTime

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

