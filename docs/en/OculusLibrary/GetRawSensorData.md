# GetRawSensorData

Reports raw sensor data. If HMD doesn't support any of the parameters then it will be set to zero.

Target is Oculus Function Library

## 图示

![]($-20221218-20150991.png)

## Inputs

Device Type: ETrackedDeviceType Enum.  

## Outputs

Angular Acceleration: Vector. (out) Angular acceleration in radians per second per second..

Linear Acceleration: Vector. (out) Acceleration in meters per second per second..

Angular Velocity: Vector. (out) Angular velocity in radians per second..

Linear Velocity: Vector. (out) Velocity in meters per second..

Time in Seconds: Float (single-precision). (out) Time when the reported IMU reading took place, in seconds..

