# MultiLineTraceByProfile

Rays are traced using a specific profile pair world and overlapping hits are returned, then the first blocked hit is returned. The results are sorted, so the blocked hit (if found) will be the last element of the array. Only the closest one to the blocking result will be generated, and no further tests will be performed after that.

The target is the Kismet system library

## 图示

![](/uploads/projects/ue-bluprint/20221218-18192996.png)

## Inputs

in. Execution.

Start. Vector. The start of the line segment.

End. vector. The end of the line segment.

Shape name. Name. The 'outline' used to determine which component to hit.

Trace Complex: Boolean value. True to test for complex collisions, false to test for simplified collisions.

Ignored Actors. Reference array of actor objects.

Draw debug type. edrawDebugTrace enumeration.

IgnoreSelf: Boolean value.

Trace Color: Linear color structure.

Trace Hit Color: Linear color structure.

DrawTime. Floating point number (single precision).

## Outputs

Output. Execution: Execution.

Out Hits: Array of hit result structures.

Return Value. Boolean. True if there is a blocking hit, false otherwise.

<hr>

Trace a ray against the world using a specific profile and return overlapping hits and then first blocking hit. Results are sorted, so a blocking hit (if found) will be the last element of the array. Only the single closest blocking result will be generated, no tests will be done after that

Target is Kismet System Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-18192996.png)

## Inputs

In: Exec.

Start: Vector. Start of line segment..

End: Vector. End of line segment..

Profile Name: Name. The 'profile' used to determine which components to hit.

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
