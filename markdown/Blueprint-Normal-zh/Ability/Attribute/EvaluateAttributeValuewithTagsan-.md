# EvaluateAttributeValuewithTagsan-

使用传入的基值而不是真正的基值，在用源和目标标记评估属性后，从能力系统组件AbilitySystem中返回属性的值。 bSuccess表示此操作的成功或失败。

目标是能力系统蓝图库

## 图示

![]($-20221218-17301137.png)

## Inputs

能力系统。能力系统组件对象参考。

Attribute（属性）。Gameplay Attribute结构。

源标签。游戏玩法标签容器结构（通过参考）。

目标标签。Gameplay标签容器结构（通过参考）。

基本值。Float（单精度）。 

## Outputs

成功。布尔值。

返回值。浮点数（单精度）。返回能力系统组件AbilitySystem中的Attribute的值，在使用传入的基值而不是真实的基值对其进行评估后，该值将被用于源和目标标签。
