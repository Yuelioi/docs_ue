# RemoveAllBoneTracks

移除所有现有的骨骼动画轨道。为每个被移除的轨道广播一个 EAnimDataModelNotifyType::TrackRemoved，包裹在 BracketOpened/BracketClosed 的通知中。

目标是动画数据控制器

## 图示

![]($-20221218-17532630.png)

## Inputs

在。执行。

目标。动画数据控制器接口。

应该交易。布尔值。是否应该产生任何撤销-重做的变化。 

## Outputs

输出。执行：执行。
