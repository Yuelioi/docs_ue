# DivideSplineIntoPolylineRecursiv-

Given a threshold, recursively sub-divides the spline section until the list of segments (polyline) matches the spline shape.

Target is Spline Component

## 图示

![]($-20221218-21000871.png)

## Inputs

Target: Spline Component Object Reference.

Start Distance Along Spline: Float (single-precision).

End Distance Along Spline: Float (single-precision).

Coordinate Space: ESplineCoordinateSpace Enum.

Max Square Distance from Spline: Float (single-precision).  

## Outputs

Out Points: Array of Vectors.

Return Value: Boolean. Given a threshold, recursively sub-divides the spline section until the list of segments (polyline) matches the spline shape..

