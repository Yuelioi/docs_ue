# GetLODMaterialSlot

获取用于特定 LOD 部分的材质槽。

目标是骨架网状结构编辑器子系统

## 图示

![](/uploads/projects/ue-bluprint/20221218-20582699.png)

## Inputs

在。执行。

目标。骨骼网编辑子系统对象参考。

骨架网。骨架网格对象参考。从 SkeletalMesh 中获取材料索引。

LODIndex。整数。StaticMesh LOD 的索引。

科目索引。整数。StaticMesh 截面的索引。

## Outputs

出：执行。

返回值。整数。MaterialSlotIndex 该段使用的材料槽的索引，如果有错误，则为 INDEX_NONE。

<hr>

Gets the material slot used for a specific LOD section.

Target is Skeletal Mesh Editor Subsystem

## 图示

![](/uploads/projects/ue-bluprint/20221218-20582699.png)

## Inputs

In: Exec.

Target: Skeletal Mesh Editor Subsystem Object Reference.

Skeletal Mesh: Skeletal Mesh Object Reference. SkeletalMesh to get the material index from..

LODIndex: Integer. Index of the StaticMesh LOD..

Section Index: Integer. Index of the StaticMesh Section..

## Outputs

Out: Exec.

Return Value: Integer. MaterialSlotIndex Index of the material slot used by the section or INDEX_NONE in case of error..
