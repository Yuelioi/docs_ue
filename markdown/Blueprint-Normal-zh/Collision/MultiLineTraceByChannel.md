# MultiLineTraceByChannel

A collision trace is performed along the given line and returns all encountered collisions, including the first blocking collision. This trace finds the object that responds to the given TraceChannel

The target is the Kismet system library

## 图示

![]($-20221218-18192879.png)

## Inputs

in. Execute.

Start. vector. The start of the line segment.

End. vector. The end of the line segment.

ETraceTypeQuery enumeration. The channel to be traced.

Trace Complex: Boolean value. True when testing complex collisions, false when testing simplified collisions.

Actors to Ignore: Actors to ignore. An array of actor object references.

Drawing debug type. edrawDebugTrace enumeration.

IgnoreSelf: Boolean value.

Trace Color: Linear color structure.

Trace Hit Color: Linear color structure.

DrawTime. Floating point number (single precision). 

## Outputs

Output. Execution: Execution.

Out Hits: Array of hit result structures.

Return Value. Boolean. True if there is a blocking hit, false otherwise.