# GetAzimuthandElevation

Breaks a direction vector apart into Azimuth (Yaw) and Elevation (Pitch) rotation values given in degrees. (non-clamped). Relative to the provided reference frame (an Actor's WorldTransform for example)

Target is Kismet Math Library

## 图示

![]($-20221218-19564170.png)

## Inputs

In Direction: Vector.

Reference Frame: Transform (by ref).  

## Outputs

Azimuth: Float (single-precision).

Elevation: Float (single-precision).

