# NormalizeInPlaceXYZ_Vector4

Normalize this vector in-place if it is large enough or set it to (0,0,0,0) otherwise. The W element is ignored and the returned vector has W=0.

Target is Kismet Math Library

## 图示

![]($-20221218-19591870.png)

## Inputs

In: Exec.

A: Vector 4 Structure (by ref).

Tolerance: Float (single-precision). Minimum squared length of vector for normalization..  

## Outputs

Out: Exec.

