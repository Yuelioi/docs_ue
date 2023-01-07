# GetPointGuardianIntersection

获取 UE 坐标与监护人边界的交集结果

目标是 Oculus 功能库

## 图示

![](/uploads/projects/ue-bluprint/20221218-20151801.png)

## Inputs

在。执行。

点。向量。(in) UE 空间中的点，以测试监护人的边界。

边界类型。EBoundaryType 枚举。(in) 一个代表请求的边界类型的枚举，要么是 Outer Boundary（确切的监护人边界），要么是 PlayArea（外边界内的矩形）。

## Outputs

出：执行。

返回值。监护人测试结果结构。

<hr>

Get the intersection result between a UE coordinate and a guardian boundary

Target is Oculus Function Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-20151801.png)

## Inputs

In: Exec.

Point: Vector. (in) Point in UE space to test against guardian boundaries.

Boundary Type: EBoundaryType Enum. (in) An enum representing the boundary type requested, either Outer Boundary (exact guardian bounds) or PlayArea (rectangle inside the Outer Boundary).

## Outputs

Out: Exec.

Return Value: Guardian Test Result Structure.
