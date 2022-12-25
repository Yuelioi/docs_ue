# ConsumeMovementInputVector

返回悬而未决的输入向量并将其重置为零。这应该在运动更新期间使用（由Pawn或PawnMovementComponent），以防止控制输入在帧之间累积。将待定输入向量复制到保存的输入向量（GetLastMovementInputVector()）。

目标是卒子

## 图示

![]($-20221218-20191558.png)

## Inputs

在。执行。

目标。卒子对象参考。  

## Outputs

出：执行。

返回值。向量。待定的输入向量。
