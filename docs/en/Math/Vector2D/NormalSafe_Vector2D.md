# NormalSafe_Vector2D

Gets a normalized copy of the vector, checking it is safe to do so based on the length.. Returns zero vector if vector length is too small to safely normalize.

Target is Kismet Math Library

## 图示

![]($-20221218-19584654.png)

## Inputs

A: Vector 2D Structure.

Tolerance: Float (single-precision). Minimum squared length of vector for normalization..  

## Outputs

Return Value: Vector 2D Structure. A normalized copy of the vector if safe, (0,0) otherwise..

