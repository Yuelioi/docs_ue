# BreakPoseSearchChannelHorizonPar-

添加一个节点，将'PoseSearchChannelHorizonParams'分解成其成员字段

## 图示

![]($-20221218-14411417.png)

## Inputs

姿势搜索通道地平线参数。姿势搜索通道地平线参数结构（按参考）。  

## Outputs

重量。Float（单精度）。权重：。该水平线内所有样本的总得分贡献，与其他水平线归一。

插值。布尔型。插值：。是否在此范围内对样本进行插值。

初始值。Float (single-precision).初始值：。地平线样本权重将从InitialValue内插到1.0-InitialValue，然后归一化。

插值方法。EAlphaBlendOption Enum.插值方法：。用于水平线插值的曲线类型。
