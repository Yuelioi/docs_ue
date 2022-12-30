# SetCurveKey

用提供的标识符和名称为曲线设置一个单键。如果成功的话，广播一个AnimDataModelNotifyType::CurveChanged通知。如果提供的密钥时间已经存在，那么密钥将被替换。

目标是动画数据控制器

## 图示

![]($-20221218-18335239.png)

## Inputs

在。执行。

目标。动画数据控制器界面。

曲线标识。Animation Curve Identifier结构（通过引用）。要设置键的曲线的标识符。

Key（键）。Rich Curve Key结构（通过引用）。要设置的键。

Should Transact: 布尔型。是否应该产生任何撤销-重做的变化。 

## Outputs

输出。执行：执行。

返回值。布尔值。曲线键是否被成功设置。
