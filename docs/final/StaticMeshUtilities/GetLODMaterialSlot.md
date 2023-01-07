# GetLODMaterialSlot

获取用于特定 LOD 部分的材质槽。

目标是静态网格编辑器子系统

## 图示

![](/uploads/projects/ue-bluprint/20221218-21033948.png)

## Inputs

在。执行。

目标。静态网格编辑器子系统对象参考。

静态网格。静态网格对象参考。从静态网格中获取材料索引。

LODIndex。整数。StaticMesh LOD 的索引。

科目索引。整数。StaticMesh 截面的索引。

## Outputs

出：执行。

返回值。整数。MaterialSlotIndex 该段使用的材料槽的索引，如果有错误，则为 INDEX_NONE。

<hr>

Gets the material slot used for a specific LOD section.

Target is Static Mesh Editor Subsystem

## 图示

![](/uploads/projects/ue-bluprint/20221218-21033948.png)

## Inputs

In: Exec.

Target: Static Mesh Editor Subsystem Object Reference.

Static Mesh: Static Mesh Object Reference. Static mesh to get the material index from..

LODIndex: Integer. Index of the StaticMesh LOD..

Section Index: Integer. Index of the StaticMesh Section..

## Outputs

Out: Exec.

Return Value: Integer. MaterialSlotIndex Index of the material slot used by the section or INDEX_NONE in case of error..
