# LineTraceTrackedObjects

对AR系统跟踪的任何现实世界的几何体进行线条追踪。

目标是ARBlueprint库

## 图示

![]($-20221218-17575549.png)

## Inputs

在。执行。

屏幕协调。矢量二维结构。屏幕上的点的坐标，从该点向跟踪空间投射射线。

Test Feature Points（测试特征点）。Boolean（布尔）。

Test Ground Plane（测试地平面）。Boolean（布尔）。

Test Plane Extents（测试平面范围）。布尔值。

测试平面的边界多边形 Boolean（布尔）。 

## Outputs

输出。执行。

返回值。ARTrace Result Structures的数组。一个按与摄像机的距离排序的FARTraceResult列表。
