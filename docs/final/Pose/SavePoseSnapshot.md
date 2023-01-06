# SavePoseSnapshot

获取当前骨骼网格组件姿态的快照并在内部保存。这个快照可以在动画蓝图中以名称检索，以便进行混合。快照是在当前的LOD下拍摄的，所以如果你在LOD1下拍摄快照，然后在LOD0下使用它，任何不在LOD1下的骨骼将使用参考姿势。

目标是Anim Instance

## 图示

![]($-20221218-20302858.png)

## Inputs

在。执行。

目标。Anim 实例对象参考。

快照名称：名称。  

## Outputs

出：执行。

Takes a snapshot of the current skeletal mesh component pose & saves it internally.. This snapshot can then be retrieved by name in the animation blueprint for blending.. The snapshot is taken at the current LOD, so if for example you took the snapshot at LOD1 and then used it at LOD0 any bones not in LOD1 will use the reference pose

Target is Anim Instance

## 图示

![]($-20221218-20302858.png)

## Inputs

In: Exec.

Target: Anim Instance Object Reference.

Snapshot Name: Name.  

## Outputs

Out: Exec.

