# GetTrackedDevicePositionandOrien-

获取具有指定ID的设备的方向和位置（在设备空间）。

目标是Steam VRF函数库

## 图示

![]($-20221218-21041618.png)

## Inputs

设备标识。整数。要获取跟踪信息的设备的ID。  

## Outputs

出来的位置。矢量。(out) 设备的当前位置。

出场方向。旋转器。(out) 设备的当前方向。

返回值。布尔值。如果指定的设备ID在这一帧有一个有效的跟踪姿势，则为真，否则为假。
