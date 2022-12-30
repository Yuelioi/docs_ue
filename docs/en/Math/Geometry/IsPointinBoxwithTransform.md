# IsPointinBoxwithTransform

Determines whether a given point is in a box with a given transform. Includes points on the box.

Target is Kismet Math Library

## 图示

![]($-20221218-19503344.png)

## Inputs

Point: Vector. Point to test.

Box World Transform: Transform (by ref). Component-to-World transform of the box..

Box Extent: Vector. Extents of the box (distance in each axis from origin), in component space..  

## Outputs

Return Value: Boolean. Whether the point is in the box..

