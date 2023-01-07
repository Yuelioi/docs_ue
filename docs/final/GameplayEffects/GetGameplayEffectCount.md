# GetGameplayEffectCount

获取能力系统组件上的指定源效果的数量。对于非堆叠效果，这是所有有效实例的总和。对于堆叠效果，这是所有有效堆叠计数的总和。如果指定了唆使者，只有来自该唆使者的效果被计算。

目标是能力系统组件

## 图示

![](/uploads/projects/ue-bluprint/20221218-19085665.png)

## Inputs

目标。能力系统组件对象参考。

源自游戏效果。Gameplay Effect 类参考。获得计数的效果。

可选的 Instigator Filter 组件。能力系统组件对象参考。如果指定，只计算该能力系统组件应用的效果。

检查时强制执行。布尔值。

## Outputs

返回值。整数。指定源效果的计数。

<hr>

Get the count of the specified source effect on the ability system component. For non-stacking effects, this is the sum of all active instances.. For stacking effects, this is the sum of all valid stack counts. If an instigator is specified, only effects from that instigator are counted.

Target is Ability System Component

## 图示

![](/uploads/projects/ue-bluprint/20221218-19085665.png)

## Inputs

Target: Ability System Component Object Reference.

Source Gameplay Effect: Gameplay Effect Class Reference. Effect to get the count of.

Optional Instigator Filter Component: Ability System Component Object Reference. If specified, only count effects applied by this ability system component.

Enforce on Going Check: Boolean.

## Outputs

Return Value: Integer. Count of the specified source effect.
