# SetTransformCurveKeys

用提供的标识符替换变换曲线的键。如果成功的话，广播一个AnimDataModelNotifyType::CurveChanged通知。

目标是动画数据控制器

## 图示

![]($-20221218-18335825.png)

## Inputs

在。执行。

目标。动画数据控制器接口。

曲线标识。Animation Curve Identifier结构（通过引用）。要设置按键的变换曲线的标识符。

Transform Values（变换值）。变换的数组。用来替换现有值的变换值。

时间键。Float (single-precision)s的数组。替换现有键的时间键。

Should Transact: 布尔值。是否应该产生任何撤销-重做的变化。 

## Outputs

输出。执行：执行。

返回值。布尔值。是否成功设置了变换曲线的键值。
