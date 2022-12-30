# BoxTraceByChannel

Sweeps a box along the given line and returns the first blocking hit encountered.. This trace finds the objects that RESPONDS to the given TraceChannel

Target is Kismet System Library

## 图示

![]($-20221218-18183288.png)

## Inputs

In: Exec.

Start: Vector. Start of line segment..

End: Vector. End of line segment..

Half Size: Vector. Distance from the center of box along each axis.

Orientation: Rotator. Orientation of the box.

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

Out Hit: Hit Result Structure. Properties of the trace hit..

Return Value: Boolean. True if there was a hit, false otherwise..

