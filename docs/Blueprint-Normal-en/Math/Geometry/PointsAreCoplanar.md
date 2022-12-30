# PointsAreCoplanar

Determines whether a given set of points are coplanar, with a tolerance. Any three points or less are always coplanar.

Target is Kismet Math Library

## 图示

![]($-20221218-19503616.png)

## Inputs

Points: Array of Vectors. The set of points to determine coplanarity for..

Tolerance: Float (single-precision). Larger numbers means more variance is allowed..  

## Outputs

Return Value: Boolean. Whether the points are relatively coplanar, based on the tolerance.

