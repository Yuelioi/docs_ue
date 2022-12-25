# MultiSphereTraceByProfile

The world is scanned with a sphere and all initial overlaps using a particular profile are returned, followed by overlap hits and then the first blocking hit. The results are sorted so that the blocking hit (if found) will be the last element of the array. Only the closest single blocking result will be generated, and no tests will be performed after that.

The target is the Kismet system library

## 图示

![]($-20221218-18193349.png)

## Inputs

in. Execution.

Start. Vector. The start of the line segment.

End. vector. The end of the line segment.

Radius. float (single precision). The radius of the sphere to be scanned.

Contour Name. Name. The "profile" used to determine which components to hit.

Trace Complex: Boolean value. True to test for complex collisions, false to test for simplified collisions.

Ignored Actors. Reference array of actor objects.

Draw debug type. edrawDebugTrace enumeration.

IgnoreSelf: Boolean value.

Trace Color: Linear color structure.

Trace Hit Color: Linear color structure.

DrawTime. Floating point number (single precision). 

## Outputs

Output. Execution: Execution.

Output hits. Array of hit result structures. A list of hits, sorted from start to finish along the track. The blocked hits will be the last hits, if any.

Return value. Boolean value. True if there were blocked hits, false otherwise.