# GetParentTransformbyIndex

返回一个给定元素索引的全局当前值或初始值。如果该元素没有一个父元素，则将返回FTransform::Identity。

目标是钻机等级制度

## 图示

![]($-20221218-21192636.png)

## Inputs

目标。Rig Hierarchy对象参考。

在元素索引中。整数。要检索转换的元素的索引。

初始化。布尔值。如果为真，将使用初始变换。  

## Outputs

返回值。变换。元素的父级全局当前或初始变换的值。

Returns the global current or initial value for a given element index.. If the element does not have a parent FTransform::Identity will be returned.

Target is Rig Hierarchy

## 图示

![]($-20221218-21192636.png)

## Inputs

Target: Rig Hierarchy Object Reference.

In Element Index: Integer. The index of the element to retrieve the transform for.

Initial: Boolean. If true the initial transform will be used.  

## Outputs

Return Value: Transform. The element's parent's global current or initial transform's value..

