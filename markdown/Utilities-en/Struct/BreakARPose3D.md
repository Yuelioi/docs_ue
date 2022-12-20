# BreakARPose3D

Adds a node that breaks a 'ARPose3D' into its member fields

## 图示

![]($-20221218-14311419.png)

## Inputs

ARPose 3D: ARPose 3D Structure (by ref).  

## Outputs

Skeleton Definition: ARSkeleton Definition Structure. Skeleton Definition:. The definition of this skeleton.

Joint Transforms: Array of Transforms. Joint Transforms:. The transform of each join in the model space.

Is Joint Tracked: Array of Booleans. Is Joint Tracked:. Flags indicating if each joint is tracked.

Joint Transform Space: EARJointTransformSpace Enum. Joint Transform Space.

