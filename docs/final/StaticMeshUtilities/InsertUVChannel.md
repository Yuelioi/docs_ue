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

Inserts an empty UV channel at the specified channel index on the given LOD of a StaticMesh.

Target is Static Mesh Editor Subsystem

## 图示

![]($-20221218-21034991.png)

## Inputs

In: Exec.

Target: Static Mesh Editor Subsystem Object Reference.

Static Mesh: Static Mesh Object Reference. Static mesh on which to insert a UV channel..

LODIndex: Integer. Index of the StaticMesh LOD..

UVChannel Index: Integer. Index where to insert the UV channel..  

## Outputs

Out: Exec.

Return Value: Boolean. true if a UV channel was added..

