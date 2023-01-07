# MultiSphereTraceForObjects

Sweeps through a sphere along the given line and returns all objects encountered. This finds only objects of the type specified by ObjectTypes.

The target is the Kismet system library

## 图示

![](/uploads/projects/ue-bluprint/20221218-18193468.png)

## Inputs

in. Execute.

Start. Vector. The start of the line segment.

End. vector. The end of the line segment.

Radius. float (single precision). The radius of the sphere to be scanned.

Object type. array of EObjectTypeQuery enumeration. Array of object types to be traced.

Trace Complex: Boolean value. True to test for complex collisions, false to test for simplified collisions.

Ignored actors. Array of actor object references.

Draw debug type. edrawDebugTrace enumeration.

IgnoreSelf: Boolean value.

Trace Color: Linear color structure.

Trace Hit Color: Linear color structure.

DrawTime. Floating point number (single precision).

## Outputs

Output. Execution: Execution.

Out Hits: Array of hit result structures. A list of hits, sorted from start to finish along the trace. Blocking hits will be the last hit, if any.

Return Value. Boolean value. True if there is a hit, false otherwise.

<hr>

Sweeps a sphere along the given line and returns all hits encountered.. This only finds objects that are of a type specified by ObjectTypes.

Target is Kismet System Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-18193468.png)

## Inputs

In: Exec.

Start: Vector. Start of line segment..

End: Vector. End of line segment..

Radius: Float (single-precision). Radius of the sphere to sweep.

Object Types: Array of EObjectTypeQuery Enums. Array of Object Types to trace.

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

Return Value: Boolean. True if there was a hit, false otherwise..
