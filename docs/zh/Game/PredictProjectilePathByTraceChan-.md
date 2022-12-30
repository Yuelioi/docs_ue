# PredictProjectilePathByTraceChan-

预测受重力影响的虚拟弹丸的弧线，并沿弧线进行碰撞检查。返回模拟弧线的位置列表和模拟到达的目的地。如果它击中了什么，返回真（如果用碰撞追踪）。

目标是游戏性的统计学

## 图示

![]($-20221218-19072790.png)

## Inputs

在。执行。

开始位置。矢量。第一个开始追踪的位置。

发射速度。矢量。虚拟投射物 "的发射速度。

追踪路径。布尔值。沿着整个路径追踪，以寻找阻断命中。

射弹半径。Float（单精度）。扫射环境的虚拟弹丸的半径。

跟踪通道。ECollisionChannel Enum.如果bTracePath为真，则针对TraceChannel进行追踪。

Trace Complex: Boolean.使用TraceComplex（针对三角形而非基元的追踪）。

忽略的演员。演员对象引用数组。要从跟踪中排除的演员。

绘制调试类型。EDrawDebugTrace枚举。调试类型（一帧、持续时间、持久性）。

绘制调试时间。Float（单精度）。调试线的持续时间（只与DrawDebugType::Duration有关）。

模拟频率。Float（单精度）。决定仿真中每个子步骤的大小（切分MaxSimTime）。

最大模拟时间。Float（单精度）。虚拟射弹的最大模拟时间。

覆盖Gravity Z: Float（单精度）。重力的可选覆盖（如果是0，使用WorldGravityZ）。  

## Outputs

出：执行。

Out Hit: 命中结果结构。预测的命中结果，如果投射物将击中某物。

出路位置。矢量的阵列。预测的射弹路径。从StartPos到终点的一系列有序的位置。包括撞击点的位置，如果它击中了什么东西。

Out Last Trace Destination。向量。它所做的最后追踪的目标位置。如果有撞击，将不在路径上。

返回值。布尔值。如果沿着路径撞到了什么东西，则为真（如果用碰撞追踪）。
