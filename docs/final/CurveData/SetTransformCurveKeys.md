# SetTransformCurveKeys

用提供的标识符替换变换曲线的键。如果成功的话，广播一个 AnimDataModelNotifyType::CurveChanged 通知。

目标是动画数据控制器

## 图示

![](/uploads/projects/ue-bluprint/20221218-18335825.png)

## Inputs

在。执行。

目标。动画数据控制器接口。

曲线标识。Animation Curve Identifier 结构（通过引用）。要设置按键的变换曲线的标识符。

Transform Values（变换值）。变换的数组。用来替换现有值的变换值。

时间键。Float (single-precision)s 的数组。替换现有键的时间键。

Should Transact: 布尔值。是否应该产生任何撤销-重做的变化。

## Outputs

输出。执行：执行。

返回值。布尔值。是否成功设置了变换曲线的键值。

<hr>

Replace the keys for the transform curve with provided identifier. Broadcasts a EAnimDataModelNotifyType::CurveChanged notify if successful.

Target is Animation Data Controller

## 图示

![](/uploads/projects/ue-bluprint/20221218-18335825.png)

## Inputs

In: Exec.

Target: Animation Data Controller Interface.

Curve Id: Animation Curve Identifier Structure (by ref). Identifier for the transform curve for which the keys are to be set.

Transform Values: Array of Transforms. Transform Values with which the existing values are to be replaced.

Time Keys: Array of Float (single-precision)s. Time Keys with which the existing keys are to be replaced.

Should Transact: Boolean. Whether or not any undo-redo changes should be generated.

## Outputs

Out: Exec.

Return Value: Boolean. Whether or not the transform curve keys were successfully set.
