# GetPendingInputVector

返回世界空间中的待定输入向量。这是输入向量的最新值，等待ConsumeMovementInputVector()来清除它。实现运动的PawnMovementComponents通常希望使用这个函数或ConsumeInputVector()，因为这些函数代表了最新的输入状态。

目标是卒子运动组件

## 图示

![]($-20221218-20184597.png)

## Inputs

目标。卒子运动组件对象参考。  

## Outputs

返回值。向量。世界空间中的待定输入向量。
