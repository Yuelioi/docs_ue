# ApplyRootMotionMovetoForce

Apply force to character's movement

Target is Ability Task Apply Root Motion Move to Force

## 图示

![]($-20221218-17330587.png)

## Inputs

In: Exec.

Task Instance Name: Name.

Target Location: Vector.

Duration: Float (single-precision).

Set New Movement Mode: Boolean.

Movement Mode: EMovementMode Enum.

Restrict Speed to Expected: Boolean.

Path Offset Curve: Curve Vector Object Reference.

Velocity on Finish Mode: ERootMotionFinishVelocityMode Enum.

Set Velocity on Finish: Vector.

Clamp Velocity on Finish: Float (single-precision).  

## Outputs

Out: Exec.

Async Task: Ability Task Apply Root Motion Move To Force Object Reference.

On Timed Out: Exec. On Timed Out.

On Timed Out And Destination Reached: Exec. On Timed Out and Destination Reached.

