# EvaluateAnimationBlueprintwithIn-

评估一个动画蓝图实例，使用提供的动画姿势和它的输入姿势值，使用结果生成一个有效的动画姿势。警告该函数可能导致性能问题。

目标是 Anim Pose Extensions

## 图示

![]($-20221218-17502775.png)

## Inputs

在。执行。

输入姿势。Anim Pose 结构 (通过引用). 用于填充动画蓝图内的输入姿势节点值的动画姿势。

Target Skeletal Mesh: 骨架网格对象参考。用作目标骨骼网格的USkeletalMesh对象，应具有与InputPose和Animation Blueprint相同的USkeleton。

动画蓝图。Anim Blueprint对象参考。用来生成AnimInstance的动画蓝图，用于评估输出的动画姿态。 

## Outputs

输出。Exec.

Out Pose: Anim Pose 结构。Anim pose: 动画姿势，用于保存评估动画蓝图实例的数据。
