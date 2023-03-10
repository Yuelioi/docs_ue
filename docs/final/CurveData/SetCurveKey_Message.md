# SetCurveKey_Message

用提供的标识符和名称为曲线设置一个单键。如果成功的话，广播一个 AnimDataModelNotifyType::CurveChanged 通知。如果提供的密钥时间已经存在，那么密钥将被替换。

目标是动画数据控制器

## 图示

![](/uploads/projects/ue-bluprint/20221218-18335595.png)

## Inputs

在。执行。

目标。对象参考。

曲线标识。Animation Curve Identifier 结构（通过 ref）。要设置密钥的曲线的标识符。

Key（键）。Rich Curve Key 结构（参考）。要设置的键。

Should Transact: 布尔型。是否应该产生任何撤销-重做的变化。

## Outputs

输出。执行：执行。

返回值。布尔值。曲线键是否被成功设置。

<hr>

Sets a single key for the curve with provided identifier and name. Broadcasts a EAnimDataModelNotifyType::CurveChanged notify if successful.. In case a key for the provided key time already exists the key is replaced.

Target is Animation Data Controller

## 图示

![](/uploads/projects/ue-bluprint/20221218-18335595.png)

## Inputs

In: Exec.

Target: Object Reference.

Curve Id: Animation Curve Identifier Structure (by ref). Identifier for the curve for which the key is to be set.

Key: Rich Curve Key Structure (by ref). Key to be set.

Should Transact: Boolean. Whether or not any undo-redo changes should be generated.

## Outputs

Out: Exec.

Return Value: Boolean. Whether or not the curve key was successfully set.
