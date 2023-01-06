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
Sweeps a sphere along the given line and returns all hits encountered up to and including the first blocking hit.. This trace finds the objects that RESPOND to the given TraceChannel

Target is Kismet System Library

## 图示

![]($-20221218-18193232.png)

## Inputs

In: Exec.

Start: Vector. Start of line segment..

End: Vector. End of line segment..

Radius: Float (single-precision). Radius of the sphere to sweep.

Trace Channel: ETraceTypeQuery Enum.

Trace Complex: Boolean. True to test against complex collision, false to test against simplified collision..

Actors to Ignore: Array of Actor Object References.

Draw Debug Type: EDrawDebugTrace Enum.

Ignore Self: Boolean.

Trace Color: Linear Color Structure.

Trace Hit Color: Linear Color Structure.

Draw Time: Float (single-precision).  

## Outputs

Out: Exec.

Out Hits: Array of Hit Result Structures. A list of hits, sorted along the trace from start to finish. The blocking hit will be the last hit, if there was one..

Return Value: Boolean. True if there was a blocking hit, false otherwise..

