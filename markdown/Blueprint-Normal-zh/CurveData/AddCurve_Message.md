# AddCurve_Message

用提供的信息添加一个新的曲线。如果成功的话，广播一个 EAnimDataModelNotifyType::CurveAdded 的通知。

目标是动画数据控制器

## 图示

![]($-20221218-18332539.png)

## Inputs

在。执行。

目标。对象参考。

曲线标识。Animation Curve Identifier结构（通过ref）。要添加的曲线的标识符。

Curve Flags（曲线标志）。整数。要为曲线设置的标志。

Should Transact: 布尔型。是否应该产生任何撤销-重做的变化。 

## Outputs

输出。执行。

返回值。布尔值。曲线是否被成功添加。
