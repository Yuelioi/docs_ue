# ApplyRootMotionMovetoForce

对角色的运动施加力

目标是能力任务，将根基运动移动应用于力

## 图示

![]($-20221218-17330587.png)

## Inputs

在。执行。

任务实例名称。名称：

目标位置。矢量。

持续时间。Float（单精度）。

设置新的运动模式。Boolean（布尔）。

运动模式。EMovementMode枚举。

将速度限制在预期范围内。Boolean（布尔）。

Path Offset Curve: Curve Vector Object Reference.

完成时的速度模式。ERootMotionFinishVelocityMode枚举。

设置完成时的速度。Vector.

完成时夹持速度：向量。Float（单精度）。 

## Outputs

输出。执行。

非同步任务。Ability Task Apply Root Motion Move To Force Object Reference.

On Timed Out: 执行。计时结束时：执行。

在超时且到达目的地时。执行。计时结束并到达目的地。
