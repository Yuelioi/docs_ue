# ApplyRootMotionJumpForce

Apply force to character's movement

Target is Ability Task Apply Root Motion Jump Force

## 图示

![]($-20221218-17330330.png)

## Inputs

In: Exec.

Task Instance Name: Name.

Rotation: Rotator.

Distance: Float (single-precision).

Height: Float (single-precision).

Duration: Float (single-precision).

Minimum Landed Trigger Time: Float (single-precision).

Finish on Landed: Boolean.

Velocity on Finish Mode: ERootMotionFinishVelocityMode Enum.

Set Velocity on Finish: Vector.

Clamp Velocity on Finish: Float (single-precision).

Path Offset Curve: Curve Vector Object Reference.

Time Mapping Curve: Curve Float Object Reference.  

## Outputs

Out: Exec.

Async Task: Ability Task Apply Root Motion Jump Force Object Reference.

On Finish: Exec. On Finish.

On Landed: Exec. On Landed.

