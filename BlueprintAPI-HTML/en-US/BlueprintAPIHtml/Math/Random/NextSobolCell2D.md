# NextSobolCell2D

Target is Importance Sampling Library

## 图示

![]($-20221218-19532795.png)

## Inputs

Index: Integer. Which sequential point.

Num Cells: Integer. Size of cell grid, 1 to 32768. Rounded up to the next power of two.

Previous Value: Vector 2D Structure. The Sobol value for Index-1.  

## Outputs

Return Value: Vector 2D Structure. Sobol-distributed random 2D position in the same grid cell.

