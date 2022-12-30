# BoneIsChildOf

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

