# GetAllTrianglePolygroupIDs

为 Mesh 中的 Polygroup 创建每个三角形的 Polygroup ID 列表。@warning 如果网格不是三角形紧凑的（例如 GetHasTriangleIDGaps == false），那么返回的列表也会有相同的间隙。

目标是几何脚本库网格多组函数

## 图示

![](/uploads/projects/ue-bluprint/20221218-19124064.png)

## Inputs

在。执行。

目标网格。动态网格对象参考。

组图层。Geometry Script Group Layer Structure.

多组 ID 出：索引列表结构（按参考）。

## Outputs

出：执行。

目标网格。动态网格对象参考。为 Mesh 中的 Polygroup 创建每个三角形的 Polygroup ID 列表。警告：如果 Mesh 不是三角形紧凑的（例如 GetHasTriangleIDGaps == false），那么返回的列表也会有相同的空隙。

<hr>

Create list of per-triangle Polygroup IDs for the Polygroup in the Mesh. @warning if the mesh is not Triangle-Compact (eg GetHasTriangleIDGaps == false) then the returned list will also have the same gaps

Target is Geometry Script Library Mesh Polygroup Functions

## 图示

![](/uploads/projects/ue-bluprint/20221218-19124064.png)

## Inputs

In: Exec.

Target Mesh: Dynamic Mesh Object Reference.

Group Layer: Geometry Script Group Layer Structure.

Polygroup IDs Out: Index List Structure (by ref).

## Outputs

Out: Exec.

Target Mesh: Dynamic Mesh Object Reference. Create list of per-triangle Polygroup IDs for the Polygroup in the Mesh. @warning if the mesh is not Triangle-Compact (eg GetHasTriangleIDGaps == false) then the returned list will also have the same gaps.
