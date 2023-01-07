# GetLaserPointer

获取指定指针的激光指示器的起点和终点

目标是视口交互器

## 图示

![](/uploads/projects/ue-bluprint/20221218-19305058.png)

## Inputs

在。执行。

目标。视口交互器对象参考。

即使被阻止。布尔值。如果为真，则返回一个激光笔，即使手的前面有 UI（用户界面）（默认为假）。

激光长度超控。Float（单精度）。如果为零，则使用默认的激光长度（VREdMode::GetLaserLength）。

## Outputs

出：执行。

激光指示器启动：向量。

激光指示器末端：向量。

返回值。布尔值。如果我们有这只手的运动控制器数据，并且可以返回一个有效的结果，则为真。

<hr>

Gets the start and end point of the laser pointer for the specified hand

Target is Viewport Interactor

## 图示

![](/uploads/projects/ue-bluprint/20221218-19305058.png)

## Inputs

In: Exec.

Target: Viewport Interactor Object Reference.

Even if Blocked: Boolean. If true, returns a laser pointer even if the hand has UI in front of it (defaults to false).

Laser Length Override: Float (single-precision). If zero the default laser length (VREdMode::GetLaserLength) is used.

## Outputs

Out: Exec.

Laser Pointer Start: Vector.

Laser Pointer End: Vector.

Return Value: Boolean. True if we have motion controller data for this hand and could return a valid result.
