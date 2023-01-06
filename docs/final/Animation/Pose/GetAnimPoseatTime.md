# GetAnimPoseatTime

评估一个动画序列基数，生成一个有效的动画姿势实例。

目标是Anim Pose扩展

## 图示

![]($-20221218-17503001.png)

## Inputs

在。执行.

动画序列库: Anim Sequence Base 对象参考. 用于评估姿势的动画序列基数。

时间。Float (single-precision). 姿势应该被评估的时间。

评估选项: Anim Pose Evaluation Options 结构。决定姿势应该被评估的选项。 

## Outputs

输出。Exec.

姿势: Anim Pose 结构. Anim Pose用来保存评估的数据。

Evaluates an Animation Sequence Base to generate a valid Anim Pose instance

Target is Anim Pose Extensions

## 图示

![]($-20221218-17503001.png)

## Inputs

In: Exec.

Animation Sequence Base: Anim Sequence Base Object Reference. Animation sequence base to evaluate the pose from.

Time: Float (single-precision). Time at which the pose should be evaluated.

Evaluation Options: Anim Pose Evaluation Options Structure. Options determining the way the pose should be evaluated.  

## Outputs

Out: Exec.

Pose: Anim Pose Structure. Anim Pose to hold the evaluated data.

