# RemoveCurve

移除提供标识符的曲线。如果成功的话，广播一个 AnimDataModelNotifyType::CurveRemoved 通知。

目标是动画数据控制器

## 图示

![](/uploads/projects/ue-bluprint/20221218-18333349.png)

## Inputs

在。执行。

目标。动画数据控制器接口。

曲线标识。Animation Curve Identifier 结构（通过引用）。

Should Transact: 布尔值。是否应该产生任何撤销-重做的变化。

## Outputs

输出。执行：执行。

返回值。布尔值。曲线是否被成功删除。

<hr>

Remove the curve with provided identifier. Broadcasts a EAnimDataModelNotifyType::CurveRemoved notify if successful.

Target is Animation Data Controller

## 图示

![](/uploads/projects/ue-bluprint/20221218-18333349.png)

## Inputs

In: Exec.

Target: Animation Data Controller Interface.

Curve Id: Animation Curve Identifier Structure (by ref).

Should Transact: Boolean. Whether or not any undo-redo changes should be generated.

## Outputs

Out: Exec.

Return Value: Boolean. Whether or not the curve was successfully removed.
