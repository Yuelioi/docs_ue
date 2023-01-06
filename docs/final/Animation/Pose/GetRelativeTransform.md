# GetRelativeTransform

检索两个提供的骨骼名称之间的相对变换。

目标是Anim Pose Extensions

## 图示

![]($-20221218-17503789.png)

## Inputs

姿势。Anim Pose结构（通过引用）。检索变形的动画姿势。

从骨骼名称。名称。检索相对转换的骨骼的名称。

To Bone Name: 名称。检索相对转换的骨骼的名称。

Space（空间）。EAnimPoseSpaces枚举。检索变换的空间。 

## Outputs

返回值。变换。如果找到的话，在请求的空间中对骨骼的相对变换，否则返回身份变换。

Retrieves the relative transform between the two provided bone names

Target is Anim Pose Extensions

## 图示

![]($-20221218-17503789.png)

## Inputs

Pose: Anim Pose Structure (by ref). Anim Pose to retrieve the transform from.

From Bone Name: Name. Name of the bone to retrieve the transform relative from.

To Bone Name: Name. Name of the bone to retrieve the transform relative to.

Space: EAnimPoseSpaces Enum. Space in which the transform should be retrieved.  

## Outputs

Return Value: Transform. Relative transform in requested space for bone if found, otherwise return identity transform.

