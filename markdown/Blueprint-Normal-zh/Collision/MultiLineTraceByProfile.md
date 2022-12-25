# MultiLineTraceByProfile

Rays are traced using a specific profile pair world and overlapping hits are returned, then the first blocked hit is returned. The results are sorted, so the blocked hit (if found) will be the last element of the array. Only the closest one to the blocking result will be generated, and no further tests will be performed after that.

The target is the Kismet system library

## 图示

![]($-20221218-18192996.png)

## Inputs

in. Execution.

Start. Vector. The start of the line segment.

End. vector. The end of the line segment.

Shape name. Name. The 'outline' used to determine which component to hit.

Trace Complex: Boolean value. True to test for complex collisions, false to test for simplified collisions.

Ignored Actors. Reference array of actor objects.

Draw debug type. edrawDebugTrace enumeration.

IgnoreSelf: Boolean value.

Trace Color: Linear color structure.

Trace Hit Color: Linear color structure.

DrawTime. Floating point number (single precision). 

## Outputs

Output. Execution: Execution.

Out Hits: Array of hit result structures.

Return Value. Boolean. True if there is a blocking hit, false otherwise.