# SetBinding

用指定的行为者覆盖指定的绑定，可以选择仍然允许在级别序列资产中定义的绑定。

目标是水平序列演员

## 图示

![]($-20221218-20511274.png)

## Inputs

在。执行。

目标。水平序列演员对象参考。

绑定。电影场景对象的绑定ID结构。要修改的绑定。

演员。演员对象引用数组。要绑定的演员。

允许来自资产的绑定：布尔值。如果是false，这里提供的新绑定将取代关卡序列资产中设置的绑定，这意味着由序列器动画化的原始对象将不再被动画化。如果是假的，设置为可产卵的绑定将不会产卵。如果为真，新的绑定将是在Sequencer UI中设置的绑定之外的。这个函数不会修改原始资产。

## Outputs

出：执行。

Overrides the specified binding with the specified actors, optionally still allowing the bindings defined in the Level Sequence asset

Target is Level Sequence Actor

## 图示

![]($-20221218-20511274.png)

## Inputs

In: Exec.

Target: Level Sequence Actor Object Reference.

Binding: Movie Scene Object Binding ID Structure. Binding to modify.

Actors: Array of Actor Object References. Actors to bind.

Allow Bindings from Asset: Boolean. If false the new bindings being supplied here will replace the bindings set in the level sequence asset, meaning the original object animated by Sequencer will no longer be animated. Bindings set to spawnables will not spawn if false. If true, new bindings will be in addition to ones set set in Sequencer UI. This function will not modify the original asset..  

## Outputs

Out: Exec.

