# SetBaseRotationandBaseOffsetinMe-

Sets 'base rotation' - the rotation that will be subtracted from. the actual HMD orientation.. Sets base position offset (in meters). The base position offset is the distance from the physical (0, 0, 0) position. to current HMD position (bringing the (0, 0, 0) point to the current HMD position). Note, this vector is set by ResetPosition call; use this method with care.. The axis of the vector are the same as in Unreal: X - forward, Y - right, Z - up.

Target is Oculus Function Library

## 图示

![]($-20221218-20154940.png)

## Inputs

In: Exec.

Rotation: Rotator. (in) Rotator object with base rotation.

Base Offset in Meters: Vector. (in) the vector to be set as base offset, in meters..

Options: EOrientPositionSelector Enum. (in) specifies either position, orientation or both should be set..  

## Outputs

Out: Exec.

