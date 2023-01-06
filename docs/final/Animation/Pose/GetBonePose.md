# GetBonePose

从一个姿势中为提供的骨骼名称检索变换。

目标是Anim Pose Extensions

## 图示

![]($-20221218-17503228.png)

## Inputs

姿势。Anim Pose结构（通过引用）。检索变形的动画姿势。

骨骼名称。名称。要检索的骨骼的名称。

空间。EAnimPoseSpaces枚举。应该检索的变换空间。 

## Outputs

返回值。变换（通过引用）。如果找到的话，为骨骼请求的空间中的变换，否则返回身份变换。

Retrieves the transform for the provided bone name from a pose

Target is Anim Pose Extensions

## 图示

![]($-20221218-17503228.png)

## Inputs

Pose: Anim Pose Structure (by ref). Anim Pose to retrieve the transform from.

Bone Name: Name. Name of the bone to retrieve.

Space: EAnimPoseSpaces Enum. Space in which the transform should be retrieved.  

## Outputs

Return Value: Transform (by ref). Transform in requested space for bone if found, otherwise return identity transform.

