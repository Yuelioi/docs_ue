# CreateNewGroomBindingAsset

在项目的内容空间中创建一个新的新郎绑定资产。资产名称将根据新郎资产名称和骨架资产名称自动生成。

目标是新郎蓝图库

## 图示

![](/uploads/projects/ue-bluprint/20221218-19155144.png)

## Inputs

在。执行。

在 Groom 资产：Groom 资产对象参考。用于绑定的新郎资产。

在 Skeletal Mesh 中。Skeletal Mesh Object Reference。新郎应该被绑定的骨架网。

在 Num Interpolation Points:整数。(可选）用于 RBF 约束的点的数量。

在转移的源骨架网格中。骨架网格对象参考。(可选）新郎所使用的骨架网。只有在新郎所在的骨骼网与新郎的其他姿势不一致的情况下才可以使用。

在匹配部分。整数。

## Outputs

出：执行。

返回值。Groom Binding Asset Object Reference。

<hr>

Create a new groom binding asset within the contents space of the project. The asset name will be auto generated based on the groom asset name and the skeletal asset name

Target is Groom Blueprint Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-19155144.png)

## Inputs

In: Exec.

In Groom Asset: Groom Asset Object Reference. Groom asset for binding.

In Skeletal Mesh: Skeletal Mesh Object Reference. Skeletal mesh on which the groom should be bound to.

In Num Interpolation Points: Integer. (Optional) Number of point used for RBF constraint.

In Source Skeletal Mesh for Transfer: Skeletal Mesh Object Reference. (Optional) Skeletal mesh on which the groom was authored. This should be used only if the skeletal mesh on which the groom is attached to, does not match the rest pose of the groom.

In Matching Section: Integer.

## Outputs

Out: Exec.

Return Value: Groom Binding Asset Object Reference.
