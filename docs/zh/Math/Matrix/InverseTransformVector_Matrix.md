# InverseTransformVector_Matrix

用这个矩阵的逆值变换一个方向向量--不会考虑平移部分。如果你想对一个表面的法线（或平面）进行变换，并正确考虑非均匀缩放，你应该使用TransformByUsingAdjointT与矩阵逆的邻接点。

目标是Kismet数学图书馆

## 图示

![]($-20221218-19522575.png)

## Inputs

M：矩阵结构（由参考文献）。

V: 矢量。  

## Outputs

返回值。矢量。用这个矩阵的逆值变换一个方向向量--不会考虑平移部分。如果你想变换一个表面的法线（或平面），并正确考虑非均匀缩放，你应该使用TransformByUsingAdjointT与矩阵逆的邻接点（假设矩阵代表一个变换）。
