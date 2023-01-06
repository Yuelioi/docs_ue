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

Finds path instantly, in a FindPath Synchronously. Main advantage over FindPathToLocationSynchronously is that. the resulting path will automatically get updated if goal actor moves more than TetherDistance away from last path node

Target is Navigation System V1

## 图示

![]($-20221218-17470916.png)

## Inputs

In: Exec.

Path Start: Vector (by ref).

Goal Actor: Actor Object Reference.

Tether Distance: Float (single-precision).

Pathfinding Context: Actor Object Reference. could be one of following: NavigationData (like Navmesh actor), Pawn or Controller. This parameter determines parameters of specific pathfinding query.

Filter Class: Navigation Query Filter Class Reference.  

## Outputs

Out: Exec.

Return Value: Navigation Path Object Reference.

