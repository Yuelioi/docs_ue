# GetBaseRotationandBaseOffsetinMe-

返回当前的基座旋转和基座偏移。基准偏移量是当前使用的基准位置偏移量，之前通过.ResetPosition 或 SetBasePositionOffset 调用设置的。它表示一个将 HMD 的位置转换为(0,0,0)点的矢量，单位是米。矢量的轴与虚幻中的相同。X-向前，Y-向右，Z-向上。

目标是 Oculus 功能库

## 图示

![](/uploads/projects/ue-bluprint/20221218-20150080.png)

## Inputs

## Outputs

外轮回。旋转器。(out) 具有基本旋转的旋转器对象。

出基地偏移量，单位：米。矢量。(out) 基准位置偏移，向量，以米为单位。

<hr>

Returns current base rotation and base offset.. The base offset is currently used base position offset, previously set by the. ResetPosition or SetBasePositionOffset calls. It represents a vector that translates the HMD's position. into (0,0,0) point, in meters.. The axis of the vector are the same as in Unreal: X - forward, Y - right, Z - up.

Target is Oculus Function Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-20150080.png)

## Inputs

## Outputs

Out Rotation: Rotator. (out) Rotator object with base rotation.

Out Base Offset in Meters: Vector. (out) base position offset, vector, in meters..
