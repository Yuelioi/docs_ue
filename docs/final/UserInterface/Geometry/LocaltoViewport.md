# LocaltoViewport

将提供的几何体的局部坐标转换为局部视口坐标。

目标是石板蓝图库

## 图示

![]($-20221218-21215434.png)

## Inputs

几何学。几何结构（由参考）。

本地坐标。矢量二维结构。  

## Outputs

像素位置。矢量2D结构。游戏视口中的位置，可用于线条追踪和其他需要视口分辨率单位空间中的坐标的用途。

视口位置。矢量2D结构。视口中其他小部件在空间中的位置。比如，如果你想在视口空间中与这个位置相同的位置添加另一个部件到视口中，这就是你要用的东西。

Translates local coordinate of the geometry provided into local viewport coordinates.

Target is Slate Blueprint Library

## 图示

![]($-20221218-21215434.png)

## Inputs

Geometry: Geometry Structure (by ref).

Local Coordinate: Vector 2D Structure.  

## Outputs

Pixel Position: Vector 2D Structure. The position in the game's viewport, usable for line traces and other uses where you need a coordinate in the space of viewport resolution units..

Viewport Position: Vector 2D Structure. The position in the space of other widgets in the viewport. Like if you wanted to add another widget to the viewport at the same position in viewport space as this location, this is what you would use..

