# SetParent

为一个元素设置一个新的父元素。对于允许多于一个父元素的元素，父列表将被替换。

目标是 Rig Hierarchy 控制器

## 图示

![](/uploads/projects/ue-bluprint/20221218-21205928.png)

## Inputs

在。执行。

目标。Rig Hierarchy Controller 对象参考。

在儿童。Rig Element Key Structure.要设置父级的元素的键。

在父母。Rig Element Key Structure.要设置的新父体的键。

保持全局转换。布尔值。如果设置为 "真"，孩子将保持在空间上的同一位置，否则它将保持它的本地变换（和潜在的移动）。

设置撤销。布尔值。如果设置为 "true"，堆栈将记录该变化，以便撤销/重做。

打印 Python 命令。布尔值。如果设置为 "true"，相当于此调用的 Python 命令将被打印出来。

## Outputs

出：执行。

返回值。布尔值。如果成功，返回真。

<hr>

Sets a new parent to an element. For elements that allow more than one parent the parent list will be replaced.

Target is Rig Hierarchy Controller

## 图示

![](/uploads/projects/ue-bluprint/20221218-21205928.png)

## Inputs

In: Exec.

Target: Rig Hierarchy Controller Object Reference.

In Child: Rig Element Key Structure. The key of the element to set the parent for.

In Parent: Rig Element Key Structure. The key of the new parent to set.

Maintain Global Transform: Boolean. If set to true the child will stay in the same place spatially, otherwise it will maintain it's local transform (and potential move)..

Setup Undo: Boolean. If set to true the stack will record the change for undo / redo.

Print Python Command: Boolean. If set to true a python command equivalent to this call will be printed out.

## Outputs

Out: Exec.

Return Value: Boolean. Returns true if successful..
