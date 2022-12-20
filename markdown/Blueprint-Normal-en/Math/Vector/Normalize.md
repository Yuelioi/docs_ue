# Normalize

Gets a normalized unit copy of the vector, ensuring it is safe to do so based on the length.. Returns zero vector if vector length is too small to safely normalize.

Target is Kismet Math Library

## 图示

![]($-20221218-19571297.png)

## Inputs

A: Vector.

Tolerance: Float (single-precision). Minimum squared vector length..  

## Outputs

Return Value: Vector. A normalized copy if safe, (0,0,0) otherwise..

