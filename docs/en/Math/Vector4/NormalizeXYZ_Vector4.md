# NormalizeXYZ_Vector4

Gets a normalized unit copy of the vector, ensuring it is safe to do so based on the length. The W element is ignored and the returned vector has W=0.. Returns zero vector if vector length is too small to safely normalize.

Target is Kismet Math Library

## 图示

![]($-20221218-19591981.png)

## Inputs

A: Vector 4 Structure (by ref).

Tolerance: Float (single-precision). Minimum squared vector length..  

## Outputs

Return Value: Vector 4 Structure. A normalized copy if safe, (0,0,0) otherwise..

