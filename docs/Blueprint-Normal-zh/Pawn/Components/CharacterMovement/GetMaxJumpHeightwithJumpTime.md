# GetMaxJumpHeightwithJumpTime

根据JumpZVelocity的速度和重力计算最大跳跃高度。这确实考虑到了CharacterOwner的MaxJumpHoldTime。

目标是角色运动组件

## 图示

![]($-20221218-20182278.png)

## Inputs

目标。角色运动组件对象参考。  

## Outputs

返回值。Float（单精度）。根据JumpZVelocity的速度和重力计算最大跳跃高度。这确实考虑到了角色所有者的最大跳跃保持时间（MaxJumpHoldTime）。
