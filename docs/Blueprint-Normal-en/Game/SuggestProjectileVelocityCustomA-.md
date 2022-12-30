# SuggestProjectileVelocityCustomA-

Returns the launch velocity needed for a projectile at rest at StartPos to land on EndPos.. Assumes a medium arc (e.g. 45 deg on level ground). Projectile velocity is variable and unconstrained.. Does no tracing.

Target is Gameplay Statics

## 图示

![]($-20221218-19075367.png)

## Inputs

In: Exec.

Start Pos: Vector. Start position of the simulation.

End Pos: Vector. Desired end location for the simulation.

Override Gravity Z: Float (single-precision). Optional override of WorldGravityZ.

Arc Param: Float (single-precision). Change height of arc between 0.0-1.0 where 0.5 is the default medium arc, 0 is up, and 1 is directly toward EndPos..  

## Outputs

Out: Exec.

Out Launch Velocity: Vector. Returns the launch velocity required to reach the EndPos.

Return Value: Boolean.

