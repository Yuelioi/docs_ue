# MakeSkeletalMeshMergeParams

添加一个节点，从其成员中创建一个 "SkeletalMeshMergeParams"。

## 图示

![]($-20221218-15011924.png)

## Inputs

网格断面映射。Skel网格合并段映射结构数组。Mesh Section Mappings:.一个可选的数组，用于将源网格的截面映射到合并后的截面条目。

每个网格的UVTransforms。Skel Mesh Merge Mesh UVTransforms结构的阵列。UVTransforms Per Mesh:.一个可选的数组，用于转换每个网格中的UV。

要合并的网格。骨架网格对象引用数组。要合并的网格：.要合并的骨架网格的列表。

Top LODS: 整数。Strip Top LODS：。要从输入网格中移除的高LOD数量。

需要Cpu访问。Boolean.Needs Cpu Access：.产生的网格是否需要由CPU访问（例如：生成粒子效果）。

骨架在前。Boolean.骨架之前：。在合并前更新骨架。否则，在合并后更新。骨架也必须提供。

骨架。骨架对象参考。Skeleton:.合并后的网格将使用的骨架。如果生成的骨架没有问题，则留空。

## Outputs

骨架网合并参数。骨骼网合并参数结构。
