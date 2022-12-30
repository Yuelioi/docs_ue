# TransformVector_Matrix

Transform a direction vector - will not take into account translation part of the FMatrix.. If you want to transform a surface normal (or plane) and correctly account for non-uniform scaling you should use TransformByUsingAdjointT.. (Assumes Matrix represents a transform)

Target is Kismet Math Library

## 图示

![]($-20221218-19523980.png)

## Inputs

M: Matrix Structure (by ref).

V: Vector.  

## Outputs

Return Value: Vector 4 Structure. Transform a direction vector - will not take into account translation part of the FMatrix.. If you want to transform a surface normal (or plane) and correctly account for non-uniform scaling you should use TransformByUsingAdjointT.. (Assumes Matrix represents a transform).

