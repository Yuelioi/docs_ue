# FindPathtoActorSynchronously

在FindPath Synchronously中，立即找到路径。与FindPathToLocationSynchronously相比，主要优点是：如果目标角色从最后一个路径节点移动的距离超过了TetherDistance，结果路径将自动更新。

目标是导航系统V1

## 图示

![]($-20221218-17470916.png)

## Inputs

在。执行。

路径开始。向量（通过引用）。

目标演员。Actor Object Reference.

Tether距离。Float（单精度）。

寻路背景。Actor Object Reference。可以是以下之一。导航数据（如Navmesh角色），卒子或控制器。这个参数决定了特定寻路查询的参数。

过滤器类。导航查询过滤器类参考。 

## Outputs

输出。执行：执行。

返回值。导航路径对象参考。
