# GetPendingMovementInputVector

Return the pending input vector in world space. This is the most up-to-date value of the input vector, pending ConsumeMovementInputVector() which clears it,. Usually only a PawnMovementComponent will want to read this value, or the Pawn itself if it is responsible for movement.

Target is Pawn

## 图示

![]($-20221218-20191784.png)

## Inputs

Target: Pawn Object Reference.  

## Outputs

Return Value: Vector. The pending input vector in world space..

