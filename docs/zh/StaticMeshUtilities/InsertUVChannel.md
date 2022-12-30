# InsertUVChannel

在静态网格的给定LOD上的指定通道索引处插入一个空的UV通道。

目标是静态网格编辑器子系统

## 图示

![]($-20221218-21034991.png)

## Inputs

在。执行。

目标。静态网格编辑器子系统对象参考。

静态网格。静态网格对象参考。可插入UV通道的静态网格。

LODIndex。整数。StaticMesh LOD的索引。

UVChannel索引。整数。插入UV通道的索引。  

## Outputs

出：执行。

返回值。布尔值。如果添加了一个UV通道，则为true。
