# MakeAbcSamplingSettings

添加一个节点，从其成员中创建一个'AbcSamplingSettings'。

## 图示

![]($-20221218-14461464.png)

## Inputs

采样类型。EAlembicSamplingType枚举。采样类型：。导入动画时执行的采样类型。

框架步数。整数。帧步数：。对动画进行采样时的步骤。

时间步数。Float (single-precision).时间步数：。对动画进行采样时的时间步骤。

帧开始。整数。帧开始：。开始采样动画的起始索引。

框架结束。整数。帧结束：。停止采样动画的结束索引。

跳过Alembic序列开始时的空帧。Boolean.跳过空帧：。跳过空的（预卷）帧，从实际包含数据的帧开始导入。  

## Outputs

Abc采样设置。Abc采样设置结构。
