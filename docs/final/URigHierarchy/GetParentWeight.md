# GetParentWeight

返回一个多父元素下面的父元素的权重。

目标是钻机等级制度

## 图示

![](/uploads/projects/ue-bluprint/20221218-21192764.png)

## Inputs

目标。Rig Hierarchy 对象参考。

在儿童。里格元素键结构。多父元素的键。

在父母。Rig Element Key Structure.父体的键值，用于查询重量。

初始化。布尔值。如果为真，将使用初始权重。

## Outputs

返回值。Rig Element Weight 结构。返回一个多父元素下面的父元素的重量，如果父元素无效，则返回 FLT_MAX。

<hr>

Returns the weight of a parent below a multi parent element

Target is Rig Hierarchy

## 图示

![](/uploads/projects/ue-bluprint/20221218-21192764.png)

## Inputs

Target: Rig Hierarchy Object Reference.

In Child: Rig Element Key Structure. The key of the multi parented element.

In Parent: Rig Element Key Structure. The key of the parent to look up the weight for.

Initial: Boolean. If true the initial weights will be used.

## Outputs

Return Value: Rig Element Weight Structure. Returns the weight of a parent below a multi parent element, or FLT_MAX if the parent is invalid.
