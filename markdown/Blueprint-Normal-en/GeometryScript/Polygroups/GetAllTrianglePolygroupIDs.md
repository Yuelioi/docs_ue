# GetAllTrianglePolygroupIDs

Create list of per-triangle Polygroup IDs for the Polygroup in the Mesh. @warning if the mesh is not Triangle-Compact (eg GetHasTriangleIDGaps == false) then the returned list will also have the same gaps

Target is Geometry Script Library Mesh Polygroup Functions

## 图示

![]($-20221218-19124064.png)

## Inputs

In: Exec.

Target Mesh: Dynamic Mesh Object Reference.

Group Layer: Geometry Script Group Layer Structure.

Polygroup IDs Out: Index List Structure (by ref).  

## Outputs

Out: Exec.

Target Mesh: Dynamic Mesh Object Reference. Create list of per-triangle Polygroup IDs for the Polygroup in the Mesh. @warning if the mesh is not Triangle-Compact (eg GetHasTriangleIDGaps == false) then the returned list will also have the same gaps.

