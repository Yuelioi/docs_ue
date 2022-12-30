# SnapshotPose

Takes a snapshot of this skeletal mesh component's pose and saves it to the specified snapshot.. The snapshot is taken at the current LOD, so if for example you took the snapshot at LOD1. and then used it at LOD0 any bones not in LOD1 will use the reference pose

Target is Skeletal Mesh Component

## 图示

![]($-20221218-18263127.png)

## Inputs

In: Exec.

Target: Skeletal Mesh Component Object Reference.

Snapshot: Pose Snapshot Structure (by ref).  

## Outputs

Out: Exec.

