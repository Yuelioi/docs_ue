# SetLodfromStaticMesh

使用SourceStaticMesh SourceLodIndex的几何图形在DestinationLodIndex添加或创建一个LOD。

目标是静态网格编辑器子系统

## 图示

![]($-20221218-21040875.png)

## Inputs

在。执行。

目标。静态网格编辑器子系统对象参考。

目的地静态网格。静态网格对象参考。用于设置LOD的静态网格。

目的地Lod索引。整数。要设置的LOD的索引。

静态网格的来源。静态网格对象参考。用于获取LOD的静态网格。

来源Lod指数。整数。要获取的LOD的索引。

重复使用现有的材料槽。布尔值。如果是true，当SourceStaticMesh有相同的材料分配时，SourceStaticMesh的部分将被重新映射以匹配DestinationStaticMesh的材料槽。如果是假的，SourceStaticMesh的所有材料槽将被附加到DestinationStaticMesh中。

## Outputs

出：执行。

返回值。整数。被设置的LOD的索引。如果不是一个有效的索引，它可以与DestinationLodIndex不同。负值表示LOD没有被设置。解释见日志。
