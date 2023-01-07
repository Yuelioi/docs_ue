# ConsumeInputVector

返回待处理的输入向量并将其重置为零。

- 这应该在运动更新期间使用（由卒或卒运动组件），以防止帧之间的控制输入累积。

目标是卒子运动组件

## 图示

![](/uploads/projects/ue-bluprint/20221218-20184257.png)

## Inputs

在。执行。

目标。卒子运动组件对象参考。

## Outputs

出：执行。

返回值。向量。待定的输入向量。

<hr>

Returns the pending input vector and resets it to zero.

- This should be used during a movement update (by the Pawn or PawnMovementComponent) to prevent accumulation of control input between frames.

-

Target is Pawn Movement Component

## 图示

![](/uploads/projects/ue-bluprint/20221218-20184257.png)

## Inputs

In: Exec.

Target: Pawn Movement Component Object Reference.

## Outputs

Out: Exec.

Return Value: Vector. The pending input vector..
