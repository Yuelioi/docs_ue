# RemoveCurveKey_Message

从曲线中移除一个带有标识符和名称的单键。如果成功的话，广播一个 AnimDataModelNotifyType::CurveChanged 通知。

目标是动画数据控制器

## 图示

![](/uploads/projects/ue-bluprint/20221218-18333576.png)

## Inputs

在。执行。

目标。对象参考。

曲线标识。Animation Curve Identifier 结构（通过 ref）。要删除键值的曲线的标识符。

时间。Float（单精度）。要删除的键的时间。

Should Transact: 布尔型。是否应该产生任何撤销-重做的变化。

## Outputs

输出。执行：执行。

返回值。布尔值。曲线键是否被成功删除。

<hr>

Remove a single key from the curve with provided identifier and name. Broadcasts a EAnimDataModelNotifyType::CurveChanged notify if successful.

Target is Animation Data Controller

## 图示

![](/uploads/projects/ue-bluprint/20221218-18333576.png)

## Inputs

In: Exec.

Target: Object Reference.

Curve Id: Animation Curve Identifier Structure (by ref). Identifier for the curve for which the key is to be removed.

Time: Float (single-precision). Time of the key to be removed.

Should Transact: Boolean. Whether or not any undo-redo changes should be generated.

## Outputs

Out: Exec.

Return Value: Boolean. Whether or not the curve key was successfully removed.
