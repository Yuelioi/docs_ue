# GetLODMaterialSlot

获取用于特定LOD部分的材质槽。

目标是骨架网状结构编辑器子系统

## 图示

![]($-20221218-20582699.png)

## Inputs

在。执行。

目标。骨骼网编辑子系统对象参考。

骨架网。骨架网格对象参考。从SkeletalMesh中获取材料索引。

LODIndex。整数。StaticMesh LOD的索引。

科目索引。整数。StaticMesh截面的索引。  

## Outputs

出：执行。

返回值。整数。MaterialSlotIndex 该段使用的材料槽的索引，如果有错误，则为INDEX_NONE。
