# GetPendingInputVector

Return the pending input vector in world space. This is the most up-to-date value of the input vector, pending ConsumeMovementInputVector() which clears it.. PawnMovementComponents implementing movement usually want to use either this or ConsumeInputVector() as these functions represent the most recent state of input.

Target is Pawn Movement Component

## 图示

![]($-20221218-20184597.png)

## Inputs

Target: Pawn Movement Component Object Reference.  

## Outputs

Return Value: Vector. The pending input vector in world space..

