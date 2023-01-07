# RandomUnitVectorinEllipticalCone-\_3

返回一个长度为 1 的随机向量，在指定的圆锥体内，具有均匀的随机分布。圆锥体的形状可以根据偏航角和俯仰角来修改。

目标是 Kismet 数学图书馆

## 图示

![](/uploads/projects/ue-bluprint/20221218-19541268.png)

## Inputs

Cone Dir: 矢量（通过参考）。

最大偏航，单位是弧度。Float（单精度）。圆锥体的偏航角度（从 ConeDir 到水平边缘），单位是弧度。

最大间距，单位是弧度。Float（单精度）。圆锥体的俯仰角（从 ConeDir 到垂直边缘），单位是弧度。

流。随机流结构（通过引用）。从中获取矢量的随机流...

## Outputs

返回值。向量。

<hr>

Returns a random vector with length of 1, within the specified cone, with uniform random distribution.. The shape of the cone can be modified according to the yaw and pitch angles.

Target is Kismet Math Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-19541268.png)

## Inputs

Cone Dir: Vector (by ref).

Max Yaw in Radians: Float (single-precision). The yaw angle of the cone (from ConeDir to horizontal edge), in radians..

Max Pitch in Radians: Float (single-precision). The pitch angle of the cone (from ConeDir to vertical edge), in radians..

Stream: Random Stream Structure (by ref). The random stream from which to obtain the vector..

## Outputs

Return Value: Vector.
