# GetLastMovementInputVector

Return the last input vector in world space that was processed by ConsumeMovementInputVector(), which is usually done by the Pawn or PawnMovementComponent.. Any user that needs to know about the input that last affected movement should use this function.. For example an animation update would want to use this, since by default the order of updates in a frame is:. PlayerController (device input) -> MovementComponent -> Pawn -> Mesh (animations)

Target is Pawn

## 图示

![]($-20221218-20191670.png)

## Inputs

Target: Pawn Object Reference.  

## Outputs

Return Value: Vector. The last input vector in world space that was processed by ConsumeMovementInputVector()..

