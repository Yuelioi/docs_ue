# RandomSobolCell2D

目标是重要性取样库

## 图示

![]($-20221218-19535682.png)

## Inputs

索引。整数。单元中的哪个顺序点（从0开始）。

Num Cells:整数。单元网格的大小，1到32768。四舍五入到下一个2的幂。

单元：向量二维结构。从这个整数网格单元给出一个点。

种子：向量二维结构。随机的二维种子（成分在0-1范围内），以在多个序列中随机化。  

## Outputs

返回值。矢量二维结构。在给定网格单元中的Sobol分布的随机2D位置。

Target is Importance Sampling Library

## 图示

![]($-20221218-19535682.png)

## Inputs

Index: Integer. Which sequential point in the cell (starting at 0).

Num Cells: Integer. Size of cell grid, 1 to 32768. Rounded up to the next power of two.

Cell: Vector 2D Structure. Give a point from this integer grid cell.

Seed: Vector 2D Structure. Random 2D seed (components in the range 0-1) to randomize across multiple sequences.  

## Outputs

Return Value: Vector 2D Structure. Sobol-distributed random 2D position in the given grid cell.

