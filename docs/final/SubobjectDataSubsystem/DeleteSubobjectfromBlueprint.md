# DeleteSubobjectfromBlueprint

试图从其蓝图上下文中删除给定的子对象

目标是子对象数据子系统

## 图示

![](/uploads/projects/ue-bluprint/20221218-21054800.png)

## Inputs

在。执行。

目标。子对象数据子系统对象参考。

上下文手柄。子对象数据句柄结构（通过引用）。应该被删除的子对象的所属上下文。

要删除的子对象。子对象数据句柄结构（通过引用）。应该被删除的子对象句柄。

BPContext。蓝图对象参考。给定的蓝图上下文。

## Outputs

出：执行。

返回值。整数。成功删除的子对象的数量。

<hr>

Attempts to delete the given subobject from its blueprint context

Target is Subobject Data Subsystem

## 图示

![](/uploads/projects/ue-bluprint/20221218-21054800.png)

## Inputs

In: Exec.

Target: Subobject Data Subsystem Object Reference.

Context Handle: Subobject Data Handle Structure (by ref). The owning context of the subobjects that should be removed.

Subobject to Delete: Subobject Data Handle Structure (by ref). The subobject handles that should be deleted.

BPContext: Blueprint Object Reference. The blueprint context for the given.

## Outputs

Out: Exec.

Return Value: Integer. The number of subobjects successfully deleted.
