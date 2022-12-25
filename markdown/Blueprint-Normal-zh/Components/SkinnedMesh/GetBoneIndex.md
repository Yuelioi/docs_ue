# GetBoneIndex

按名称查找骨骼的索引。在当前被这个SkeletalMeshComponent使用的SkeletalMesh中查找。

目标是带皮的网格组件

## 图示

![]($-20221218-18263938.png)

## Inputs

目标。蒙皮网状结构组件对象参考。

骨骼名称。名称。要查询的骨骼名称。 

## Outputs

返回值。整数。当前SkeletalMesh中指定骨骼的索引。如果没有找到骨头，将返回INDEX_NONE。
