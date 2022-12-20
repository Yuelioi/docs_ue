# RandomSobolCell3D

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

