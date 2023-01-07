# GetDevicePose

交叉 XR-系统查询，返回特定设备的跟踪位置和方向（在跟踪空间）。

目标是头戴式显示器功能库

## 图示

![](/uploads/projects/ue-bluprint/20221218-19301535.png)

## Inputs

在。执行。

XRDevice Id。XRDevice Id 结构（通过 ref）。指定你要查询的设备。

## Outputs

出：执行。

是否被跟踪。布尔值。[out] 详细说明指定设备是否被跟踪（即是否应使用其余的输出）。

方向。旋转器。[out] 代表设备的当前旋转 - 注意：这个值不会被延迟更新，而且会在渲染线程后面。

具有位置跟踪功能。布尔值。[out] 详细说明指定设备是否具有位置跟踪功能（即是否应使用位置输出）。

位置。向量。[out] 代表设备的当前位置 - 注意：这个值不会延迟更新，会在渲染线程后面。

<hr>

Cross XR-System query that returns a specific device's tracked position and orientation (in tracking space).

Target is Head Mounted Display Function Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-19301535.png)

## Inputs

In: Exec.

XRDevice Id: XRDevice Id Structure (by ref). Specifies the device you're querying for..

## Outputs

Out: Exec.

Is Tracked: Boolean. [out] Details if the specified device is tracked (i.e. should the rest of the outputs be used).

Orientation: Rotator. [out] Represents the device's current rotation - NOTE: this value is not late updated and will be behind the render thread.

Has Positional Tracking: Boolean. [out] Details if the specified device has positional tracking (i.e. if the position output should be used).

Position: Vector. [out] Represents the device's current position - NOTE: this value is not late updated and will be behind the render thread.
