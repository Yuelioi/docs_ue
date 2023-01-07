# GetGameplayAttributeValue

返回给定游戏属性的当前值，如果没有找到该属性，则返回 0。注意：这并不考虑预测的游戏效果修改器，所以在客户端上，这个值可能不是一直都很准确。

目标是能力系统组件

## 图示

![](/uploads/projects/ue-bluprint/20221218-19083208.png)

## Inputs

目标。能力系统组件对象参考。

属性。Gameplay Attribute 结构。要查询的游戏玩法属性。

## Outputs

找到了。布尔值。如果该属性在该组件中存在，则设置为真。

返回值。浮点数（单精度）。

<hr>

Returns the current value of the given gameplay attribute, or zero if the attribute is not found.. NOTE: This doesn't take predicted gameplay effect modifiers into consideration, so the value may not be accurate on clients at all times.

Target is Ability System Component

## 图示

![](/uploads/projects/ue-bluprint/20221218-19083208.png)

## Inputs

Target: Ability System Component Object Reference.

Attribute: Gameplay Attribute Structure. The gameplay attribute to query.

## Outputs

Found: Boolean. Set to true if the attribute exists in this component.

Return Value: Float (single-precision).
