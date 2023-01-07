# MultiSphereTraceByProfile

The world is scanned with a sphere and all initial overlaps using a particular profile are returned, followed by overlap hits and then the first blocking hit. The results are sorted so that the blocking hit (if found) will be the last element of the array. Only the closest single blocking result will be generated, and no tests will be performed after that.

The target is the Kismet system library

## 图示

![](/uploads/projects/ue-bluprint/20221218-18193349.png)

## Inputs

in. Execution.

Start. Vector. The start of the line segment.

End. vector. The end of the line segment.

Radius. float (single precision). The radius of the sphere to be scanned.

Contour Name. Name. The "profile" used to determine which components to hit.

Trace Complex: Boolean value. True to test for complex collisions, false to test for simplified collisions.

Ignored Actors. Reference array of actor objects.

Draw debug type. edrawDebugTrace enumeration.

IgnoreSelf: Boolean value.

Trace Color: Linear color structure.

Trace Hit Color: Linear color structure.

DrawTime. Floating point number (single precision).

## Outputs

Output. Execution: Execution.

Output hits. Array of hit result structures. A list of hits, sorted from start to finish along the track. The blocked hits will be the last hits, if any.

Return value. Boolean value. True if there were blocked hits, false otherwise.

<hr>

Sweep a sphere against the world and return all initial overlaps using a specific profile, then overlapping hits and then first blocking hit. Results are sorted, so a blocking hit (if found) will be the last element of the array. Only the single closest blocking result will be generated, no tests will be done after that

Target is Kismet System Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-18193349.png)

## Inputs

In: Exec.

Start: Vector. Start of line segment..

End: Vector. End of line segment..

Radius: Float (single-precision). Radius of the sphere to sweep.

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

Out Hits: Array of Hit Result Structures. A list of hits, sorted along the trace from start to finish. The blocking hit will be the last hit, if there was one..

Return Value: Boolean. True if there was a blocking hit, false otherwise..
