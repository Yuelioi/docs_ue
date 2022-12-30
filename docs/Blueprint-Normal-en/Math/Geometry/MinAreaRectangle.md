# MinAreaRectangle

Finds the minimum area rectangle that encloses a set of coplanar points.. Uses the exhaustive search algorithm in http://www.geometrictools.com/Documentation/MinimumAreaRectangle.pdf

Target is Kismet Math Library

## 图示

![]($-20221218-19503479.png)

## Inputs

In: Exec.

In Points: Array of Vectors. Points to enclose in the rectangle; need to be within the same plane for correct results.

Sample Surface Normal: Vector (by ref). Normal indicating the surface direction for the points.

Debug Draw: Boolean. Draws the output rectangle for debugging purposes provided the world context is set as well.  

## Outputs

Out: Exec.

Out Rect Center: Vector. Translation for the output rectangle from the origin.

Out Rect Rotation: Rotator. Rotation for the output rectangle from the XY plane.

Out Rect Length X: Float (single-precision). Length of the output rectangle along the X axis before rotation.

Out Rect Length Y: Float (single-precision). Length of the output rectangle along the Y axis before rotation.

