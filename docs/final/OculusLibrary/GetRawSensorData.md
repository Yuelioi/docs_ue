# GetRawSensorData

报告原始传感器数据。如果 HMD 不支持任何参数，那么它将被设置为零。

目标是 Oculus 功能库

## 图示

![](/uploads/projects/ue-bluprint/20221218-20150991.png)

## Inputs

设备类型。ETrackedDeviceType 枚举。

## Outputs

角加速度。矢量。(出）角加速度，单位是弧度/秒/秒。

线性加速度。矢量。(out) 加速度，单位为米/秒/秒。

角速度。矢量。(出）角速度，单位是弧度/秒。

线性速度。矢量。(out)速度，单位为米/秒。

时间（秒）。Float（单精度）。(输出)报告的 IMU 读数发生的时间，以秒计。

<hr>

Reports raw sensor data. If HMD doesn't support any of the parameters then it will be set to zero.

Target is Oculus Function Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-20150991.png)

## Inputs

Device Type: ETrackedDeviceType Enum.

## Outputs

Angular Acceleration: Vector. (out) Angular acceleration in radians per second per second..

Linear Acceleration: Vector. (out) Acceleration in meters per second per second..

Angular Velocity: Vector. (out) Angular velocity in radians per second..

Linear Velocity: Vector. (out) Velocity in meters per second..

Time in Seconds: Float (single-precision). (out) Time when the reported IMU reading took place, in seconds..
