# RandomSobolCell3D

目标是重要性取样库

## 图示

![]($-20221218-19535816.png)

## Inputs

索引。整数。单元中的哪个顺序点（从0开始）。

Num Cells:整数。单元网格的大小，1到1024。四舍五入到下一个2的幂。

单元：向量。从这个整数的网格单元给出一个点。

种子：向量。随机三维种子（范围为0-1的成分），在多个序列中随机化。  

## Outputs

返回值。矢量。在给定网格单元中的Sobol分布的随机三维矢量。

Target is Importance Sampling Library

## 图示

![]($-20221218-19535816.png)

## Inputs

Index: Integer. Which sequential point in the cell (starting at 0).

Num Cells: Integer. Size of cell grid, 1 to 1024. Rounded up to the next power of two.

Cell: Vector. Give a point from this integer grid cell.

Seed: Vector. Random 3D seed (components in the range 0-1) to randomize across multiple sequences.  

## Outputs

Return Value: Vector. Sobol-distributed random 3D vector in the given grid cell.

