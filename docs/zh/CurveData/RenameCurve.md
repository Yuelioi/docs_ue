# RenameCurve

用提供的标识符重命名曲线。如果成功的话，广播一个AnimDataModelNotifyType::CurveRenamed通知。

目标是动画数据控制器

## 图示

![]($-20221218-18334051.png)

## Inputs

在。执行。

目标。动画数据控制器接口。

曲线重命名标识。Animation Curve Identifier结构（通过引用）。要重命名的曲线的标识符。

New Curve Id: 动画曲线标识符结构（通过引用）。要删除的键的时间。

应该交易。布尔值。是否应该产生任何撤销-重做的变化。 

## Outputs

出来。执行：执行。

返回值。布尔值。曲线是否被成功重命名。
