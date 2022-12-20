# MultiCapsuleTraceByChannel

Sweeps a capsule along the given line and returns all hits encountered up to and including the first blocking hit.. This trace finds the objects that RESPOND to the given TraceChannel

Target is Kismet System Library

## 图示

![]($-20221218-18192526.png)

## Inputs

In: Exec.

Start: Vector. Start of line segment..

End: Vector. End of line segment..

Radius: Float (single-precision). Radius of the capsule to sweep.

Half Height: Float (single-precision). Distance from center of capsule to tip of hemisphere endcap..

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

