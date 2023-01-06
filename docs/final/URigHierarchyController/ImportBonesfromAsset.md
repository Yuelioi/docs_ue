# ImportBonesfromAsset

将一个现有的骨架导入到层次结构中。

目标是Rig Hierarchy控制器

## 图示

![]($-20221218-21204565.png)

## Inputs

在。执行。

目标。Rig Hierarchy Controller对象参考。

在资产路径中。字符串。要导入的uasset的路径。

在名称空间。名称。在骨骼名称前加上名称空间。

替换现有的骨骼。布尔值。如果为真，现有骨骼将被移除。

移除过期的骨头。布尔值。如果为真，在骨架中不存在的骨骼将被从层次结构中移除。

选择骨骼。布尔值。如果为真，骨骼将在导入时被选中。

设置撤销。布尔值。如果设置为 "true"，堆栈将记录该变化，以便撤销/重做。  

## Outputs

出：执行。

返回值。Rig元素键结构的数组。导入元素的键值。

Imports an existing skeleton to the hierarchy

Target is Rig Hierarchy Controller

## 图示

![]($-20221218-21204565.png)

## Inputs

In: Exec.

Target: Rig Hierarchy Controller Object Reference.

In Asset Path: String. The path to the uasset to import from.

In Name Space: Name. The namespace to prefix the bone names with.

Replace Existing Bones: Boolean. If true existing bones will be removed.

Remove Obsolete Bones: Boolean. If true bones non-existent in the skeleton will be removed from the hierarchy.

Select Bones: Boolean. If true the bones will be selected upon import.

Setup Undo: Boolean. If set to true the stack will record the change for undo / redo.  

## Outputs

Out: Exec.

Return Value: Array of Rig Element Key Structures. The keys of the imported elements.

