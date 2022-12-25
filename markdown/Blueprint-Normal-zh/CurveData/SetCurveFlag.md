# SetCurveFlag

为提供标识符的曲线设置一个单独的标志。如果成功的话，广播一个AnimDataModelNotifyType::CurveFlagsChanged通知。

目标是动画数据控制器

## 图示

![]($-20221218-18334764.png)

## Inputs

在。执行。

目标。动画数据控制器接口。

曲线标识。Animation Curve Identifier结构（通过引用）。要设置标志状态的曲线的标识符。

Flag: EAnimAssetCurveFlags枚举。要设置的状态的标志。

状态。布尔型。要设置的标志的状态，true=设置/false=未设置。

Should Transact: 布尔型。是否应该产生任何撤销-重做的变化。 

## Outputs

输出。执行：执行。

返回值。布尔值。是否成功设置了标志状态。
