# RemoveAllParents

移除层次结构中一个元素的所有父级。

目标是 Rig Hierarchy 控制器

## 图示

![](/uploads/projects/ue-bluprint/20221218-21205126.png)

## Inputs

在。执行。

目标。Rig Hierarchy Controller 对象参考。

在儿童。Rig 元素键结构。要删除所有父元素的键。

保持全局转换。布尔值。如果设置为 "真"，孩子将保持在空间上的同一位置，否则它将保持它的本地变换（和潜在的移动）。

设置撤销。布尔值。如果设置为 "true"，堆栈将记录该变化，以便撤销/重做。

打印 Python 命令。布尔值。如果设置为 "true"，相当于此调用的 Python 命令将被打印出来。

## Outputs

出：执行。

返回值。布尔值。如果成功，返回真。

<hr>

Removes all parents from an element in the hierarchy.

Target is Rig Hierarchy Controller

## 图示

![](/uploads/projects/ue-bluprint/20221218-21205126.png)

## Inputs

In: Exec.

Target: Rig Hierarchy Controller Object Reference.

In Child: Rig Element Key Structure. The key of the element to remove all parents for.

Maintain Global Transform: Boolean. If set to true the child will stay in the same place spatially, otherwise it will maintain it's local transform (and potential move)..

Setup Undo: Boolean. If set to true the stack will record the change for undo / redo.

Print Python Command: Boolean. If set to true a python command equivalent to this call will be printed out.

## Outputs

Out: Exec.

Return Value: Boolean. Returns true if successful..
