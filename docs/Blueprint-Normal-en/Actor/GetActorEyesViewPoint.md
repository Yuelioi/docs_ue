# GetActorEyesViewPoint

Returns the point of view of the actor.. Note that this doesn't mean the camera, but the 'eyes' of the actor.. For example, for a Pawn, this would define the eye height location,. and view rotation (which is different from the pawn rotation which has a zeroed pitch component).. A camera first person view will typically use this view point. Most traces (weapon, AI) will be done from this view point.

Target is Actor

## 图示

![]($-20221218-17342442.png)

## Inputs

Target: Actor Object Reference.  

## Outputs

Out Location: Vector. location of view point.

Out Rotation: Rotator. view rotation of actor..

