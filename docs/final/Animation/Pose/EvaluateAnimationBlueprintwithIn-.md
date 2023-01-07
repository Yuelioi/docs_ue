# EvaluateAnimationBlueprintwithIn-

评估一个动画蓝图实例，使用提供的动画姿势和它的输入姿势值，使用结果生成一个有效的动画姿势。警告该函数可能导致性能问题。

目标是 Anim Pose Extensions

## 图示

![](/uploads/projects/ue-bluprint/20221218-17502775.png)

## Inputs

在。执行。

输入姿势。Anim Pose 结构 (通过引用). 用于填充动画蓝图内的输入姿势节点值的动画姿势。

Target Skeletal Mesh: 骨架网格对象参考。用作目标骨骼网格的 USkeletalMesh 对象，应具有与 InputPose 和 Animation Blueprint 相同的 USkeleton。

动画蓝图。Anim Blueprint 对象参考。用来生成 AnimInstance 的动画蓝图，用于评估输出的动画姿态。

## Outputs

输出。Exec.

Out Pose: Anim Pose 结构。Anim pose: 动画姿势，用于保存评估动画蓝图实例的数据。

<hr>

Evaluates an Animation Blueprint instance, using the provided Anim Pose and its Input Pose value, generating a valid Anim Pose using the result. Warning this function may cause performance issues.

Target is Anim Pose Extensions

## 图示

![](/uploads/projects/ue-bluprint/20221218-17502775.png)

## Inputs

In: Exec.

Input Pose: Anim Pose Structure (by ref). Anim Pose used to populate the input pose node value inside of the Animation Blueprint.

Target Skeletal Mesh: Skeletal Mesh Object Reference. USkeletalMesh object used as the target skeletal mesh, should have same USkeleton as InputPose and Animation Blueprint.

Animation Blueprint: Anim Blueprint Object Reference. Animation Blueprint to generate an AnimInstance with, used to evaluate the output Anim Pose.

## Outputs

Out: Exec.

Out Pose: Anim Pose Structure. Anim pose to hold the data from evaluating the Animation Blueprint instance.
