# MergeStaticMeshActors

用提供的 StaticMeshActors 将网格合并成一个独特的网格。关于如何合并网格和它们的材质有多种选择。要合并的角色需要在同一个级别。这可能会对性能产生很大影响，这取决于 MeshMergingSettings 选项。

目标是静态网格编辑器子系统

## 图示

![](/uploads/projects/ue-bluprint/20221218-18484937.png)

## Inputs

在。执行。

目标。静态网格编辑器子系统对象参考。

要合并的角色。静态网格演员对象参考数组。要合并的角色列表...

合并选项。合并静态网格演员选项结构（按参考）。关于如何合并演员的选项...

## Outputs

出：执行。

出合并的角色。静态网格演员对象参考。新创建的角色，如果需要的话。

返回值。布尔值。如果操作成功。

<hr>

Merge the meshes into a unique mesh with the provided StaticMeshActors. There are multiple options on how to merge the meshes and their materials.. The ActorsToMerge need to be in the same Level.. This may have a high impact on performance depending of the MeshMergingSettings options.

Target is Static Mesh Editor Subsystem

## 图示

![](/uploads/projects/ue-bluprint/20221218-18484937.png)

## Inputs

In: Exec.

Target: Static Mesh Editor Subsystem Object Reference.

Actors to Merge: Array of Static Mesh Actor Object References. List of Actors to merge..

Merge Options: Merge Static Mesh Actors Options Structure (by ref). Options on how to merge the actors..

## Outputs

Out: Exec.

Out Merged Actor: Static Mesh Actor Object Reference. The new created actor, if requested..

Return Value: Boolean. if the operation is successful..
