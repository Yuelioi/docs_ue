# NearlyEqual_Transform

如果变换A几乎等于B，则返回真。

目标是Kismet数学图书馆

## 图示

![]($-20221218-19554432.png)

## Inputs

答：转变（通过参考）。

B：转变（由裁判）。

位置公差。浮点数（单精度）。变换的位置需要多近才会被认为是相等的。

旋转公差。Float（单精度）。变换的旋转需要多接近才能被认为是相等的。

规模3D公差。浮点数（单精度）。变换的比例需要多接近才能被认为是相等的。  

## Outputs

返回值。布尔值。

Returns true if transform A is nearly equal to B

Target is Kismet Math Library

## 图示

![]($-20221218-19554432.png)

## Inputs

A: Transform (by ref).

B: Transform (by ref).

Location Tolerance: Float (single-precision). How close position of transforms need to be to be considered equal.

Rotation Tolerance: Float (single-precision). How close rotations of transforms need to be to be considered equal.

Scale 3DTolerance: Float (single-precision). How close scale of transforms need to be to be considered equal.  

## Outputs

Return Value: Boolean.

