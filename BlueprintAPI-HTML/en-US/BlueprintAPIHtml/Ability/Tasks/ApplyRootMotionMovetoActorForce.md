# ApplyRootMotionMovetoActorForce

Apply force to character's movement

Target is Ability Task Apply Root Motion Move to Actor Force

## 图示

![]($-20221218-17330457.png)

## Inputs

In: Exec.

Task Instance Name: Name.

Target Actor: Actor Object Reference.

Target Location Offset: Vector.

Offset Alignment: ERootMotionMoveToActorTargetOffsetType Enum.

Duration: Float (single-precision).

Target Lerp Speed Horizontal: Curve Float Object Reference.

Target Lerp Speed Vertical: Curve Float Object Reference.

Set New Movement Mode: Boolean.

Movement Mode: EMovementMode Enum.

Restrict Speed to Expected: Boolean.

Path Offset Curve: Curve Vector Object Reference.

Time Mapping Curve: Curve Float Object Reference.

Velocity on Finish Mode: ERootMotionFinishVelocityMode Enum.

Set Velocity on Finish: Vector.

Clamp Velocity on Finish: Float (single-precision).

Disable Destination Reached Interrupt: Boolean.  

## Outputs

Out: Exec.

Async Task: Ability Task Apply Root Motion Move To Actor Force Object Reference.

On Finished: Exec. On Finished.

Destination Reached: Boolean.

Timed Out: Boolean.

Final Target Location: Vector.

