# GetTrackedDevicePositionandOrien-

获取具有指定 ID 的设备的方向和位置（在设备空间）。

目标是 Steam VRF 函数库

## 图示

![](/uploads/projects/ue-bluprint/20221218-21041618.png)

## Inputs

设备标识。整数。要获取跟踪信息的设备的 ID。

## Outputs

出来的位置。矢量。(out) 设备的当前位置。

出场方向。旋转器。(out) 设备的当前方向。

返回值。布尔值。如果指定的设备 ID 在这一帧有一个有效的跟踪姿势，则为真，否则为假。

<hr>

Gets the orientation and position (in device space) of the device with the specified ID

Target is Steam VRFunction Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-21041618.png)

## Inputs

Device Id: Integer. Id of the device to get tracking info for.

## Outputs

Out Position: Vector. (out) Current position of the device.

Out Orientation: Rotator. (out) Current orientation of the device.

Return Value: Boolean. True if the specified device id had a valid tracking pose this frame, false otherwise.
