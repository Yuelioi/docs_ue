# SnapshotPose

Takes a snapshot of the current skeletal mesh component pose and saves it to the specified snapshot.. The snapshot is taken at the current LOD, so if for example you took the snapshot at LOD1. and then used it at LOD0 any bones not in LOD1 will use the reference pose

Target is Anim Instance

## 图示

![]($-20221218-20303091.png)

## Inputs

In: Exec.

Target: Anim Instance Object Reference.

Snapshot: Pose Snapshot Structure (by ref).  

## Outputs

Out: Exec.

