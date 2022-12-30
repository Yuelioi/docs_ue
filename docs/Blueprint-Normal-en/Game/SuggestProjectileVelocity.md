# SuggestProjectileVelocity

Calculates an launch velocity for a projectile to hit a specified point.

Target is Gameplay Statics

## 图示

![]($-20221218-19075217.png)

## Inputs

In: Exec.

Start Location: Vector. Intended launch location.

End Location: Vector. Desired landing location.

Launch Speed: Float (single-precision). Desired launch speed.

Override Gravity Z: Float (single-precision). Optional gravity override. 0 means "do not override"..

Trace Option: ESuggestProjVelocityTraceOption Enum. Controls whether or not to validate a clear path by tracing along the calculated arc.

Collision Radius: Float (single-precision). Radius of the projectile (assumed spherical), used when tracing.

Favor High Arc: Boolean. If true and there are 2 valid solutions, will return the higher arc. If false, will favor the lower arc..

Draw Debug: Boolean. When true, a debug arc is drawn (red for an invalid arc, green for a valid arc).  

## Outputs

Out: Exec.

Toss Velocity: Vector. (output) Result launch velocity..

Return Value: Boolean. Returns false if there is no valid solution or the valid solutions are blocked. Returns true otherwise..

