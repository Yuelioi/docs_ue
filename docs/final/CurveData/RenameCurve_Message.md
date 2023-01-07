# RenameCurve_Message

用提供的标识符重命名曲线。如果成功的话，广播一个 AnimDataModelNotifyType::CurveRenamed 通知。

目标是动画数据控制器

## 图示

![](/uploads/projects/ue-bluprint/20221218-18334168.png)

## Inputs

在。执行。

目标。对象参考。

要重命名的曲线标识。Animation Curve Identifier 结构（通过 ref）。要重命名的曲线的标识符。

New Curve Id: Animation Curve Identifier 结构（通过引用）。要删除的键的时间。

应该交易。布尔值。是否应该产生任何撤销-重做的变化。

## Outputs

出来。执行：执行。

返回值。布尔值。曲线是否被成功重命名。

<hr>

Renames the curve with provided identifier. Broadcasts a EAnimDataModelNotifyType::CurveRenamed notify if successful.

Target is Animation Data Controller

## 图示

![](/uploads/projects/ue-bluprint/20221218-18334168.png)

## Inputs

In: Exec.

Target: Object Reference.

Curve to Rename Id: Animation Curve Identifier Structure (by ref). Identifier for the curve to be renamed.

New Curve Id: Animation Curve Identifier Structure (by ref). Time of the key to be removed.

Should Transact: Boolean. Whether or not any undo-redo changes should be generated.

## Outputs

Out: Exec.

Return Value: Boolean. Whether or not the curve was successfully renamed.
