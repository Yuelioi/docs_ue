# GetGuardianPoints

返回UE世界空间中所请求的边界类型的点的列表。

目标是Oculus功能库

## 图示

![]($-20221218-20151460.png)

## Inputs

边界类型。EBoundaryType 枚举。(in) 一个代表请求的边界类型的枚举，要么是Outer Boundary（确切的监护人边界），要么是PlayArea（外边界内的矩形）。

使用小兵空间。Boolean. (in) 布尔型，表示返回世界空间或卒子空间中的点。  

## Outputs

返回值。向量的数组。

Returns the list of points in UE world space of the requested Boundary Type

Target is Oculus Function Library

## 图示

![]($-20221218-20151460.png)

## Inputs

Boundary Type: EBoundaryType Enum. (in) An enum representing the boundary type requested, either Outer Boundary (exact guardian bounds) or PlayArea (rectangle inside the Outer Boundary).

Use Pawn Space: Boolean. (in) Boolean indicating to return the points in world space or pawn space.  

## Outputs

Return Value: Array of Vectors.

