# ReplaceMeshComponentsMeshesonAct-

在所有提供的 Actor 的 MeshComponents 中找到 MeshToBeReplaced 的引用，然后用 NewMesh 替换它。

目标是静态网格编辑器子系统

## 图示

![](/uploads/projects/ue-bluprint/20221218-21040257.png)

## Inputs

在。执行。

目标。静态网格编辑器子系统对象参考。

演员。演员对象参考数组。搜索的演员列表...

要被替换的网格。静态网格对象参考。我们要替换的网格。

新的网格。静态网格对象参考。用来替换 MeshToBeReplaced 的网格。

## Outputs

出：执行。

<hr>

Find the references of the mesh MeshToBeReplaced on all the MeshComponents of all the Actors provided and replace it by NewMesh.

Target is Static Mesh Editor Subsystem

## 图示

![](/uploads/projects/ue-bluprint/20221218-21040257.png)

## Inputs

In: Exec.

Target: Static Mesh Editor Subsystem Object Reference.

Actors: Array of Actor Object References. List of Actors to search from..

Mesh to be Replaced: Static Mesh Object Reference. Mesh we want to replace..

New Mesh: Static Mesh Object Reference. Mesh to replace MeshToBeReplaced by..

## Outputs

Out: Exec.
