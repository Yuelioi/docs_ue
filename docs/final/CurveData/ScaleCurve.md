# ScaleCurve

用所提供的标识符对曲线进行缩放。如果成功的话，广播一个 EAnimDataModelNotifyType::CurveScaled 的通知。

目标是动画数据控制器

## 图示

![](/uploads/projects/ue-bluprint/20221218-18334284.png)

## Inputs

在。执行。

目标。动画数据控制器接口。

曲线标识。Animation Curve Identifier 结构（通过引用）。要缩放的曲线的标识符。

Origin（原点）。Float（单精度）。缩放曲线时作为原点的时间。

因子。Float（单精度）。曲线应该被缩放的系数。

应该交易。布尔型。是否应该产生任何撤销-重做的变化。

## Outputs

输出。执行：执行。

返回值。布尔值。缩放曲线是否成功。

<hr>

Scales the curve with provided identifier. Broadcasts a EAnimDataModelNotifyType::CurveScaled notify if successful.

Target is Animation Data Controller

## 图示

![](/uploads/projects/ue-bluprint/20221218-18334284.png)

## Inputs

In: Exec.

Target: Animation Data Controller Interface.

Curve Id: Animation Curve Identifier Structure (by ref). Identifier of the curve to scale.

Origin: Float (single-precision). Time to use as the origin when scaling the curve.

Factor: Float (single-precision). Factor with which the curve is supposed to be scaled.

Should Transact: Boolean. Whether or not any undo-redo changes should be generated.

## Outputs

Out: Exec.

Return Value: Boolean. Whether or not scaling the curve was successful.
