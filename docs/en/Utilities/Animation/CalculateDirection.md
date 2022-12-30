# CalculateDirection

Returns degree of the angle between Velocity and Rotation forward vector. The range of return will be from [-180, 180]. Useful for feeding directional blendspaces.

Target is Kismet Animation Library

## 图示

![]($-20221218-12163962.png)

## Inputs

Velocity: Vector (by ref). The velocity to use as direction relative to BaseRotation.

Base Rotation: Rotator (by ref). The base rotation, e.g. of a pawn.  

## Outputs

Return Value: Float (single-precision).

