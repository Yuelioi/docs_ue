# ApplyRootMotionConstantForce

对角色的运动施加力

目标是能力任务应用根部运动恒定的力

## 图示

![]($-20221218-17330203.png)

## Inputs

在。执行。

任务实例名称。名称：

世界方向。矢量。

强度。Float（单精度）。

持续时间。浮点（单精度）。

是加法的。布尔型。

强度随时间变化：曲线浮点对象参考。

完成时的速度模式。ERootMotionFinishVelocityMode枚举。

设置完成时的速度。Vector（向量）。

完成时的夹持速度。Float（单精度）。

Enable Gravity（启用重力）。布尔值。 

## Outputs

输出。执行：执行。

异步任务。Ability Task Apply Root Motion Constant Force Object Reference.

完成时。执行。在完成时。
