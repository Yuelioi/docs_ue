# AddParent

给一个元素添加一个新的父元素。对于只允许一个父元素的元素，该父元素将被替换（与::SetParent 相同）。

目标是 Rig Hierarchy 控制器

## 图示

![](/uploads/projects/ue-bluprint/20221218-21203287.png)

## Inputs

在。执行。

目标。Rig Hierarchy Controller 对象参考。

在儿童。里格元素键结构。要为其添加父元素的键。

在父母。Rig Element Key Structure.要添加的新父元素的键。

在重量上。Float（单精度）。给予父类的初始权重。

保持全局转换。布尔值。如果设置为 "真"，孩子将保持在空间上的同一位置，否则它将保持它的本地变换（和潜在的移动）。

设置撤销。布尔值。如果设置为 "true"，堆栈将记录该变化，以便撤销/重做。

## Outputs

出：执行。

返回值。布尔值。如果成功，返回真。

<hr>

Adds a new parent to an element. For elements that allow only one parent the parent will be replaced (Same as ::SetParent).

Target is Rig Hierarchy Controller

## 图示

![](/uploads/projects/ue-bluprint/20221218-21203287.png)

## Inputs

In: Exec.

Target: Rig Hierarchy Controller Object Reference.

In Child: Rig Element Key Structure. The key of the element to add the parent for.

In Parent: Rig Element Key Structure. The key of the new parent to add.

In Weight: Float (single-precision). The initial weight to give to the parent.

Maintain Global Transform: Boolean. If set to true the child will stay in the same place spatially, otherwise it will maintain it's local transform (and potential move)..

Setup Undo: Boolean. If set to true the stack will record the change for undo / redo.

## Outputs

Out: Exec.

Return Value: Boolean. Returns true if successful..
