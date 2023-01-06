# SnapshotPose

获取当前骨骼网格组件姿势的快照，并将其保存到指定的快照位置。快照是在当前的LOD下拍摄的，所以如果你在LOD1下拍摄快照，然后在LOD0下使用它，任何不在LOD1下的骨骼将使用参考姿势。

目标是Anim Instance

## 图示

![]($-20221218-20303091.png)

## Inputs

在。执行。

目标。Anim 实例对象参考。

快照。姿势快照结构（按参考）。  

## Outputs

出：执行。

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

