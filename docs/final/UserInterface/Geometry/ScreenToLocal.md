# ScreenToLocal

将屏幕位置以像素为单位转化为具有给定几何形状的小部件的本地空间。如果 bIncludeWindowPosition 为真，那么这个方法也会移除游戏窗口的位置（在窗口模式下很有用）。

目标是石板蓝图库

## 图示

![](/uploads/projects/ue-bluprint/20221218-21215664.png)

## Inputs

几何学。几何结构（由参考）。

屏幕位置。矢量 2D 结构。

包括窗口位置。布尔值。

## Outputs

本地坐标。矢量二维结构。

<hr>

Translates a screen position in pixels into the local space of a widget with the given geometry.. If bIncludeWindowPosition is true, then this method will also remove the game window's position (useful when in windowed mode).

Target is Slate Blueprint Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-21215664.png)

## Inputs

Geometry: Geometry Structure (by ref).

Screen Position: Vector 2D Structure.

Include Window Position: Boolean.

## Outputs

Local Coordinate: Vector 2D Structure.
