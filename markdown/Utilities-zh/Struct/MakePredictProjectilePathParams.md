# MakePredictProjectilePathParams

添加一个节点，从其成员中创建一个 "PredictProjectilePathParams"。

## 图示

![]($-20221218-14593010.png)

## Inputs

开始的位置。向量。开始位置：。追踪的起始位置。

发射速度。矢量。发射速度：。追踪开始时的初始发射速度。

有碰撞的追踪。Boolean.碰撞追踪：。是否沿着路径追踪，寻找阻挡碰撞，并在第一次撞击时停止。

射弹半径。Float（单精度）。投射物半径：。投射物半径，在追踪碰撞时使用。如果<=0，则使用直线追踪。

最大模拟时间。Float（单精度）。最大模拟时间：。虚拟射弹的最大模拟时间。

用通道追踪。Boolean.用通道追踪：。如果用碰撞追踪，是否使用TraceChannel。

跟踪通道。ECollisionChannel Enum.追踪通道:.使用的跟踪通道，如果用碰撞跟踪。

对象类型。EObjectTypeQuery枚举的数组。对象类型:.要使用的对象类型，如果用碰撞追踪的话。

要忽略的演员。演员对象参考数组。忽略的角色：。使用碰撞追踪时要忽略的角色。

模拟频率。Float (single-precision).模拟频率：。决定仿真中每个子步骤的大小（切分MaxSimTime）。建议在10到30之间，取决于所需的质量和性能。

覆盖重力Z：浮点（单精度）。覆盖Gravity Z:.重力的可选覆盖（如果是0，使用WorldGravityZ）。

绘制调试类型。EDrawDebugTrace Enum.绘图调试类型：.调试绘图持续时间选项...

绘制调试时间。Float (single-precision).Draw Debug Time:.调试线的持续时间（只与DrawDebugType::Duration有关）。

跟踪复合体：布尔。复杂追踪：。如果用碰撞追踪，则针对复杂碰撞（三角形而非简单基元）进行追踪。  

## Outputs

预测射弹路径参数。预测射弹路径参数结构。
