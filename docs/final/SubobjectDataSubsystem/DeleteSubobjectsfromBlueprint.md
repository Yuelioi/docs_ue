# DeleteSubobjectsfromBlueprint

试图从其上下文中删除给定的子对象阵列

目标是子对象数据子系统

## 图示

![](/uploads/projects/ue-bluprint/20221218-21055032.png)

## Inputs

在。执行。

目标。子对象数据子系统对象参考。

上下文手柄。子对象数据句柄结构（通过引用）。应该被删除的子对象的所属上下文。

要删除的子对象。子对象数据句柄结构的数组。应该被删除的子对象句柄数组。

BPContext。蓝图对象参考。给定的蓝图上下文。

## Outputs

出：执行。

返回值。整数。成功删除的子对象的数量。

<hr>

Attempts to delete the given array of subobjects from their context

Target is Subobject Data Subsystem

## 图示

![](/uploads/projects/ue-bluprint/20221218-21055032.png)

## Inputs

In: Exec.

Target: Subobject Data Subsystem Object Reference.

Context Handle: Subobject Data Handle Structure (by ref). The owning context of the subobjects that should be removed.

Subobjects to Delete: Array of Subobject Data Handle Structures. Array of subobject handles that should be deleted.

BPContext: Blueprint Object Reference. The blueprint context for the given.

## Outputs

Out: Exec.

Return Value: Integer. The number of subobjects successfully deleted.
