# RegenerateLOD

重新生成网格的 LODs

目标是骨架网状结构编辑器子系统

## 图示

![](/uploads/projects/ue-bluprint/20221218-20583034.png)

## Inputs

在。执行。

骨架网。Skeletal Mesh 对象参考。将重新生成 LOD 的网格。

新的 LODC 计数。整数。如果你想改变 LOD 计数，请设置有效值（>0）。否则，将使用当前的 LOD 并重新生成。

即使导入也要重新生成。布尔值。如果是 true，即使这个 LOD 之前被导入过，它也会重新生成。如果是 false，它将只对之前自动生成的 LOD 进行重新生成。

生成基础 LOD：布尔值。如果该选项为真，并且有一些缩减数据，基础 LOD 将根据设置进行缩减。

## Outputs

出：执行。

返回值。布尔值。如果成功则为 true。如果不能进行网格缩减，则返回 false。

<hr>

Regenerate LODs of the mesh

Target is Skeletal Mesh Editor Subsystem

## 图示

![](/uploads/projects/ue-bluprint/20221218-20583034.png)

## Inputs

In: Exec.

Skeletal Mesh: Skeletal Mesh Object Reference. The mesh that will regenerate LOD.

New LODCount: Integer. Set valid value (>0) if you want to change LOD count. Otherwise, it will use the current LOD and regenerate.

Regenerate Even if Imported: Boolean. If this is true, it only regenerate even if this LOD was imported before If false, it will regenerate for only previously auto generated ones.

Generate Base LOD: Boolean. If this is true and there is some reduction data, the base LOD will be reduce according to the settings.

## Outputs

Out: Exec.

Return Value: Boolean. true if succeed. If mesh reduction is not available this will return false..
