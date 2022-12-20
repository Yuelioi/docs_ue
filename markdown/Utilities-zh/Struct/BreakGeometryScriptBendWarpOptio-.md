# BreakGeometryScriptBendWarpOptio-

Adds a node that breaks a 'GeometryScriptBendWarpOptions' into its member fields

## 图示

![]($-20221218-14364816.png)

## Inputs

Geometry Script Bend Warp Options: Geometry Script Bend Warp Options Structure (by ref).  

## Outputs

Symmetric Extents: Boolean. Symmetric Extents:. Symmetric extents are [-BendExtent,BendExtent], if disabled, then [-LowerExtent,BendExtent] is used.

Lower Extent: Float (single-precision). Lower Extent:. Lower extent used when bSymmetricExtents = false.

Bidirectional: Boolean. Bidirectional:. If true, the Bend is "centered" at the Origin, ie the regions on either side of the extents are rigidly transformed. If false, the Bend begins at the start of the Lower Extents, and the "lower" region is not affected..

