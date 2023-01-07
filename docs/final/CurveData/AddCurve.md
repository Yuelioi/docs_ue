# AddCurve

用提供的信息添加一个新的曲线。如果成功的话，广播一个 EAnimDataModelNotifyType::CurveAdded 的通知。

目标是动画数据控制器

## 图示

![](/uploads/projects/ue-bluprint/20221218-18332417.png)

## Inputs

在。执行。

目标。动画数据控制器接口。

曲线标识。Animation Curve Identifier 结构（通过引用）。要添加的曲线的标识符。

Curve Flags（曲线标志）。整数。要为曲线设置的标志。

Should Transact: 布尔型。是否应该产生任何撤销-重做的变化。

## Outputs

输出。执行。

返回值。布尔值。曲线是否被成功添加。

<hr>

Adds a new curve with the provided information. Broadcasts a EAnimDataModelNotifyType::CurveAdded notify if successful.

Target is Animation Data Controller

## 图示

![](/uploads/projects/ue-bluprint/20221218-18332417.png)

## Inputs

In: Exec.

Target: Animation Data Controller Interface.

Curve Id: Animation Curve Identifier Structure (by ref). Identifier for the to-be-added curve.

Curve Flags: Integer. Flags to be set for the curve.

Should Transact: Boolean. Whether or not any undo-redo changes should be generated.

## Outputs

Out: Exec.

Return Value: Boolean. Whether or not the curve was successfully added.
