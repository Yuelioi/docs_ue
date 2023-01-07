# SnapshotPose

获取此骨骼网格组件的姿势快照并保存到指定的快照中。快照是在当前的 LOD 下拍摄的，所以如果你在 LOD1 下拍摄快照，然后在 LOD0 下使用它，任何不在 LOD1 下的骨骼将使用参考姿势。

目标是骨骼网格组件

## 图示

![](/uploads/projects/ue-bluprint/20221218-18263127.png)

## Inputs

在。执行。

目标。骨骼网构件对象参考。

快照。姿势快照结构（通过参考）。

## Outputs

输出。执行：执行。

<hr>

Takes a snapshot of this skeletal mesh component's pose and saves it to the specified snapshot.. The snapshot is taken at the current LOD, so if for example you took the snapshot at LOD1. and then used it at LOD0 any bones not in LOD1 will use the reference pose

Target is Skeletal Mesh Component

## 图示

![](/uploads/projects/ue-bluprint/20221218-18263127.png)

## Inputs

In: Exec.

Target: Skeletal Mesh Component Object Reference.

Snapshot: Pose Snapshot Structure (by ref).

## Outputs

Out: Exec.
