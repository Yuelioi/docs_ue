# ApplyRootMotionMovetoActorForce

对角色的运动施加力

目标是能力任务将根部运动移动应用于演员的力

## 图示

![]($-20221218-17330457.png)

## Inputs

在。执行。

任务实例名称。名称：

目标演员。Actor Object Reference.

目标位置偏移。向量。

Offset Alignment: ERootMotionMoveToActorTargetOffsetType枚举。

持续时间。Float（单精度）。

Target Lerp Speed Horizontal。曲线浮点对象参考。

Target Lerp Speed Vertical（垂直目标速度）。曲线浮点对象参考。

设置新的运动模式。布尔型。

运动模式。EMovementMode枚举。

将速度限制在预期范围内。Boolean（布尔）。

Path Offset Curve: Curve Vector Object Reference.

Time Mapping Curve: Curve Float Object Reference.

Velocity on Finish Mode: ERootMotionFinishVelocityMode Enum.

设置完成时的速度。Vector.

完成时的夹持速度：向量。Float（单精度）。

Disable Destination Reached Interrupt: 布尔值。 

## Outputs

输出。执行。

异步任务。Ability Task Apply Root Motion Move To Actor Force Object Reference.

完成时。执行。在完成时。

到达目的地。布尔值。

计时结束。布尔值。

最终目标位置。向量。

Apply force to character's movement

Target is Ability Task Apply Root Motion Move to Actor Force

## 图示

![]($-20221218-17330457.png)

## Inputs

In: Exec.

Task Instance Name: Name.

Target Actor: Actor Object Reference.

Target Location Offset: Vector.

Offset Alignment: ERootMotionMoveToActorTargetOffsetType Enum.

Duration: Float (single-precision).

Target Lerp Speed Horizontal: Curve Float Object Reference.

Target Lerp Speed Vertical: Curve Float Object Reference.

Set New Movement Mode: Boolean.

Movement Mode: EMovementMode Enum.

Restrict Speed to Expected: Boolean.

Path Offset Curve: Curve Vector Object Reference.

Time Mapping Curve: Curve Float Object Reference.

Velocity on Finish Mode: ERootMotionFinishVelocityMode Enum.

Set Velocity on Finish: Vector.

Clamp Velocity on Finish: Float (single-precision).

Disable Destination Reached Interrupt: Boolean.  

## Outputs

Out: Exec.

Async Task: Ability Task Apply Root Motion Move To Actor Force Object Reference.

On Finished: Exec. On Finished.

Destination Reached: Boolean.

Timed Out: Boolean.

Final Target Location: Vector.

