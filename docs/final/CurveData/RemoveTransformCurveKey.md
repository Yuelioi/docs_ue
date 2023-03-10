# RemoveTransformCurveKey

移除一个具有指定标识符的变换曲线的单个键。如果成功的话，广播一个 AnimDataModelNotifyType::CurveChanged 通知。

目标是动画数据控制器

## 图示

![](/uploads/projects/ue-bluprint/20221218-18333812.png)

## Inputs

在。执行。

目标。动画数据控制器接口。

曲线标识。Animation Curve Identifier 结构（通过引用）。要删除键值的变换曲线的标识符。

Time（时间）。Float（单精度）。要删除的键的时间。

Should Transact: 布尔型。是否应该产生任何撤销-重做的变化。

## Outputs

输出。执行：执行。

返回值。布尔值。变换曲线键是否被成功删除。

<hr>

Removes a single key for the transform curve with provided identifier. Broadcasts a EAnimDataModelNotifyType::CurveChanged notify if successful.

Target is Animation Data Controller

## 图示

![](/uploads/projects/ue-bluprint/20221218-18333812.png)

## Inputs

In: Exec.

Target: Animation Data Controller Interface.

Curve Id: Animation Curve Identifier Structure (by ref). Identifier for the transform curve for which the key is to be removed.

Time: Float (single-precision). Time of the key to be removed.

Should Transact: Boolean. Whether or not any undo-redo changes should be generated.

## Outputs

Out: Exec.

Return Value: Boolean. Whether or not the transform curve key was successfully removed.
