# LineTraceTrackedObjects3D

Perform a line trace against any real-world geometry as tracked by the AR system.

Target is ARBlueprint Library

## 图示

![]($-20221218-17575660.png)

## Inputs

In: Exec.

Start: Vector. Start point of the trace, in world space..

End: Vector. End point of the trace, in world space..

Test Feature Points: Boolean.

Test Ground Plane: Boolean.

Test Plane Extents: Boolean.

Test Plane Boundary Polygon: Boolean.  

## Outputs

Out: Exec.

Return Value: Array of ARTrace Result Structures. a list of \c FARTraceResult sorted by distance from camera..

