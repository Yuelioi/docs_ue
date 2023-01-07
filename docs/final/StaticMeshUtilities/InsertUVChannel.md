# InsertUVChannel

在静态网格的给定 LOD 上的指定通道索引处插入一个空的 UV 通道。

目标是静态网格编辑器子系统

## 图示

![](/uploads/projects/ue-bluprint/20221218-21034991.png)

## Inputs

在。执行。

目标。静态网格编辑器子系统对象参考。

静态网格。静态网格对象参考。可插入 UV 通道的静态网格。

LODIndex。整数。StaticMesh LOD 的索引。

UVChannel 索引。整数。插入 UV 通道的索引。

## Outputs

出：执行。

返回值。布尔值。如果添加了一个 UV 通道，则为 true。

<hr>

Inserts an empty UV channel at the specified channel index on the given LOD of a StaticMesh.

Target is Static Mesh Editor Subsystem

## 图示

![](/uploads/projects/ue-bluprint/20221218-21034991.png)

## Inputs

In: Exec.

Target: Static Mesh Editor Subsystem Object Reference.

Static Mesh: Static Mesh Object Reference. Static mesh on which to insert a UV channel..

LODIndex: Integer. Index of the StaticMesh LOD..

UVChannel Index: Integer. Index where to insert the UV channel..

## Outputs

Out: Exec.

Return Value: Boolean. true if a UV channel was added..
