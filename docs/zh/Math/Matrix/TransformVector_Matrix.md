# TransformVector_Matrix

变换一个方向矢量--不会考虑到FMatrix的平移部分。如果你想变换一个表面的法线（或平面），并正确考虑非均匀缩放，你应该使用TransformByUsingAdjointT...（假设矩阵代表一个变换）

目标是Kismet数学图书馆

## 图示

![]($-20221218-19523980.png)

## Inputs

M：矩阵结构（由参考文献）。

V: 矢量。  

## Outputs

返回值。矢量4结构。变换一个方向向量 - 不会考虑到FMatrix.的平移部分。如果你想变换一个表面法线（或平面）并正确考虑非均匀缩放，你应该使用TransformByUsingAdjointT.（假设矩阵代表一个变换）。
