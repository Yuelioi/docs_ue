# BreakPoseSearchChannelDynamicWei-

添加一个节点，将'PoseSearchChannelDynamicWeightParams'分解成其成员字段

## 图示

![]($-20221218-14411322.png)

## Inputs

姿势搜索通道动态权重参数。姿势搜索通道动态权重参数结构（按参考）。  

## Outputs

通道重量刻度。Float（单精度）。通道权重表：。这个分数组成部分的贡献的乘数。最终的权重将在缩放后与其他通道进行标准化。

历史重量表。Float（单精度）。历史权重表：。历史分数贡献的乘数。缩放后与预测权重成正比。

预测重量表。Float（单精度）。预测权重表：。预测分数贡献的乘数。缩放后与历史权重归一。
