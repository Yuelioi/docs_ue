# ImportBones

将一个现有的骨架导入到层次结构中。

目标是 Rig Hierarchy 控制器

## 图示

![](/uploads/projects/ue-bluprint/20221218-21204444.png)

## Inputs

在。执行。

目标。Rig Hierarchy Controller 对象参考。

在 Skeleton 中。骨架对象参考。要导入的骨架。

在名称空间。名称。在骨骼名称前加上名称空间。

替换现有的骨骼。布尔值。如果为真，现有骨骼将被移除。

移除过期的骨头。布尔值。如果为真，在骨架中不存在的骨骼将被从层次结构中移除。

选择骨骼。布尔值。如果为真，骨骼将在导入时被选中。

设置撤销。布尔值。如果设置为 "true"，堆栈将记录该变化，以便撤销/重做。

打印 Python 命令。布尔值。如果设置为 "true"，相当于此调用的 Python 命令将被打印出来。

## Outputs

出：执行。

返回值。Rig 元素键结构的数组。输入的元素的键。

<hr>

Imports an existing skeleton to the hierarchy

Target is Rig Hierarchy Controller

## 图示

![](/uploads/projects/ue-bluprint/20221218-21204444.png)

## Inputs

In: Exec.

Target: Rig Hierarchy Controller Object Reference.

In Skeleton: Skeleton Object Reference. The skeleton to import.

In Name Space: Name. The namespace to prefix the bone names with.

Replace Existing Bones: Boolean. If true existing bones will be removed.

Remove Obsolete Bones: Boolean. If true bones non-existent in the skeleton will be removed from the hierarchy.

Select Bones: Boolean. If true the bones will be selected upon import.

Setup Undo: Boolean. If set to true the stack will record the change for undo / redo.

Print Python Command: Boolean. If set to true a python command equivalent to this call will be printed out.

## Outputs

Out: Exec.

Return Value: Array of Rig Element Key Structures. The keys of the imported elements.
