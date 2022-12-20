# LineTraceTrackedObjects

Perform a line trace against any real-world geometry as tracked by the AR system.

Target is ARBlueprint Library

## 图示

![]($-20221218-17575549.png)

## Inputs

In: Exec.

Screen Coord: Vector 2D Structure. Coordinate of the point on the screen from which to cast a ray into the tracking space..

Test Feature Points: Boolean.

Test Ground Plane: Boolean.

Test Plane Extents: Boolean.

Test Plane Boundary Polygon: Boolean.  

## Outputs

Out: Exec.

Return Value: Array of ARTrace Result Structures. a list of \c FARTraceResult sorted by distance from camera..

