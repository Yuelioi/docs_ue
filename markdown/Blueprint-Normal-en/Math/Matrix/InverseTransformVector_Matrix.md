# InverseTransformVector_Matrix

Transform a direction vector by the inverse of this matrix - will not take into account translation part.. If you want to transform a surface normal (or plane) and correctly account for non-uniform scaling you should use TransformByUsingAdjointT with adjoint of matrix inverse.. (Assumes Matrix represents a transform)

Target is Kismet Math Library

## 图示

![]($-20221218-19522575.png)

## Inputs

M: Matrix Structure (by ref).

V: Vector.  

## Outputs

Return Value: Vector. Transform a direction vector by the inverse of this matrix - will not take into account translation part.. If you want to transform a surface normal (or plane) and correctly account for non-uniform scaling you should use TransformByUsingAdjointT with adjoint of matrix inverse.. (Assumes Matrix represents a transform).

