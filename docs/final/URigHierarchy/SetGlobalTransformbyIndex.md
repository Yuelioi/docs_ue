# SetGlobalTransformbyIndex

为一个给定的元素索引设置全局的当前或初始变换。

目标是钻机等级制度

## 图示

![](/uploads/projects/ue-bluprint/20221218-21201730.png)

## Inputs

在。执行。

目标。Rig Hierarchy 对象参考。

在元素索引中。整数。要设置转换的元素的索引。

在转型。变换。要设置的新的变换值。

初始化。布尔值。如果为真，将使用初始变换。

影响儿童。布尔值。如果设置为 "false"，儿童将不会移动（保持全局）。

设置撤销。布尔值。如果为真，转换栈将被设置为撤销/重做。

## Outputs

出：执行。

<hr>

Sets the global current or initial transform for a given element index.

Target is Rig Hierarchy

## 图示

![](/uploads/projects/ue-bluprint/20221218-21201730.png)

## Inputs

In: Exec.

Target: Rig Hierarchy Object Reference.

In Element Index: Integer. The index of the element to set the transform for.

In Transform: Transform. The new transform value to set.

Initial: Boolean. If true the initial transform will be used.

Affect Children: Boolean. If set to false children will not move (maintain global)..

Setup Undo: Boolean. If true the transform stack will be setup for undo / redo.

## Outputs

Out: Exec.
