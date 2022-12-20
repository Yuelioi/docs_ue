# NextSobolCell3D

Target is Importance Sampling Library

## 图示

![]($-20221218-19532924.png)

## Inputs

Index: Integer. Which sequential point.

Num Cells: Integer. Size of cell grid, 1 to 1024. Rounded up to the next power of two.

Previous Value: Vector. The Sobol value for Index-1.  

## Outputs

Return Value: Vector. Sobol-distributed random 3D position in the same grid cell.

