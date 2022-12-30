# GetDeviceWorldPose

Cross XR-System query that returns a specific device's position and orientation in world space.

Target is Head Mounted Display Function Library

## 图示

![]($-20221218-19301653.png)

## Inputs

In: Exec.

XRDevice Id: XRDevice Id Structure (by ref). Specifies the device you're querying for..  

## Outputs

Out: Exec.

Is Tracked: Boolean. [out] Details if the specified device is tracked (i.e. should the rest of the outputs be used).

Orientation: Rotator. [out] Represents the device's current rotation - NOTE: this value is not late updated and will be behind the render thread.

Has Positional Tracking: Boolean. [out] Details if the specified device has positional tracking (i.e. if the position output should be used).

Position: Vector. [out] Represents the device's current position - NOTE: this value is not late updated and will be behind the render thread.

