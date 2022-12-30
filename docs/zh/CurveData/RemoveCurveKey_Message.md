# RemoveCurveKey_Message

从曲线中移除一个带有标识符和名称的单键。如果成功的话，广播一个AnimDataModelNotifyType::CurveChanged通知。

目标是动画数据控制器

## 图示

![]($-20221218-18333576.png)

## Inputs

在。执行。

目标。对象参考。

曲线标识。Animation Curve Identifier结构（通过ref）。要删除键值的曲线的标识符。

时间。Float（单精度）。要删除的键的时间。

Should Transact: 布尔型。是否应该产生任何撤销-重做的变化。 

## Outputs

输出。执行：执行。

返回值。布尔值。曲线键是否被成功删除。
