# MakeGeometryScriptTwistWarpOptio-

Adds a node that create a 'GeometryScriptTwistWarpOptions' from its members

## 图示

![]($-20221218-14544148.png)

## Inputs

Symmetric Extents: Boolean. Symmetric Extents:. Symmetric extents are [-BendExtent,BendExtent], if disabled, then [-LowerExtent,BendExtent] is used.

Lower Extent: Float (single-precision). Lower Extent:. Lower extent used when bSymmetricExtents = false.

Bidirectional: Boolean. Bidirectional:. If true, the Twist is "centered" at the Origin, ie the regions on either side of the extents are rigidly transformed. If false, the Twist begins at the start of the Lower Extents, and the "lower" region is not affected..  

## Outputs

Geometry Script Twist Warp Options: Geometry Script Twist Warp Options Structure.

