# MultiLineTraceByProfile

Trace a ray against the world using a specific profile and return overlapping hits and then first blocking hit. Results are sorted, so a blocking hit (if found) will be the last element of the array. Only the single closest blocking result will be generated, no tests will be done after that

Target is Kismet System Library

## 图示

![]($-20221218-18192996.png)

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

