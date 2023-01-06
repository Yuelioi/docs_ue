# ImportCurves

将一个骨架中的所有曲线导入到层次结构中。

目标是Rig Hierarchy控制器

## 图示

![]($-20221218-21204680.png)

## Inputs

在。执行。

目标。Rig Hierarchy Controller对象参考。

在Skeleton中。骨架对象参考。要导入曲线的骨架。

在名称空间。名称。在骨骼名称前加上名称空间。

选择曲线。布尔值。如果为真，曲线将在导入时被选中。

设置撤销。布尔值。如果设置为 "true"，堆栈将记录该变化，以便撤销/重做。

打印Python命令。布尔值。  

## Outputs

出：执行。

返回值。Rig元素键结构的数组。导入元素的键值。

Imports all curves from a skeleton to the hierarchy

Target is Rig Hierarchy Controller

## 图示

![]($-20221218-21204680.png)

## Inputs

In: Exec.

Target: Rig Hierarchy Controller Object Reference.

In Skeleton: Skeleton Object Reference. The skeleton to import the curves from.

In Name Space: Name. The namespace to prefix the bone names with.

Select Curves: Boolean. If true the curves will be selected upon import.

Setup Undo: Boolean. If set to true the stack will record the change for undo / redo.

Print Python Command: Boolean.  

## Outputs

Out: Exec.

Return Value: Array of Rig Element Key Structures. The keys of the imported elements.

