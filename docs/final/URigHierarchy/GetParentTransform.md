# GetParentTransform

返回一个给定键的全局当前值或初始值。如果该元素没有一个父元素，则将返回 FTransform::Identity。

目标是钻机等级制度

## 图示

![](/uploads/projects/ue-bluprint/20221218-21192519.png)

## Inputs

目标。Rig Hierarchy 对象参考。

在关键。Rig Element Key Structure.要检索变换的元素的键。

初始化。布尔值。如果为真，将使用初始变换。

## Outputs

返回值。变换。元素的父级全局当前或初始变换的值。

<hr>

Returns the global current or initial value for a given key.. If the element does not have a parent FTransform::Identity will be returned.

Target is Rig Hierarchy

## 图示

![](/uploads/projects/ue-bluprint/20221218-21192519.png)

## Inputs

Target: Rig Hierarchy Object Reference.

In Key: Rig Element Key Structure. The key of the element to retrieve the transform for.

Initial: Boolean. If true the initial transform will be used.

## Outputs

Return Value: Transform. The element's parent's global current or initial transform's value..
