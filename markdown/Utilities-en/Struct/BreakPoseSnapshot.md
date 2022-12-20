# BreakPoseSnapshot

Adds a node that breaks a 'PoseSnapshot' into its member fields

## 图示

![]($-20221218-14411788.png)

## Inputs

Pose Snapshot: Pose Snapshot Structure (by ref).  

## Outputs

Local Transforms: Array of Transforms. Local Transforms:. Array of transforms per-bone.

Bone Names: Array of Names. Bone Names:. Array of bone names (corresponding to LocalTransforms).

Skeletal Mesh Name: Name. Skeletal Mesh Name:. The name of the skeletal mesh that was used to take this snapshot.

Snapshot Name: Name. Snapshot Name:. The name for this snapshot.

Is Valid: Boolean. Is Valid:. Whether the pose is valid.

