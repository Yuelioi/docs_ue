# SetParentWeightArray

设置一个多父元素的父元素的所有权重。

目标是钻机等级制度

## 图示

![](/uploads/projects/ue-bluprint/20221218-21202157.png)

## Inputs

在。执行。

目标。Rig Hierarchy 对象参考。

在儿童。里格元素键结构。多父元素的键。

在权重。钻机元素权重结构的数组。要为父代设置的新权重。

初始化。布尔值。如果为真，将使用初始权重。

影响儿童。布尔值。如果设置为 "false"，儿童将不会移动（保持全局）。

## Outputs

出：执行。

返回值。布尔值。如果改变重量成功，则返回 true。

<hr>

Sets the all of the weights of the parents of a multi parent element

Target is Rig Hierarchy

## 图示

![](/uploads/projects/ue-bluprint/20221218-21202157.png)

## Inputs

In: Exec.

Target: Rig Hierarchy Object Reference.

In Child: Rig Element Key Structure. The key of the multi parented element.

In Weights: Array of Rig Element Weight Structures. The new weights to set for the parents.

Initial: Boolean. If true the initial weights will be used.

Affect Children: Boolean. If set to false children will not move (maintain global)..

## Outputs

Out: Exec.

Return Value: Boolean. Returns true if changing the weight was successful.
