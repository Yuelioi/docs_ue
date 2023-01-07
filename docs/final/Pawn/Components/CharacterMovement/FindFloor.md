# FindFloor

扫过一个垂直轨迹，为胶囊在给定位置找到地板。如果 ShouldComputePerchResult()对向下扫描的结果返回 "true"，则将尝试进行栖息。如果胶囊上的碰撞功能被禁用，则不会找到地板。

目标是角色运动组件

## 图示

![](/uploads/projects/ue-bluprint/20221218-20180961.png)

## Inputs

目标。角色运动组件对象参考。

胶囊位置。向量。胶囊扫描的起始位置。

## Outputs

楼层结果。查找楼层结果结构。楼层检查的结果。

<hr>

Sweeps a vertical trace to find the floor for the capsule at the given location. Will attempt to perch if ShouldComputePerchResult() returns true for the downward sweep result.. No floor will be found if collision is disabled on the capsule!

Target is Character Movement Component

## 图示

![](/uploads/projects/ue-bluprint/20221218-20180961.png)

## Inputs

Target: Character Movement Component Object Reference.

Capsule Location: Vector. Location where the capsule sweep should originate.

## Outputs

Floor Result: Find Floor Result Structure. Result of the floor check.
