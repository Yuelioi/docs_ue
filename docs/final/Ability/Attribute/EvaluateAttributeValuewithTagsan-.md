# EvaluateAttributeValuewithTagsan-

使用传入的基值而不是真正的基值，在用源和目标标记评估属性后，从能力系统组件 AbilitySystem 中返回属性的值。 bSuccess 表示此操作的成功或失败。

目标是能力系统蓝图库

## 图示

![](/uploads/projects/ue-bluprint/20221218-17301137.png)

## Inputs

能力系统。能力系统组件对象参考。

Attribute（属性）。Gameplay Attribute 结构。

源标签。游戏玩法标签容器结构（通过参考）。

目标标签。Gameplay 标签容器结构（通过参考）。

基本值。Float（单精度）。

## Outputs

成功。布尔值。

返回值。浮点数（单精度）。返回能力系统组件 AbilitySystem 中的 Attribute 的值，在使用传入的基值而不是真实的基值对其进行评估后，该值将被用于源和目标标签。

<hr>

Returns the value of Attribute from the ability system component AbilitySystem after evaluating it with source and target tags using the passed in base value instead of the real base value. bSuccess indicates the success or failure of this operation.

Target is Ability System Blueprint Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-17301137.png)

## Inputs

Ability System: Ability System Component Object Reference.

Attribute: Gameplay Attribute Structure.

Source Tags: Gameplay Tag Container Structure (by ref).

Target Tags: Gameplay Tag Container Structure (by ref).

Base Value: Float (single-precision).

## Outputs

Success: Boolean.

Return Value: Float (single-precision). Returns the value of Attribute from the ability system component AbilitySystem after evaluating it with source and target tags using the passed in base value instead of the real base value. bSuccess indicates the success or failure of this operation..
