# ConsumeMovementInputVector

Returns the pending input vector and resets it to zero.. This should be used during a movement update (by the Pawn or PawnMovementComponent) to prevent accumulation of control input between frames.. Copies the pending input vector to the saved input vector (GetLastMovementInputVector()).

Target is Pawn

## 图示

![]($-20221218-20191558.png)

## Inputs

In: Exec.

Target: Pawn Object Reference.  

## Outputs

Out: Exec.

Return Value: Vector. The pending input vector..

