# SetBindingbyTag

为这个序列中所有用指定名称标记的绑定分配一组演员。对象绑定可以在序列UI中通过人民币->标签...对树中的对象绑定进行标记。

目标是水平序列演员

## 图示

![]($-20221218-20511387.png)

## Inputs

在。执行。

目标。水平序列演员对象参考。

绑定标签。名称。用来查找绑定的唯一标签名称。

演员。演员对象引用数组。要分配给所有标签绑定的演员。

允许来自资产的绑定：布尔值。如果是false，这里提供的新绑定将取代关卡序列资产中设置的绑定，这意味着由序列器动画化的原始对象将不再被动画化。如果是假的，设置为可产卵的绑定将不会产卵。如果为真，新的绑定将是在Sequencer UI中设置的绑定之外的。这个函数不会修改原始资产。

## Outputs

出：执行。

Assigns an set of actors to all the bindings tagged with the specified name in this sequence. Object Bindings can be tagged within the sequence UI by RMB -> Tags... on the object binding in the tree.

Target is Level Sequence Actor

## 图示

![]($-20221218-20511387.png)

## Inputs

In: Exec.

Target: Level Sequence Actor Object Reference.

Binding Tag: Name. The unique tag name to lookup bindings with.

Actors: Array of Actor Object References. The actors to assign to all the tagged bindings.

Allow Bindings from Asset: Boolean. If false the new bindings being supplied here will replace the bindings set in the level sequence asset, meaning the original object animated by Sequencer will no longer be animated. Bindings set to spawnables will not spawn if false. If true, new bindings will be in addition to ones set set in Sequencer UI. This function will not modify the original asset..  

## Outputs

Out: Exec.

