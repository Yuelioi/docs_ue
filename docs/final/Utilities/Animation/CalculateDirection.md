# CalculateDirection

返回速度和旋转正向矢量之间的角度程度。返回的范围是[-180, 180]。对输入方向性的混合空间很有用。

目标是Kismet动画库

## 图示

![]($-20221218-12163962.png)

## Inputs

速度。矢量（通过引用）。用来作为相对于BaseRotation的方向的速度。

基地旋转。旋转器（通过参考）。基准旋转，例如一个棋子的旋转。  

## Outputs

返回值。浮点数（单精度）。

Returns degree of the angle between Velocity and Rotation forward vector. The range of return will be from [-180, 180]. Useful for feeding directional blendspaces.

Target is Kismet Animation Library

## 图示

![]($-20221218-12163962.png)

## Inputs

Velocity: Vector (by ref). The velocity to use as direction relative to BaseRotation.

Base Rotation: Rotator (by ref). The base rotation, e.g. of a pawn.  

## Outputs

Return Value: Float (single-precision).

