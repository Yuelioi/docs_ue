# GetScaleVector_Matrix

返回一个由该矩阵计算出来的三维比例向量（每个分量都是一个行向量的幅度），误差容限......（假设矩阵代表一个变换）。

目标是 Kismet 数学图书馆

## 图示

![](/uploads/projects/ue-bluprint/20221218-19521672.png)

## Inputs

M：矩阵结构（由参考文献）。

误差。Float (single-precision).

## Outputs

返回值。矢量。返回一个由该矩阵计算出来的三维比例矢量（其中每个分量是一个行矢量的幅度），误差容限...（假设矩阵代表一个变换）。

<hr>

return a 3D scale vector calculated from this matrix (where each component is the magnitude of a row vector) with error Tolerance.. (Assumes Matrix represents a transform)

Target is Kismet Math Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-19521672.png)

## Inputs

M: Matrix Structure (by ref).

Tolerance: Float (single-precision).

## Outputs

Return Value: Vector. return a 3D scale vector calculated from this matrix (where each component is the magnitude of a row vector) with error Tolerance.. (Assumes Matrix represents a transform).
