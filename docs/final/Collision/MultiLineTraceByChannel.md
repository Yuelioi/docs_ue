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
Does a collision trace along the given line and returns all hits encountered up to and including the first blocking hit.. This trace finds the objects that RESPOND to the given TraceChannel

Target is Kismet System Library

## 图示

![]($-20221218-18192879.png)

## Inputs

In: Exec.

Start: Vector. Start of line segment..

End: Vector. End of line segment..

Trace Channel: ETraceTypeQuery Enum. The channel to trace.

Trace Complex: Boolean. True to test against complex collision, false to test against simplified collision..

Actors to Ignore: Array of Actor Object References.

Draw Debug Type: EDrawDebugTrace Enum.

Ignore Self: Boolean.

Trace Color: Linear Color Structure.

Trace Hit Color: Linear Color Structure.

Draw Time: Float (single-precision).  

## Outputs

Out: Exec.

Out Hits: Array of Hit Result Structures.

Return Value: Boolean. True if there was a blocking hit, false otherwise..

