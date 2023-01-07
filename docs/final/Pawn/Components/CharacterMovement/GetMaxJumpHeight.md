# GetMaxJumpHeight

根据 JumpZVelocity 的速度和重力计算最大跳跃高度。这没有考虑到角色所有者的最大跳跃保持时间。

目标是角色运动组件

## 图示

![](/uploads/projects/ue-bluprint/20221218-20182162.png)

## Inputs

目标。角色运动组件对象参考。

## Outputs

返回值。Float（单精度）。根据 JumpZVelocity 的速度和重力计算最大跳跃高度。这不考虑 CharacterOwner 的 MaxJumpHoldTime。

<hr>

Compute the max jump height based on the JumpZVelocity velocity and gravity.. This does not take into account the CharacterOwner's MaxJumpHoldTime.

Target is Character Movement Component

## 图示

![](/uploads/projects/ue-bluprint/20221218-20182162.png)

## Inputs

Target: Character Movement Component Object Reference.

## Outputs

Return Value: Float (single-precision). Compute the max jump height based on the JumpZVelocity velocity and gravity.. This does not take into account the CharacterOwner's MaxJumpHoldTime..
