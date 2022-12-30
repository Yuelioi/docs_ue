# UpdateCurveNamesfromSkeleton_Mes-

更新任何储存的曲线的显示名称，这些名称是从提供的骨架中获取的。为每一条要更新的曲线名称广播一个AnimDataModelNotifyType::CurveRenamed，并将其包裹在BracketOpened/BracketClosed的通知中。

目标是动画数据控制器

## 图示

![]($-20221218-18340286.png)

## Inputs

在。执行。

目标。对象参考。

骨架。骨架对象参考。用于检索显示名称值的骨架。

支持的曲线类型。ERawCurveTrackTypes枚举。应该更新名称的曲线类型。

应该交易。布尔值。是否应该产生任何撤销-重做的变化。 

## Outputs

输出。执行：执行。
