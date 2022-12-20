# RandomUnitVectorinConeinRadiansf-

Returns a random vector with length of 1, within the specified cone, with uniform random distribution.

Target is Kismet Math Library

## 图示

![]($-20221218-19540736.png)

## Inputs

Cone Dir: Vector (by ref). The base "center" direction of the cone..

Cone Half Angle in Radians: Float (single-precision). The half-angle of the cone (from ConeDir to edge), in radians..

Stream: Random Stream Structure (by ref). The random stream from which to obtain the vector..  

## Outputs

Return Value: Vector.

