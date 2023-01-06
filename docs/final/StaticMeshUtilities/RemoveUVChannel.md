# RemoveUVChannel

移除静态网格的LOD上的指定通道索引的UV通道。

目标是静态网格编辑器子系统

## 图示

![]($-20221218-21035591.png)

## Inputs

在。执行。

目标。静态网格编辑器子系统对象参考。

静态网格。静态网格对象参考。移除UV通道的静止网格。

LODIndex。整数。StaticMesh LOD的索引。

UVChannel索引。整数。要删除UV通道的索引。  

## Outputs

出：执行。

返回值。布尔值。如果UV通道被删除，则为true。

Removes the UV channel at the specified channel index on the given LOD of a StaticMesh.

Target is Static Mesh Editor Subsystem

## 图示

![]($-20221218-21035591.png)

## Inputs

In: Exec.

Target: Static Mesh Editor Subsystem Object Reference.

Static Mesh: Static Mesh Object Reference. Static mesh on which to remove the UV channel..

LODIndex: Integer. Index of the StaticMesh LOD..

UVChannel Index: Integer. Index where to remove the UV channel..  

## Outputs

Out: Exec.

Return Value: Boolean. true if the UV channel was removed..

