# NavigationRaycast

对适合给定查询器的NavigationData进行导航射线广播。

目标是导航系统V1

## 图示

![]($-20221218-17473413.png)

## Inputs

在。执行。

射线开始。向量（通过引用）。

射线结束。Vector (by ref).

过滤器类。导航查询过滤器类参考。

查询器。控制器对象参考。如果没有通过，将使用默认的导航数据。 

## Outputs

输出。Exec.

击中位置。矢量。如果线路被阻挡，这将被设置为击中位置。否则它包含SegmentEnd。

返回值。Boolean。如果从RayStart到RayEnd的线路被阻挡，则为true。另外，当没有导航数据时为真。

Performs navigation raycast on NavigationData appropriate for given Querier.

Target is Navigation System V1

## 图示

![]($-20221218-17473413.png)

## Inputs

In: Exec.

Ray Start: Vector (by ref).

Ray End: Vector (by ref).

Filter Class: Navigation Query Filter Class Reference.

Querier: Controller Object Reference. if not passed default navigation data will be used.  

## Outputs

Out: Exec.

Hit Location: Vector. if line was obstructed this will be set to hit location. Otherwise it contains SegmentEnd.

Return Value: Boolean. true if line from RayStart to RayEnd was obstructed. Also, true when no navigation data present.

