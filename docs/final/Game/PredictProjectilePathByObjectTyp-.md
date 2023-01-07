# PredictProjectilePathByObjectTyp-

预测受重力影响的虚拟弹丸的弧线，并沿弧线进行碰撞检查。返回模拟弧线的位置列表和模拟到达的目的地。如果它击中了什么，则返回真。

目标是游戏性的统计学

## 图示

![](/uploads/projects/ue-bluprint/20221218-19072671.png)

## Inputs

在。执行。

开始位置。矢量。第一个开始追踪的位置。

发射速度。矢量。虚拟投射物 "的发射速度。

追踪路径。布尔值。沿着整个路径追踪，以寻找阻断点。

射弹半径。Float（单精度）。扫射环境的虚拟弹丸的半径。

对象类型。EObjectTypeQuery 枚举的数组。如果 bTracePath 为真，要追踪的 ObjectTypes。

Trace Complex: Boolean.使用 TraceComplex（针对三角形而非基元的追踪）。

忽略的演员。演员对象引用数组。要从跟踪中排除的演员。

绘制调试类型。EDrawDebugTrace 枚举。调试类型（一帧、持续时间、持久性）。

绘制调试时间。Float（单精度）。调试线的持续时间（只与 DrawDebugType::Duration 有关）。

模拟频率。Float（单精度）。决定仿真中每个子步骤的大小（切分 MaxSimTime）。

最大模拟时间。Float（单精度）。虚拟射弹的最大模拟时间。

覆盖 Gravity Z: Float（单精度）。重力的可选覆盖（如果是 0，使用 WorldGravityZ）。

## Outputs

出：执行。

Out Hit: 命中结果结构。预测的命中结果，如果投射物将击中某物。

出路位置。矢量的阵列。预测的射弹路径。从 StartPos 到终点的一系列有序的位置。包括撞击点的位置，如果它击中了什么东西。

Out Last Trace Destination。向量。它所做的最后追踪的目标位置。如果有撞击，将不在路径上。

返回值。布尔值。如果跟踪碰撞，如果沿路撞到了什么，则为真。

<hr>

Predict the arc of a virtual projectile affected by gravity with collision checks along the arc. Returns a list of positions of the simulated arc and the destination reached by the simulation.. Returns true if it hit something.

Target is Gameplay Statics

## 图示

![](/uploads/projects/ue-bluprint/20221218-19072671.png)

## Inputs

In: Exec.

Start Pos: Vector. First start trace location.

Launch Velocity: Vector. Velocity the "virtual projectile" is launched at.

Trace Path: Boolean. Trace along the entire path to look for blocking hits.

Projectile Radius: Float (single-precision). Radius of the virtual projectile to sweep against the environment.

Object Types: Array of EObjectTypeQuery Enums. ObjectTypes to trace against, if bTracePath is true..

Trace Complex: Boolean. Use TraceComplex (trace against triangles not primitives).

Actors to Ignore: Array of Actor Object References. Actors to exclude from the traces.

Draw Debug Type: EDrawDebugTrace Enum. Debug type (one-frame, duration, persistent).

Draw Debug Time: Float (single-precision). Duration of debug lines (only relevant for DrawDebugType::Duration).

Sim Frequency: Float (single-precision). Determines size of each sub-step in the simulation (chopping up MaxSimTime).

Max Sim Time: Float (single-precision). Maximum simulation time for the virtual projectile..

Override Gravity Z: Float (single-precision). Optional override of Gravity (if 0, uses WorldGravityZ).

## Outputs

Out: Exec.

Out Hit: Hit Result Structure. Predicted hit result, if the projectile will hit something.

Out Path Positions: Array of Vectors. Predicted projectile path. Ordered series of positions from StartPos to the end. Includes location at point of impact if it hit something..

Out Last Trace Destination: Vector. Goal position of the final trace it did. Will not be in the path if there is a hit..

Return Value: Boolean. True if hit something along the path if tracing for collision..
