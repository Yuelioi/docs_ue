# ComputeFloorDistance

计算从胶囊底部球体到地面的距离，并将结果存储在 FloorResult.中。这个距离是胶囊到被下半球撞击的第一个点的扫射距离，如果是直线追踪，则是胶囊底部的距离。这个函数并不关心胶囊上的碰撞是否被禁用（与 FindFloor 不同）。

目标是角色运动组件

## 图示

![](/uploads/projects/ue-bluprint/20221218-20180728.png)

## Inputs

目标。角色运动组件对象参考。

胶囊位置。向量。胶囊扫描的起始位置。

线距离。浮点数（单精度）。如果不为零，则为测试从胶囊基座开始的简单线路检查的最大距离。仅在扫荡测试未能找到可行走的地板时使用，并且仅在冲击法线是可行走法线时返回有效结果。

扫频距离。浮点数（单精度）。如果不为零，在测试中向下扫过一个胶囊时使用的最大距离。必须大于或等于线的距离。

扫频半径。Float（单精度）。用于扫频测试的半径。应该是<=胶囊半径。

## Outputs

楼层结果。查找楼层结果结构。楼层检查的结果。

<hr>

Compute distance to the floor from bottom sphere of capsule and store the result in FloorResult.. This distance is the swept distance of the capsule to the first point impacted by the lower hemisphere, or distance from the bottom of the capsule in the case of a line trace.. This function does not care if collision is disabled on the capsule (unlike FindFloor).

Target is Character Movement Component

## 图示

![](/uploads/projects/ue-bluprint/20221218-20180728.png)

## Inputs

Target: Character Movement Component Object Reference.

Capsule Location: Vector. Location where the capsule sweep should originate.

Line Distance: Float (single-precision). If non-zero, max distance to test for a simple line check from the capsule base. Used only if the sweep test fails to find a walkable floor, and only returns a valid result if the impact normal is a walkable normal..

Sweep Distance: Float (single-precision). If non-zero, max distance to use when sweeping a capsule downwards for the test. MUST be greater than or equal to the line distance..

Sweep Radius: Float (single-precision). The radius to use for sweep tests. Should be <= capsule radius..

## Outputs

Floor Result: Find Floor Result Structure. Result of the floor check.
