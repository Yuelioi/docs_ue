# AddBindingbyTag

将一个演员绑定到这个序列中以指定名称标记的所有绑定。不会删除任何已经通过这个 API 设置的现有的绑定。对象绑定可以在序列 UI 中通过人民币->标签...在树中的对象绑定上进行标记。

目标是水平序列演员

## 图示

![](/uploads/projects/ue-bluprint/20221218-20510319.png)

## Inputs

在。执行。

目标。水平序列演员对象参考。

绑定标签。名称。用来查找绑定的唯一标签名称。

演员。演员对象参考。指定给所有标签绑定的角色。

允许来自资产的绑定：布尔值。如果是假的，这里提供的新绑定将取代关卡序列资产中设置的绑定，这意味着由序列器动画化的原始对象将不再被动画化。如果是假的，设置为可产卵的绑定将不会产卵。如果为真，新的绑定将是在 Sequencer UI 中设置的绑定之外的。这个函数不会修改原始资产。

## Outputs

出：执行。

<hr>

Binds an actor to all the bindings tagged with the specified name in this sequence. Does not remove any exising bindings that have been set up through this API. Object Bindings can be tagged within the sequence UI by RMB -> Tags... on the object binding in the tree.

Target is Level Sequence Actor

## 图示

![](/uploads/projects/ue-bluprint/20221218-20510319.png)

## Inputs

In: Exec.

Target: Level Sequence Actor Object Reference.

Binding Tag: Name. The unique tag name to lookup bindings with.

Actor: Actor Object Reference. The actor to assign to all the tagged bindings.

Allow Bindings from Asset: Boolean. If false the new bindings being supplied here will replace the bindings set in the level sequence asset, meaning the original object animated by Sequencer will no longer be animated. Bindings set to spawnables will not spawn if false. If true, new bindings will be in addition to ones set set in Sequencer UI. This function will not modify the original asset..

## Outputs

Out: Exec.
