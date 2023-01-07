# LineTraceTrackedObjects

对 AR 系统跟踪的任何现实世界的几何体进行线条追踪。

目标是 ARBlueprint 库

## 图示

![](/uploads/projects/ue-bluprint/20221218-17575549.png)

## Inputs

在。执行。

屏幕协调。矢量二维结构。屏幕上的点的坐标，从该点向跟踪空间投射射线。

Test Feature Points（测试特征点）。Boolean（布尔）。

Test Ground Plane（测试地平面）。Boolean（布尔）。

Test Plane Extents（测试平面范围）。布尔值。

测试平面的边界多边形 Boolean（布尔）。

## Outputs

输出。执行。

返回值。ARTrace Result Structures 的数组。一个按与摄像机的距离排序的 FARTraceResult 列表。

<hr>

Perform a line trace against any real-world geometry as tracked by the AR system.

Target is ARBlueprint Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-17575549.png)

## Inputs

In: Exec.

Screen Coord: Vector 2D Structure. Coordinate of the point on the screen from which to cast a ray into the tracking space..

Test Feature Points: Boolean.

Test Ground Plane: Boolean.

Test Plane Extents: Boolean.

Test Plane Boundary Polygon: Boolean.

## Outputs

Out: Exec.

Return Value: Array of ARTrace Result Structures. a list of \c FARTraceResult sorted by distance from camera..
