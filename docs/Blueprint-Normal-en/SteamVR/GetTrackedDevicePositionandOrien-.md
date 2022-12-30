# GetTrackedDevicePositionandOrien-

Gets the orientation and position (in device space) of the device with the specified ID

Target is Steam VRFunction Library

## 图示

![]($-20221218-21041618.png)

## Inputs

Device Id: Integer. Id of the device to get tracking info for.  

## Outputs

Out Position: Vector. (out) Current position of the device.

Out Orientation: Rotator. (out) Current orientation of the device.

Return Value: Boolean. True if the specified device id had a valid tracking pose this frame, false otherwise.

