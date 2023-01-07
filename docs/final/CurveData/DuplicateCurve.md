# DuplicateCurve

复制具有标识符的曲线。如果成功的话，广播一个 AnimDataModelNotifyType::CurveAdded 通知。

目标是动画数据控制器

## 图示

![](/uploads/projects/ue-bluprint/20221218-18332659.png)

## Inputs

在。执行。

目标。动画数据控制器接口。

复制曲线标识。Animation Curve Identifier 结构（通过引用）。要复制的曲线的标识符。

New Curve Id。Animation Curve Identifier 结构（参考文献）。要添加的曲线的标识符。

应该交易。布尔型。是否应该产生任何撤销-重做的变化。

## Outputs

输出。执行。

返回值。布尔值。曲线是否被成功复制。

<hr>

Duplicated the curve with the identifier. Broadcasts a EAnimDataModelNotifyType::CurveAdded notify if successful.

Target is Animation Data Controller

## 图示

![](/uploads/projects/ue-bluprint/20221218-18332659.png)

## Inputs

In: Exec.

Target: Animation Data Controller Interface.

Copy Curve Id: Animation Curve Identifier Structure (by ref). Identifier for the to-be-duplicated curve.

New Curve Id: Animation Curve Identifier Structure (by ref). Identifier for the to-be-added curve.

Should Transact: Boolean. Whether or not any undo-redo changes should be generated.

## Outputs

Out: Exec.

Return Value: Boolean. Whether or not the curve was successfully duplicated.
