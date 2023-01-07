# GetPendingInputVector

返回世界空间中的待定输入向量。这是输入向量的最新值，等待 ConsumeMovementInputVector()来清除它。实现运动的 PawnMovementComponents 通常希望使用这个函数或 ConsumeInputVector()，因为这些函数代表了最新的输入状态。

目标是卒子运动组件

## 图示

![](/uploads/projects/ue-bluprint/20221218-20184597.png)

## Inputs

目标。卒子运动组件对象参考。

## Outputs

返回值。向量。世界空间中的待定输入向量。

<hr>

Return the pending input vector in world space. This is the most up-to-date value of the input vector, pending ConsumeMovementInputVector() which clears it.. PawnMovementComponents implementing movement usually want to use either this or ConsumeInputVector() as these functions represent the most recent state of input.

Target is Pawn Movement Component

## 图示

![](/uploads/projects/ue-bluprint/20221218-20184597.png)

## Inputs

Target: Pawn Movement Component Object Reference.

## Outputs

Return Value: Vector. The pending input vector in world space..
