# ReplaceMeshComponentsMeshes

在所有提供的MeshComponents中找到MeshToBeReplaced的引用，然后用NewMesh替换它。编辑器模式下，不应该在播放。

目标是静态网格编辑器子系统

## 图示

![]($-20221218-21040139.png)

## Inputs

在。执行。

目标。静态网格编辑器子系统对象参考。

网格组件。静态网格组件对象参考数组。列表中的MeshComponent可供搜索。

要被替换的网格。静态网格对象参考。我们要替换的网格。

新的网格。静态网格对象参考。用来替换MeshToBeReplaced的网格。

## Outputs

出：执行。

Find the references of the mesh MeshToBeReplaced on all the MeshComponents provided and replace it by NewMesh.. The editor should not be in play in editor mode.

Target is Static Mesh Editor Subsystem

## 图示

![]($-20221218-21040139.png)

## Inputs

In: Exec.

Target: Static Mesh Editor Subsystem Object Reference.

Mesh Components: Array of Static Mesh Component Object References. List of MeshComponent to search from..

Mesh to be Replaced: Static Mesh Object Reference. Mesh we want to replace..

New Mesh: Static Mesh Object Reference. Mesh to replace MeshToBeReplaced by..  

## Outputs

Out: Exec.

