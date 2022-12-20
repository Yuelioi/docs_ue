# AddMovementInput

Add movement input along the given world direction vector (usually normalized) scaled by 'ScaleValue'. If ScaleValue < 0, movement will be in the opposite direction.. Base Pawn classes won't automatically apply movement, it's up to the user to do so in a Tick event. Subclasses such as Character and DefaultPawn automatically handle this input and move.

Target is Pawn

## 图示

![]($-20221218-20191441.png)

## Inputs

In: Exec.

Target: Pawn Object Reference.

World Direction: Vector. Direction in world space to apply input.

Scale Value: Float (single-precision). Scale to apply to input. This can be used for analog input, ie a value of 0.5 applies half the normal value, while -1.0 would reverse the direction..

Force: Boolean. If true always add the input, ignoring the result of IsMoveInputIgnored()..  

## Outputs

Out: Exec.

