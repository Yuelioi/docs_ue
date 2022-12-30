# GetBonePose

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

