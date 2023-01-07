# SetLodfromStaticMesh

使用 SourceStaticMesh SourceLodIndex 的几何图形在 DestinationLodIndex 添加或创建一个 LOD。

目标是静态网格编辑器子系统

## 图示

![](/uploads/projects/ue-bluprint/20221218-21040875.png)

## Inputs

在。执行。

目标。静态网格编辑器子系统对象参考。

目的地静态网格。静态网格对象参考。用于设置 LOD 的静态网格。

目的地 Lod 索引。整数。要设置的 LOD 的索引。

静态网格的来源。静态网格对象参考。用于获取 LOD 的静态网格。

来源 Lod 指数。整数。要获取的 LOD 的索引。

重复使用现有的材料槽。布尔值。如果是 true，当 SourceStaticMesh 有相同的材料分配时，SourceStaticMesh 的部分将被重新映射以匹配 DestinationStaticMesh 的材料槽。如果是假的，SourceStaticMesh 的所有材料槽将被附加到 DestinationStaticMesh 中。

## Outputs

出：执行。

返回值。整数。被设置的 LOD 的索引。如果不是一个有效的索引，它可以与 DestinationLodIndex 不同。负值表示 LOD 没有被设置。解释见日志。

<hr>

Adds or create a LOD at DestinationLodIndex using the geometry from SourceStaticMesh SourceLodIndex

Target is Static Mesh Editor Subsystem

## 图示

![](/uploads/projects/ue-bluprint/20221218-21040875.png)

## Inputs

In: Exec.

Target: Static Mesh Editor Subsystem Object Reference.

Destination Static Mesh: Static Mesh Object Reference. The static mesh to set the LOD in..

Destination Lod Index: Integer. The index of the LOD to set..

Source Static Mesh: Static Mesh Object Reference. The static mesh to get the LOD from..

Source Lod Index: Integer. The index of the LOD to get..

Reuse Existing Material Slots: Boolean. If true, sections from SourceStaticMesh will be remapped to match the material slots of DestinationStaticMesh when they have the same material assigned. If false, all material slots of SourceStaticMesh will be appended in DestinationStaticMesh..

## Outputs

Out: Exec.

Return Value: Integer. The index of the LOD that was set. It can be different than DestinationLodIndex if it wasn't a valid index. A negative value indicates that the LOD was not set. See log for explanation..
