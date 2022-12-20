# GetRelativeTransform

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

