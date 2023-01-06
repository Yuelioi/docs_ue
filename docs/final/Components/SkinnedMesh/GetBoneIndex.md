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

Find the index of bone by name. Looks in the current SkeletalMesh being used by this SkeletalMeshComponent.

Target is Skinned Mesh Component

## 图示

![]($-20221218-18263938.png)

## Inputs

Target: Skinned Mesh Component Object Reference.

Bone Name: Name. Name of bone to look up.  

## Outputs

Return Value: Integer. Index of the named bone in the current SkeletalMesh. Will return INDEX_NONE if bone not found..

