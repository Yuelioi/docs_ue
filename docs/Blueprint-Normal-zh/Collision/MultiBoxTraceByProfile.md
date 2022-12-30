# MultiBoxTraceByProfile

A box is scanned in the world and all initial overlaps using a particular profile are returned, followed by the overlapping hits and then the first blocked hit. The results are sorted so that the blocked hit (if found) will be the last element of the array. Only the closest single blocking result will be generated, and no tests will be performed after that.

The target is the Kismet system library

## 图示

![]($-20221218-18192285.png)

## Inputs

in. Execution.

Start. Vector. The start of the line segment.

End. vector. The end of the line segment.

The half size. vector. The distance along each axis from the center of the box.

Direction. Rotator. The direction of the box.

Shape name. Name. The 'outline' used to determine which component to hit.

Trace Complex: Boolean value. True to test for complex collisions; false to test for simplified collisions.

Ignored Actors. Actor object reference array.

Draw debug type. edrawDebugTrace enumeration.

IgnoreSelf: Boolean value.

Trace Color: Linear color structure.

Trace Hit Color: Linear color structure.

DrawTime. Floating point number (single precision). 

## Outputs

Output. Execution: Execution.

Out Hits: Array of hit result structures. A list of hits, sorted from start to finish along the trace. Blocking hits will be the last hit, if any.

Return Value. Boolean value. True if there are blocked hits, false otherwise.