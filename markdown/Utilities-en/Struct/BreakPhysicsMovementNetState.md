# BreakPhysicsMovementNetState

Adds a node that breaks a 'PhysicsMovementNetState' into its member fields

## 图示

![]($-20221218-14410798.png)

## Inputs

Physics Movement Net State: Physics Movement Net State Structure (by ref).  

## Outputs

Force Multiplier: Float (single-precision). Force Multiplier:. Actually used by AsyncTick to scale force applied.

Jump Strength: Float (single-precision). Jump Strength.

Auto Face Target Yaw Strength: Float (single-precision). Auto Face Target Yaw Strength.

Auto Face Target Yaw Damp: Float (single-precision). Auto Face Target Yaw Damp.

Enable Auto Face Target Yaw: Boolean. Enable Auto Face Target Yaw:. If enabled, input cmd should specify target yaw..

Enable Keep Upright: Boolean. Enable Keep Upright:. If enabled, object will attempt to keep its up vector aligned with world up..

Auto Brake Strength: Float (single-precision). Auto Brake Strength:. Strength of auto brake force applied when no input force and on ground..

Rand Value: Integer. Rand Value:. Arbitrary data that doesn't affect sim but could still trigger rollback.

Jump Cooldown MS: Integer. Jump Cooldown MS.

Jump Count: Integer. Jump Count:. Number of frames jump has been pressed.

Check Sum: Integer. Check Sum.

Recovery Frame: Integer. Recovery Frame:. Frame we started "in air recovery" on.

Jump Start Frame: Integer. Jump Start Frame:. Frame we started jumping on.

In Air Frame: Integer. In Air Frame:. Frame we started being in the air.

Kick Frame: Integer. Kick Frame:. Frame we last applied a kick impulse.

