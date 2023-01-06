# SwitchtoParent

将一个多父元素转换为一个单父元素。这将新父元素的权重设置为1.0，并禁用所有其他潜在父元素的权重。

目标是钻机等级制度

## 图示

![]($-20221218-21202581.png)

## Inputs

在。执行。

目标。Rig Hierarchy对象参考。

在儿童。里格元素键结构。多父元素的键。

在父母。Rig Element Key Structure.父体的键值，用于查询重量。

初始化。布尔值。如果为真，将使用初始权重。

影响儿童。布尔值。如果设置为 "false"，儿童将不会移动（保持全局）。  

## Outputs

出：执行。

返回值。布尔值。如果改变重量成功，则返回true。

Switches a multi parent element to a single parent.. This sets the new parent's weight to 1.0 and disables. weights for all other potential parents.

Target is Rig Hierarchy

## 图示

![]($-20221218-21202581.png)

## Inputs

In: Exec.

Target: Rig Hierarchy Object Reference.

In Child: Rig Element Key Structure. The key of the multi parented element.

In Parent: Rig Element Key Structure. The key of the parent to look up the weight for.

Initial: Boolean. If true the initial weights will be used.

Affect Children: Boolean. If set to false children will not move (maintain global)..  

## Outputs

Out: Exec.

Return Value: Boolean. Returns true if changing the weight was successful.

