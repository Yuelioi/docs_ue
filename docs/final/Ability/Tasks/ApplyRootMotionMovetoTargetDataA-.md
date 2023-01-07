# ApplyRootMotionMovetoTargetDataA-

使用 targetData 的索引对角色的运动施加力，而不是直接使用一个演员。

目标是能力任务，将根部运动移动应用于演员的力

## 图示

![](/uploads/projects/ue-bluprint/20221218-17330712.png)

## Inputs

在。执行。

任务实例名称。姓名：。

目标数据处理。Gameplay Ability 目标数据手柄结构。

目标数据索引。整数。

目标演员索引。整数。

目标位置偏移。矢量。

偏移对准。ERootMotionMoveToActorTargetOffsetType 枚举。

持续时间。Float（单精度）。

Target Lerp Speed Horizontal。曲线浮点对象参考。

Target Lerp Speed Vertical（垂直目标速度）。曲线浮点对象参考。

设置新的运动模式。布尔型。

运动模式。EMovementMode 枚举。

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

<hr>

Apply force to character's movement using an index into targetData instead of using an actor directly.

Target is Ability Task Apply Root Motion Move to Actor Force

## 图示

![](/uploads/projects/ue-bluprint/20221218-17330712.png)

## Inputs

In: Exec.

Task Instance Name: Name.

Target Data Handle: Gameplay Ability Target Data Handle Structure.

Target Data Index: Integer.

Target Actor Index: Integer.

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
