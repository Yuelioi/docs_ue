# GetRefBonePose

检索提供的骨骼名称的参考姿势变换。

目标是 Anim Pose Extensions

## 图示

![](/uploads/projects/ue-bluprint/20221218-17503338.png)

## Inputs

姿势。Anim Pose 结构 (by ref). 检索转换的 Anim Pose。

骨骼名称。名称。要检索的骨骼的名称。

空间。EAnimPoseSpaces 枚举。应该检索的变换空间。

## Outputs

返回值。变换（通过引用）。如果找到的话，为骨骼请求的空间中的变换，否则返回身份变换。

<hr>

Retrieves the reference pose transform for the provided bone name

Target is Anim Pose Extensions

## 图示

![](/uploads/projects/ue-bluprint/20221218-17503338.png)

## Inputs

Pose: Anim Pose Structure (by ref). Anim Pose to retrieve the transform from.

Bone Name: Name. Name of the bone to retrieve.

Space: EAnimPoseSpaces Enum. Space in which the transform should be retrieved.

## Outputs

Return Value: Transform (by ref). Transform in requested space for bone if found, otherwise return identity transform.
