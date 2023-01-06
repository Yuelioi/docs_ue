# ImportLOD

导入或重新导入一个LOD到指定的基本网格。如果LOD不存在，它将导入它并将其添加到基础静态网格。如果LOD已经存在，它将重新导入指定的LOD。

目标是静态网格编辑器子系统

## 图示

![]($-20221218-18540939.png)

## Inputs

在。执行。

目标。静态网格编辑器子系统对象参考。

基准静态网格。静态网格对象参考。

LODIndex：整数。

源文件名：字符串。

## Outputs

出：执行。

返回值。整数。被导入或重新导入的LOD的索引。如果出现问题，将返回INDEX_NONE。
Import or re-import a LOD into the specified base mesh. If the LOD do not exist it will import it and add it to the base static mesh. If the LOD already exist it will re-import the specified LOD.

Target is Static Mesh Editor Subsystem

## 图示

![]($-20221218-18540939.png)

## Inputs

In: Exec.

Target: Static Mesh Editor Subsystem Object Reference.

Base Static Mesh: Static Mesh Object Reference.

LODIndex: Integer.

Source Filename: String.  

## Outputs

Out: Exec.

Return Value: Integer. the index of the LOD that was imported or re-imported. Will return INDEX_NONE if anything goes bad..

