# ReplaceMeshComponentsMaterials

在所有提供的 MeshComponents 上找到 MaterialToReplaced 材料的引用，并用 NewMaterial 替换它。

目标是静态网格编辑器子系统

## 图示

![](/uploads/projects/ue-bluprint/20221218-21035720.png)

## Inputs

在。执行。

目标。静态网格编辑器子系统对象参考。

网格组件。网格组件对象参考数组。列表中的 MeshComponent 可供搜索。

要替换的材料。材料界面对象参考。我们要替换的材料。

新材料。材料界面对象参考。替换 MaterialToBeReplaced 的材料。

## Outputs

出：执行。

<hr>

Find the references of the material MaterialToReplaced on all the MeshComponents provided and replace it by NewMaterial.

Target is Static Mesh Editor Subsystem

## 图示

![](/uploads/projects/ue-bluprint/20221218-21035720.png)

## Inputs

In: Exec.

Target: Static Mesh Editor Subsystem Object Reference.

Mesh Components: Array of Mesh Component Object References. List of MeshComponent to search from..

Material to be Replaced: Material Interface Object Reference. Material we want to replace..

New Material: Material Interface Object Reference. Material to replace MaterialToBeReplaced by..

## Outputs

Out: Exec.
