# GetAzimuthandElevation

将一个方向矢量分解为方位（Yaw）和仰角（Pitch）的旋转值，单位为度。 非钳制）。相对于所提供的参考框架（例如，一个角色的世界变换）。

目标是Kismet数学图书馆

## 图示

![]($-20221218-19564170.png)

## Inputs

在方向上。向量。

参考框架。变换（通过参考）。  

## Outputs

Azimuth:Float（单精度）。

海拔。Float（单精度）。

Breaks a direction vector apart into Azimuth (Yaw) and Elevation (Pitch) rotation values given in degrees. (non-clamped). Relative to the provided reference frame (an Actor's WorldTransform for example)

Target is Kismet Math Library

## 图示

![]($-20221218-19564170.png)

## Inputs

In Direction: Vector.

Reference Frame: Transform (by ref).  

## Outputs

Azimuth: Float (single-precision).

Elevation: Float (single-precision).

