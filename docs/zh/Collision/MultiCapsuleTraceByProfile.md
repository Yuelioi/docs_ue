# MultiCapsuleTraceByProfile

The world is scanned with a capsule and all initial overlaps using a particular profile are returned, followed by the overlap hits and then the first blocking hit. The results are sorted so that the blocking hit (if found) will be the last element of the array. Only the closest single blocking result will be generated, and no tests will be performed after that.

The target is the Kismet system library

## 图示

![]($-20221218-18192639.png)

## Inputs

in. Execution.

Start. Vector. The start of the line segment.

End. vector. The end of the line segment.

Radius. float (single precision). The radius of the swept capsule.

Half height. Float (single-precision). The distance from the center of the capsule to the end of the hemisphere.

Contour Name. Name. The "outline" used to determine which component to hit.

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