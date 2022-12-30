# RandomSobolCell2D

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

