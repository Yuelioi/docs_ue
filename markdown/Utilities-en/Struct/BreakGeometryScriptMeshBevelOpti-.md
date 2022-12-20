# BreakGeometryScriptMeshBevelOpti-

Adds a node that breaks a 'GeometryScriptMeshBevelOptions' into its member fields

## 图示

![]($-20221218-14370681.png)

## Inputs

Geometry Script Mesh Bevel Options: Geometry Script Mesh Bevel Options Structure (by ref).  

## Outputs

Bevel Distance: Float (single-precision). Bevel Distance.

Infer Material ID: Boolean. Infer Material ID.

Set Material ID: Integer. Set Material ID.

Apply Filter Box: Boolean. Apply Filter Box:. If true the set of beveled polygroup edges is limited to those that. are fully or partially contained within the (transformed) FilterBox.

Filter Box: Box Structure. Filter Box:. Bounding Box used for edge filtering.

Filter Box Transform: Transform. Filter Box Transform:. Transform applied to the FilterBox.

Fully Contained: Boolean. Fully Contained:. If true, then only polygroup edges that are fully contained within the filter box will be beveled,. otherwise the edge will be beveled if any vertex is within the filter box..

