# LineTraceTrackedObjects3D

对AR系统跟踪的任何现实世界的几何体进行线条追踪。

目标是ARBlueprint库

## 图示

![]($-20221218-17575660.png)

## Inputs

在。执行。

开始。矢量。追踪的起始点，在世界空间中。

结束。向量。轨迹的终点，在世界空间中。

测试特征点。布尔值。

测试地平面。布尔值。

测试平面的范围。布尔值。

测试平面的边界多边形 Boolean（布尔）。 

## Outputs

输出。执行。

返回值。ARTrace Result Structures的数组。一个按与摄像机的距离排序的FARTraceResult列表。

Perform a line trace against any real-world geometry as tracked by the AR system.

Target is ARBlueprint Library

## 图示

![]($-20221218-17575660.png)

## Inputs

In: Exec.

Start: Vector. Start point of the trace, in world space..

End: Vector. End point of the trace, in world space..

Test Feature Points: Boolean.

Test Ground Plane: Boolean.

Test Plane Extents: Boolean.

Test Plane Boundary Polygon: Boolean.  

## Outputs

Out: Exec.

Return Value: Array of ARTrace Result Structures. a list of \c FARTraceResult sorted by distance from camera..

