# GetLastInputVector

返回世界空间中被ConsumeInputVector()处理的最后一个输入向量，这通常是由Pawn或PawnMovementComponent完成的。任何需要了解最后影响运动的输入的用户都应该使用这个函数。

目标是卒子运动组件

## 图示

![]($-20221218-20184370.png)

## Inputs

目标。卒子运动组件对象参考。  

## Outputs

返回值。矢量。世界空间中被ConsumeInputVector()处理的最后一个输入向量。
