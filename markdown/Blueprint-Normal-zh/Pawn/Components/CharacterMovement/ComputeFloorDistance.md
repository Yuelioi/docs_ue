# ComputeFloorDistance

计算从胶囊底部球体到地面的距离，并将结果存储在FloorResult.中。这个距离是胶囊到被下半球撞击的第一个点的扫射距离，如果是直线追踪，则是胶囊底部的距离。这个函数并不关心胶囊上的碰撞是否被禁用（与FindFloor不同）。

目标是角色运动组件

## 图示

![]($-20221218-20180728.png)

## Inputs

目标。角色运动组件对象参考。

胶囊位置。向量。胶囊扫描的起始位置。

线距离。浮点数（单精度）。如果不为零，则为测试从胶囊基座开始的简单线路检查的最大距离。仅在扫荡测试未能找到可行走的地板时使用，并且仅在冲击法线是可行走法线时返回有效结果。

扫频距离。浮点数（单精度）。如果不为零，在测试中向下扫过一个胶囊时使用的最大距离。必须大于或等于线的距离。

扫频半径。Float（单精度）。用于扫频测试的半径。应该是<=胶囊半径。

## Outputs

楼层结果。查找楼层结果结构。楼层检查的结果。
