# ScaleCurve_Message

用所提供的标识符对曲线进行缩放。如果成功的话，广播一个 EAnimDataModelNotifyType::CurveScaled 的通知。

目标是动画数据控制器

## 图示

![]($-20221218-18334410.png)

## Inputs

在。执行。

目标。对象参考。

曲线标识。Animation Curve Identifier结构（通过ref）。要缩放的曲线的标识符。

原点。Float（单精度）。缩放曲线时作为原点的时间。

因子。Float（单精度）。曲线应该被缩放的系数。

应该交易。布尔型。是否应该产生任何撤销-重做的变化。 

## Outputs

输出。执行：执行。

返回值。布尔值。缩放曲线是否成功。
