# GetPose

抓取 HMD 的当前方向和位置。如果位置跟踪不可用，DevicePosition 将是一个零向量。

目标是 Oculus 功能库

## 图示

![](/uploads/projects/ue-bluprint/20221218-20150879.png)

## Inputs

对播放器的摄像机使用方向。Boolean. (in) 如果要使用方向来手动更新摄像机的方向，则应设置为 "true"。

对播放器的摄像机使用位置。布尔型。 (in) 如果要用位置来手动更新摄像机的位置，应设置为 "true"。

位置比例。矢量。(in)将被应用到位置的三维比例。

## Outputs

设备旋转。旋转器。(输出) 设备的当前旋转。

设备位置。矢量。(输出) 设备的当前位置，在它自己的跟踪空间中。

颈部位置。矢量。(输出) 估计的颈部位置，用用户资料中的 NeckToEye 向量计算。与 DevicePosition.相同的坐标空间。

<hr>

Grabs the current orientation and position for the HMD. If positional tracking is not available, DevicePosition will be a zero vector

Target is Oculus Function Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-20150879.png)

## Inputs

Use Orienation for Player Camera: Boolean. (in) Should be set to 'true' if the orientation is going to be used to update orientation of the camera manually..

Use Position for Player Camera: Boolean. (in) Should be set to 'true' if the position is going to be used to update position of the camera manually..

Position Scale: Vector. (in) The 3D scale that will be applied to position..

## Outputs

Device Rotation: Rotator. (out) The device's current rotation.

Device Position: Vector. (out) The device's current position, in its own tracking space.

Neck Position: Vector. (out) The estimated neck position, calculated using NeckToEye vector from User Profile. Same coordinate space as DevicePosition..
