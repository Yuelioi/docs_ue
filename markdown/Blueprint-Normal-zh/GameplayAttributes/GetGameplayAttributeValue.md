# GetGameplayAttributeValue

返回给定游戏属性的当前值，如果没有找到该属性，则返回0。注意：这并不考虑预测的游戏效果修改器，所以在客户端上，这个值可能不是一直都很准确。

目标是能力系统组件

## 图示

![]($-20221218-19083208.png)

## Inputs

目标。能力系统组件对象参考。

属性。Gameplay Attribute结构。要查询的游戏玩法属性。  

## Outputs

找到了。布尔值。如果该属性在该组件中存在，则设置为真。

返回值。浮点数（单精度）。
