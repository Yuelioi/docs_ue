# GetPointGuardianIntersection

Get the intersection result between a UE coordinate and a guardian boundary

Target is Oculus Function Library

## 图示

![]($-20221218-20151801.png)

## Inputs

In: Exec.

Point: Vector. (in) Point in UE space to test against guardian boundaries.

Boundary Type: EBoundaryType Enum. (in) An enum representing the boundary type requested, either Outer Boundary (exact guardian bounds) or PlayArea (rectangle inside the Outer Boundary).  

## Outputs

Out: Exec.

Return Value: Guardian Test Result Structure.

