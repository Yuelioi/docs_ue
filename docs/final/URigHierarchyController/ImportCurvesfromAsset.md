# ImportCurvesfromAsset

将一个骨架中的所有曲线导入到层次结构中。

目标是 Rig Hierarchy 控制器

## 图示

![](/uploads/projects/ue-bluprint/20221218-21204798.png)

## Inputs

在。执行。

目标。Rig Hierarchy Controller 对象参考。

在资产路径中。字符串。要导入的 uasset 的路径。

在名称空间。名称。在骨骼名称前加上名称空间。

选择曲线。布尔值。如果为真，曲线将在导入时被选中。

设置撤销。布尔值。如果设置为 "true"，堆栈将记录该变化，以便撤销/重做。

## Outputs

出：执行。

返回值。Rig 元素键结构的数组。输入的元素的键。

<hr>

Imports all curves from a skeleton to the hierarchy

Target is Rig Hierarchy Controller

## 图示

![](/uploads/projects/ue-bluprint/20221218-21204798.png)

## Inputs

In: Exec.

Target: Rig Hierarchy Controller Object Reference.

In Asset Path: String. The path to the uasset to import from.

In Name Space: Name. The namespace to prefix the bone names with.

Select Curves: Boolean. If true the curves will be selected upon import.

Setup Undo: Boolean. If set to true the stack will record the change for undo / redo.

## Outputs

Out: Exec.

Return Value: Array of Rig Element Key Structures. The keys of the imported elements.
