# BreakAbcSamplingSettings

添加一个节点，将'AbcSamplingSettings'分解成其成员字段

## 图示

![]($-20221218-14303560.png)

## Inputs

Abc采样设置。Abc采样设置结构（通过引用）。 

## Outputs

采样类型。EAlembicSamplingType枚举。采样类型：。在导入动画时执行的采样类型。

帧步数。整数。Frame Steps:（帧步骤）。对动画进行采样时的步骤。

时间步数。Float（单精度）。时间步数：。动画采样时的时间步骤。

帧开始。整数。帧开始：。开始对动画进行采样的起始索引。

Frame End（帧结束）。整数。帧结束：。停止动画采样的索引。

跳过Alembic序列开始时的空帧。布尔值。跳过空帧：。跳过空帧（预卷），从实际包含数据的帧开始导入。
