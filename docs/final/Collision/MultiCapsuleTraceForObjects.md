# MultiCapsuleTraceForObjects

Sweeps through a capsule along the given line and returns all hits encountered. This finds only objects of the type specified by ObjectTypes.

The target is the Kismet system library

## 图示

![]($-20221218-18192760.png)

## Inputs

in. Execute.

Start. Vector. The start of the line segment.

End. vector. The end of the line segment.

Radius. float (single precision). The radius of the swept capsule.

Half height. Float (single-precision). The distance from the center of the capsule to the end of the hemisphere.

Object type. array of EObjectTypeQuery enumeration. The array of object types to track.

TrackingComplex: Boolean value. True when testing complex collisions, false when testing simplified collisions.

Ignored actors. Array of actor object references.

Draw debug type. edrawDebugTrace enumeration.

IgnoreSelf: Boolean value.

Trace Color: Linear color structure.

Trace Hit Color: Linear color structure.

DrawTime. Floating point number (single precision). 

## Outputs

Output. Execution: Execution.

Output hits. Array of hit result structures. A list of hits, sorted from start to finish along the track. The blocked hits will be the last hits, if any.

Return value. Boolean value. True if there is a hit, false otherwise.
Sweeps a capsule along the given line and returns all hits encountered.. This only finds objects that are of a type specified by ObjectTypes.

Target is Kismet System Library

## 图示

![]($-20221218-18192760.png)

## Inputs

In: Exec.

Start: Vector. Start of line segment..

End: Vector. End of line segment..

Radius: Float (single-precision). Radius of the capsule to sweep.

Half Height: Float (single-precision). Distance from center of capsule to tip of hemisphere endcap..

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

