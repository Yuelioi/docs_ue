# PointsAreCoplanar

确定一组给定的点是否为共面，有一个公差。任何三个或更少的点都是共面的。

目标是 Kismet 数学图书馆

## 图示

![](/uploads/projects/ue-bluprint/20221218-19503616.png)

## Inputs

点。矢量的阵列。确定共面性的点的集合，用于...

误差。Float（单精度）。较大的数字意味着允许更多的差异。

## Outputs

返回值。布尔值。根据公差，这些点是否相对共面。

<hr>

Determines whether a given set of points are coplanar, with a tolerance. Any three points or less are always coplanar.

Target is Kismet Math Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-19503616.png)

## Inputs

Points: Array of Vectors. The set of points to determine coplanarity for..

Tolerance: Float (single-precision). Larger numbers means more variance is allowed..

## Outputs

Return Value: Boolean. Whether the points are relatively coplanar, based on the tolerance.
