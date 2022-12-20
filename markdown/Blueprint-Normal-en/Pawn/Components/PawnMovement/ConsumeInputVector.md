# ConsumeInputVector

Returns the pending input vector and resets it to zero.

  * This should be used during a movement update (by the Pawn or PawnMovementComponent) to prevent accumulation of control input between frames.

  * 



Target is Pawn Movement Component

## 图示

![]($-20221218-20184257.png)

## Inputs

In: Exec.

Target: Pawn Movement Component Object Reference.  

## Outputs

Out: Exec.

Return Value: Vector. The pending input vector..

