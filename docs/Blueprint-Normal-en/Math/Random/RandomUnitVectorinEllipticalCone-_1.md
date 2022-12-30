# RandomUnitVectorinEllipticalCone-_1

Returns a random vector with length of 1, within the specified cone, with uniform random distribution.. The shape of the cone can be modified according to the yaw and pitch angles.

Target is Kismet Math Library

## 图示

![]($-20221218-19541006.png)

## Inputs

Cone Dir: Vector (by ref).

Max Yaw in Degrees: Float (single-precision). The yaw angle of the cone (from ConeDir to horizontal edge), in degrees..

Max Pitch in Degrees: Float (single-precision). The pitch angle of the cone (from ConeDir to vertical edge), in degrees..

Stream: Random Stream Structure (by ref). The random stream from which to obtain the vector..  

## Outputs

Return Value: Vector.

