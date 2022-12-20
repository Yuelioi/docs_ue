# GetLastInputVector

Return the last input vector in world space that was processed by ConsumeInputVector(), which is usually done by the Pawn or PawnMovementComponent.. Any user that needs to know about the input that last affected movement should use this function.

Target is Pawn Movement Component

## 图示

![]($-20221218-20184370.png)

## Inputs

Target: Pawn Movement Component Object Reference.  

## Outputs

Return Value: Vector. The last input vector in world space that was processed by ConsumeInputVector()..

