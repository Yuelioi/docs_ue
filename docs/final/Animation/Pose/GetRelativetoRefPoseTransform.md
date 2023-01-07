# GetRelativetoRefPoseTransform

检索参考值和动画骨骼变换之间的相对变换。

目标是 Anim Pose Extensions

## 图示

![](/uploads/projects/ue-bluprint/20221218-17503681.png)

## Inputs

姿势。Anim Pose 结构（通过参考）。检索变形的 Anim Pose。

骨骼名称。名称。要检索相对变换的骨骼名称。

Space（空间）。EAnimPoseSpaces 枚举。检索变换的空间。

## Outputs

返回值。变换。如果找到的话，在请求的空间中对骨骼的相对变换，否则返回身份变换。

<hr>

Retrieves the relative transform between reference and animated bone transform

Target is Anim Pose Extensions

## 图示

![](/uploads/projects/ue-bluprint/20221218-17503681.png)

## Inputs

Pose: Anim Pose Structure (by ref). Anim Pose to retrieve the transform from.

Bone Name: Name. Name of the bone to retrieve the relative transform for.

Space: EAnimPoseSpaces Enum. Space in which the transform should be retrieved.

## Outputs

Return Value: Transform. Relative transform in requested space for bone if found, otherwise return identity transform.
