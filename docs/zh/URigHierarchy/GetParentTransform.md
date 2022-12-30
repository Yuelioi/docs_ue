# GetParentTransform

返回一个给定键的全局当前值或初始值。如果该元素没有一个父元素，则将返回FTransform::Identity。

目标是钻机等级制度

## 图示

![]($-20221218-21192519.png)

## Inputs

目标。Rig Hierarchy对象参考。

在关键。Rig Element Key Structure.要检索变换的元素的键。

初始化。布尔值。如果为真，将使用初始变换。  

## Outputs

返回值。变换。元素的父级全局当前或初始变换的值。
