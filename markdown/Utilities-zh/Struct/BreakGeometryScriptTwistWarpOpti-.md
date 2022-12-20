# BreakGeometryScriptTwistWarpOpti-

Adds a node that breaks a 'GeometryScriptTwistWarpOptions' into its member fields

## 图示

![]($-20221218-14373988.png)

## Inputs

Geometry Script Twist Warp Options: Geometry Script Twist Warp Options Structure (by ref).  

## Outputs

Symmetric Extents: Boolean. Symmetric Extents:. Symmetric extents are [-BendExtent,BendExtent], if disabled, then [-LowerExtent,BendExtent] is used.

Lower Extent: Float (single-precision). Lower Extent:. Lower extent used when bSymmetricExtents = false.

Bidirectional: Boolean. Bidirectional:. If true, the Twist is "centered" at the Origin, ie the regions on either side of the extents are rigidly transformed. If false, the Twist begins at the start of the Lower Extents, and the "lower" region is not affected..

