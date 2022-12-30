# SetCurveFlags_Message

用提供的标识符替换曲线的标志。如果成功的话，广播一个AnimDataModelNotifyType::CurveFlagsChanged通知。

目标是动画数据控制器。

## 图示

![]($-20221218-18335006.png)

## Inputs

在。执行。

目标。对象参考。

曲线标识。Animation Curve Identifier结构（通过ref）。要设置标志状态的曲线的标识符。

Flags（标志）。整数。旗帜掩码，用它来替换现有的旗帜。

Should Transact: 布尔型。是否应该产生任何撤销-重做的变化。 

## Outputs

输出。执行：执行。

返回值。布尔值。是否成功设置了标志掩码。
