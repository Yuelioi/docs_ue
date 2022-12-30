# GetRelativetoRefPoseTransform

Retrieves the relative transform between reference and animated bone transform

Target is Anim Pose Extensions

## 图示

![]($-20221218-17503681.png)

## Inputs

Pose: Anim Pose Structure (by ref). Anim Pose to retrieve the transform from.

Bone Name: Name. Name of the bone to retrieve the relative transform for.

Space: EAnimPoseSpaces Enum. Space in which the transform should be retrieved.  

## Outputs

Return Value: Transform. Relative transform in requested space for bone if found, otherwise return identity transform.

