# GetPendingMovementInputVector

返回世界空间中的待定输入向量。这是输入向量的最新值，等待ConsumeMovementInputVector()来清除它，。通常只有PawnMovementComponent会想要读取这个值，如果Pawn负责运动的话，它自己也会想要读取。

目标是卒子

## 图示

![]($-20221218-20191784.png)

## Inputs

目标。卒子对象参考。  

## Outputs

返回值。向量。世界空间中的待定输入向量。
