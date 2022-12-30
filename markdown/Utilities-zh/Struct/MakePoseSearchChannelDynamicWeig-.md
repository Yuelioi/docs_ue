# MakePoseSearchChannelDynamicWeig-

添加一个节点，从其成员中创建一个 "PoseSearchChannelDynamicWeightParams"。

## 图示

![]($-20221218-14592054.png)

## Inputs

通道重量刻度。Float（单精度）。通道权重表：。这个分数组成部分的贡献的乘数。最终的权重将在缩放后与其他通道进行标准化。

历史重量表。Float（单精度）。历史权重表：。历史分数贡献的乘数。缩放后与预测权重成正比。

预测重量表。Float（单精度）。预测权重表：。预测分数贡献的乘数。缩放后与历史权重归一。

## Outputs

姿势搜索通道的动态权重参数。姿势搜索通道动态权重参数结构。
