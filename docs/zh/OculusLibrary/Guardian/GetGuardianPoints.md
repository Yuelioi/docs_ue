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
