# MultiCapsuleTraceByChannel

Scans a capsule along the given line and returns all hits encountered up to and including the first blocking hit. The trace finds the object that responds to the given TraceChannel

The target is the Kismet system library

## 图示

![]($-20221218-18192526.png)

## Inputs

in. Execute.

Start. vector. The start of the line segment.

End. vector. The end of the line segment.

Radius. float (single precision). The radius of the swept capsule.

Half height. Float (single-precision). The distance from the center of the capsule to the end of the hemisphere.

Trace channel. ETraceTypeQuery enumeration.

TraceComplex: Boolean. True to test for complex collisions, false to test for simplified collisions.

Actors to Ignore. An array of actor object references.

DrawingDebugType. EDrawDebugTrace enumeration.

IgnoreSelf: Boolean value.

Trace Color: Linear color structure.

Trace Hit Color: Linear color structure.

DrawTime. Floating-point number (single precision). 

## Outputs

Output. Execution: Execution.

Out Hits: Array of hit result structures. A list of hits, sorted from start to finish along the trace. Blocking hits will be the last hit, if any.

Return Value. Boolean value. True if there are blocked hits, false otherwise.