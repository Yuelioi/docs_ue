# SetBaseRotationandBaseOffsetinMe-

设置 "基础旋转"--将从实际的 HMD 方向中减去的旋转。设置基准位置偏移（以米为单位）。基准位置偏移是指从物理（0，0，0）位置到当前 HMD 位置的距离（将（0，0，0）点带到当前 HMD 位置）。注意，这个向量是由 ResetPosition 调用设置的；使用这个方法时要小心。矢量的轴与虚幻中的相同。X-向前，Y-向右，Z-向上。

目标是 Oculus 功能库

## 图示

![](/uploads/projects/ue-bluprint/20221218-20154940.png)

## Inputs

在。执行。

旋转。旋转器。(in) 具有基础旋转的旋转器对象。

以米为单位的基础偏移。矢量。(in)要设置为基础偏移的矢量，单位是米。

选项。EOrientPositionSelector Enum。(in)指定位置、方向或两者都应该被设置。

## Outputs

出：执行。

<hr>

Sets 'base rotation' - the rotation that will be subtracted from. the actual HMD orientation.. Sets base position offset (in meters). The base position offset is the distance from the physical (0, 0, 0) position. to current HMD position (bringing the (0, 0, 0) point to the current HMD position). Note, this vector is set by ResetPosition call; use this method with care.. The axis of the vector are the same as in Unreal: X - forward, Y - right, Z - up.

Target is Oculus Function Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-20154940.png)

## Inputs

In: Exec.

Rotation: Rotator. (in) Rotator object with base rotation.

Base Offset in Meters: Vector. (in) the vector to be set as base offset, in meters..

Options: EOrientPositionSelector Enum. (in) specifies either position, orientation or both should be set..

## Outputs

Out: Exec.
