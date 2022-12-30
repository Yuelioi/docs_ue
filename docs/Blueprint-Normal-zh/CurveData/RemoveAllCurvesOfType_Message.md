# RemoveAllCurvesOfType_Message

删除所有指定类型的曲线。为每一条被移除的曲线广播一个AnimDataModelNotifyType::CurveRemoved，包裹在BracketOpened/BracketClosed的通知中。

目标是动画数据控制器

## 图示

![]($-20221218-18333236.png)

## Inputs

在。执行。

目标。对象参考。

支持的曲线类型。ERawCurveTrackTypes枚举。要删除所有曲线的类型。

应该交易。布尔值。是否应该产生任何撤销-重做的变化。 

## Outputs

输出。执行：执行。
