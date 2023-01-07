# SuggestProjectileVelocity

计算一个弹丸击中指定点的发射速度。

目标是游戏性的统计学

## 图示

![](/uploads/projects/ue-bluprint/20221218-19075217.png)

## Inputs

在。执行。

开始的位置。向量。预定的发射位置。

结束位置。向量。希望的着陆地点。

发射速度。Float（单精度）。希望的发射速度。

覆盖重力 Z：浮点数（单精度）。可选的重力覆盖。0 表示 "不覆盖"。

跟踪选项。ESuggestProjVelocityTraceOption 枚举。控制是否通过沿计算弧线追踪来验证清晰路径。

碰撞半径。Float（单精度）。投射物的半径（假设为球形），追踪时使用。

赞成高弧：布尔值。如果为真，并且有两个有效的解决方案，将返回较高的弧。如果是假的，将倾向于较低的圆弧。

绘制调试。布尔值。当为真时，会画出一个调试弧（红色表示无效弧，绿色表示有效弧）。

## Outputs

出：执行。

抛出速度。矢量。(输出) 结果发射速度。

返回值。布尔值。如果没有有效的解决方案或有效的解决方案被阻止，则返回 false。否则返回 true。

<hr>

Calculates an launch velocity for a projectile to hit a specified point.

Target is Gameplay Statics

## 图示

![](/uploads/projects/ue-bluprint/20221218-19075217.png)

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
