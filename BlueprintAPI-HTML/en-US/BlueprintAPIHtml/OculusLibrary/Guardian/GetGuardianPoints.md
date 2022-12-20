# GetGuardianPoints

Returns the list of points in UE world space of the requested Boundary Type

Target is Oculus Function Library

## 图示

![]($-20221218-20151460.png)

## Inputs

Boundary Type: EBoundaryType Enum. (in) An enum representing the boundary type requested, either Outer Boundary (exact guardian bounds) or PlayArea (rectangle inside the Outer Boundary).

Use Pawn Space: Boolean. (in) Boolean indicating to return the points in world space or pawn space.  

## Outputs

Return Value: Array of Vectors.

