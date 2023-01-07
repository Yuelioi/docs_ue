# RandomUnitVectorinConeinRadiansf-

返回一个长度为 1 的随机向量，在指定的圆锥体内，采用均匀随机分布。

目标是 Kismet 数学图书馆

## 图示

![](/uploads/projects/ue-bluprint/20221218-19540736.png)

## Inputs

锥体方向：矢量（通过参考）。圆锥体的基本 "中心 "方向。

锥体半角，单位是弧度。Float（单精度）。圆锥体的半角（从 ConeDir 到边缘），单位是弧度。

流。随机流结构（通过引用）。从中获取矢量的随机流...

## Outputs

返回值。向量。

<hr>

Returns a random vector with length of 1, within the specified cone, with uniform random distribution.

Target is Kismet Math Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-19540736.png)

## Inputs

Cone Dir: Vector (by ref). The base "center" direction of the cone..

Cone Half Angle in Radians: Float (single-precision). The half-angle of the cone (from ConeDir to edge), in radians..

Stream: Random Stream Structure (by ref). The random stream from which to obtain the vector..

## Outputs

Return Value: Vector.
