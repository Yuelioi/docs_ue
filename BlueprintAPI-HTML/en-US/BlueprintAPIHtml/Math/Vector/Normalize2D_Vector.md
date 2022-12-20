# Normalize2D_Vector

Gets a normalized unit copy of the 2D components of the vector, ensuring it is safe to do so. Z is set to zero.. Returns zero vector if vector length is too small to normalize.

Target is Kismet Math Library

## 图示

![]($-20221218-19571430.png)

## Inputs

A: Vector.

Tolerance: Float (single-precision). Minimum squared vector length..  

## Outputs

Return Value: Vector. Normalized copy if safe, (0,0,0) otherwise..

