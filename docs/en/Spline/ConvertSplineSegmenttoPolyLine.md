# ConvertSplineSegmenttoPolyLine

Given a threshold, returns a list of vertices along the spline segment that, treated as a list of segments (polyline), matches the spline shape.

Target is Spline Component

## 图示

![]($-20221218-21000623.png)

## Inputs

Target: Spline Component Object Reference.

Spline Point Start Index: Integer.

Coordinate Space: ESplineCoordinateSpace Enum.

Max Square Distance from Spline: Float (single-precision).  

## Outputs

Out Points: Array of Vectors.

Return Value: Boolean. Given a threshold, returns a list of vertices along the spline segment that, treated as a list of segments (polyline), matches the spline shape..

