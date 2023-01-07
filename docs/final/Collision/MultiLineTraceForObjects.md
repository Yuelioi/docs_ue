# MultiLineTraceForObjects

Performs collision tracking along the given line and returns all collisions encountered. This finds only objects of the type specified by ObjectTypes.

The target is the Kismet system library

## 图示

![](/uploads/projects/ue-bluprint/20221218-18193113.png)

## Inputs

in. Execute.

Start. Vector. The start of the line segment.

End. vector. The end of the line segment.

The object type. eObjectTypeQuery enumeration array. The array of object types to trace.

Trace Complex: Boolean value. True when testing for complex collisions, false when testing for simplified collisions.

Ignored actors. Array of actor object references.

Draw debug type. edrawDebugTrace enumeration.

IgnoreSelf: Boolean value.

Trace Color: Linear color structure.

Trace Hit Color: Linear color structure.

DrawTime. Floating point number (single precision).

## Outputs

Output. Execution: Execution.

Out Hits: Array of hit result structures.

Return Value. Boolean. True if there is a hit, false otherwise.

<hr>

Does a collision trace along the given line and returns all hits encountered.. This only finds objects that are of a type specified by ObjectTypes.

Target is Kismet System Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-18193113.png)

## Inputs

In: Exec.

Start: Vector. Start of line segment..

End: Vector. End of line segment..

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

Out Hits: Array of Hit Result Structures.

Return Value: Boolean. True if there was a hit, false otherwise..
