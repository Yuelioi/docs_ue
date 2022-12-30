# MultiSphereTraceByChannel

Sweeps along the given line through a sphere and returns all hits encountered, including the first blocked hit up to and including the first blocked hit. The trace finds the object that responds to the given TraceChannel

The target is the Kismet system library

## 图示

![]($-20221218-18193232.png)

## Inputs

in. Execute.

Start. vector. The start of the line segment.

End. vector. The end of the line segment.

Radius. float (single precision). The radius of the sphere to be scanned.

Trace channel. ETraceTypeQuery enumeration.

Trace Complex: Boolean value. True to test complex collisions, false to test simplified collisions.

Ignored Actors. Array of actor object references.

DrawingDebugType. EDrawDebugTrace enumeration.

IgnoreSelf: Boolean value.

Trace Color: Linear color structure.

Trace Hit Color: Linear color structure.

DrawTime. Floating-point number (single precision). 

## Outputs

Output. Execution: Execution.

Out Hits: Array of hit result structures. A list of hits, sorted from start to finish along the trace. Blocking hits will be the last hit, if any.

Return Value. Boolean value. True if there are blocked hits, false otherwise.