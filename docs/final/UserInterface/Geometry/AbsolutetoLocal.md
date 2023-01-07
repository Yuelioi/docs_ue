# AbsolutetoLocal

绝对坐标可以是桌面空间，也可以是窗口空间，这取决于小部件层次结构的根在什么空间。

目标是石板蓝图库

## 图示

![](/uploads/projects/ue-bluprint/20221218-21214662.png)

## Inputs

几何学。几何结构（由裁判）。

绝对坐标。矢量二维结构。

## Outputs

返回值。矢量二维结构。将 AbsoluteCoordinate 转换为该 Geometry 的局部空间。

<hr>

Absolute coordinates could be either desktop or window space depending on what space the root of the widget hierarchy is in.

Target is Slate Blueprint Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-21214662.png)

## Inputs

Geometry: Geometry Structure (by ref).

Absolute Coordinate: Vector 2D Structure.

## Outputs

Return Value: Vector 2D Structure. Transforms AbsoluteCoordinate into the local space of this Geometry..
