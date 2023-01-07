# SetTransformCurveKey_Message

用提供的标识符为变换曲线设置一个单键。如果成功的话，广播一个 AnimDataModelNotifyType::CurveChanged 通知。如果任何一个单独的变换通道曲线的键已经存在，其值将被替换。

目标是动画数据控制器

## 图示

![](/uploads/projects/ue-bluprint/20221218-18340051.png)

## Inputs

在。执行。

目标。对象参考。

曲线标识。Animation Curve Identifier 结构（通过 ref）。要设置密钥的变换曲线的标识符。

时间。Float（单精度）。要设置的键的时间。

值。变换（通过引用）。要设置的键的值。

Should Transact: 布尔型。是否应该产生任何撤销-重做的改变。

## Outputs

输出。执行：执行。

返回值。布尔值。变换曲线键是否被成功设置。

<hr>

Sets a single key for the transform curve with provided identifier. Broadcasts a EAnimDataModelNotifyType::CurveChanged notify if successful.. In case a key for any of the individual transform channel curves already exists the value is replaced.

Target is Animation Data Controller

## 图示

![](/uploads/projects/ue-bluprint/20221218-18340051.png)

## Inputs

In: Exec.

Target: Object Reference.

Curve Id: Animation Curve Identifier Structure (by ref). Identifier for the transform curve for which the key is to be set.

Time: Float (single-precision). Time of the key to be set.

Value: Transform (by ref). Value of the key to be set.

Should Transact: Boolean. Whether or not any undo-redo changes should be generated.

## Outputs

Out: Exec.

Return Value: Boolean. Whether or not the transform curve key was successfully set.
