# BoneIsChildOf

测试BoneName是否是ParentBoneName的子女（或等于）。

目标是带皮的网格组件

## 图示

![]($-20221218-18263359.png)

## Inputs

目标。蒙皮网状结构组件对象参考。

骨的名称。名称。骨头的名称。

父骨名称。名称。 

## Outputs

返回值。布尔值。如果是子骨（严格来说，不一样），则为真。否则为假 注意 - 如果ChildBoneIndex与ParentBoneIndex相同，即严格来说必须是子骨，则会返回假。

Tests if BoneName is child of (or equal to) ParentBoneName.

Target is Skinned Mesh Component

## 图示

![]($-20221218-18263359.png)

## Inputs

Target: Skinned Mesh Component Object Reference.

Bone Name: Name. Name of the bone.

Parent Bone Name: Name.  

## Outputs

Return Value: Boolean. true if child (strictly, not same). false otherwise Note - will return false if ChildBoneIndex is the same as ParentBoneIndex ie. must be strictly a child..

