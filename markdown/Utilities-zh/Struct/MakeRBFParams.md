# MakeRBFParams

添加一个节点，从其成员中创建一个 "RBFParams"。

## 图示

![]($-20221218-14595125.png)

## Inputs

解算器类型。ERBFSolverType枚举。解算器类型：。指定要使用的求解器的类型。大部分情况下，加法求解器需要归一化，而插值求解器则不那么依赖它。内插法求解器也有更平滑的混合，而加法求解器需要更多目标，但对每个目标的影响有更精确的控制。

半径。Float（单精度）。半径：。每个目标的默认半径。

自动半径。布尔型。自动半径：。根据目标之间的平均距离自动选择半径。

功能。ERBFFunctionType枚举。功能。

距离方法。ERBFDistanceMethod Enum.距离方法。

扭转轴: EBoneAxis Enum.Twist Axis:。当DistanceMethod为SwingAngle时使用的轴。

重量阈值。Float（单精度）。权重阈值：。权重，低于这个权重，我们不应该费力地从目标中返回贡献。

正常化方法。ERBFNormalizeMethod Enum.正常化方法：。用于规范化权重的方法。

中位数参考。矢量。中位数参考：。中位数的旋转或位置（用于归一化）。

中位数最小。Float（单精度）。中位数最小值：。用于中位数的最小距离。

中位数最大值：浮点数（单精度）。中位数最大值：。用于中位数的最大距离。  

## Outputs

RBFParams。RBFParams结构。
