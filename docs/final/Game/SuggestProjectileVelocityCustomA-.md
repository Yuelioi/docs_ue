# SuggestProjectileVelocityCustomA-

返回一个静止在 StartPos 的弹丸落到 EndPos 所需的发射速度。假设是一个中等弧度（例如，在平地上 45 度）。弹丸速度是可变的，不受限制的。不做追踪。

目标是游戏性的统计学

## 图示

![](/uploads/projects/ue-bluprint/20221218-19075367.png)

## Inputs

在。执行。

开始位置。矢量。仿真的起始位置。

结束位置。矢量。仿真的预期结束位置。

覆盖重力 Z：浮点数（单精度）。对 WorldGravityZ 的可选覆盖。

弧形参数。Float（单精度）。在 0.0-1.0 之间改变弧线的高度，其中 0.5 是默认的中等弧线，0 是向上的，1 是直接朝向 EndPos。

## Outputs

出：执行。

出发射速度。矢量。返回到达 EndPos 所需的发射速度。

返回值。布尔值。

<hr>

Returns the launch velocity needed for a projectile at rest at StartPos to land on EndPos.. Assumes a medium arc (e.g. 45 deg on level ground). Projectile velocity is variable and unconstrained.. Does no tracing.

Target is Gameplay Statics

## 图示

![](/uploads/projects/ue-bluprint/20221218-19075367.png)

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
