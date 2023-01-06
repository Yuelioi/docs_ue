# SetParentWeight

设置一个多父元素下面的父元素的权重

目标是钻机等级制度

## 图示

![]($-20221218-21202041.png)

## Inputs

在。执行。

目标。Rig Hierarchy对象参考。

在儿童。里格元素键结构。多父元素的键。

在父母。Rig Element Key Structure.父体的键值，用于查询重量。

在重量上。钻机元素权重结构。为父体设置的新权重。

初始化。布尔值。如果为真，将使用初始权重。

影响儿童。布尔值。如果设置为 "false"，儿童将不会移动（保持全局）。  

## Outputs

出：执行。

返回值。布尔值。如果改变重量成功，则返回true。

Sets the weight of a parent below a multi parent element

Target is Rig Hierarchy

## 图示

![]($-20221218-21202041.png)

## Inputs

In: Exec.

Target: Rig Hierarchy Object Reference.

In Child: Rig Element Key Structure. The key of the multi parented element.

In Parent: Rig Element Key Structure. The key of the parent to look up the weight for.

In Weight: Rig Element Weight Structure. The new weight to set for the parent.

Initial: Boolean. If true the initial weights will be used.

Affect Children: Boolean. If set to false children will not move (maintain global)..  

## Outputs

Out: Exec.

Return Value: Boolean. Returns true if changing the weight was successful.

