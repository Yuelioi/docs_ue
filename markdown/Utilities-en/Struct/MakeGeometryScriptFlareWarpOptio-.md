# MakeGeometryScriptFlareWarpOptio-

Adds a node that create a 'GeometryScriptFlareWarpOptions' from its members

## 图示

![]($-20221218-14540400.png)

## Inputs

Symmetric Extents: Boolean. Symmetric Extents:. Symmetric extents are [-BendExtent,BendExtent], if disabled, then [-LowerExtent,BendExtent] is used.

Lower Extent: Float (single-precision). Lower Extent:. Lower extent used when bSymmetricExtents = false.

Flare Type: EGeometryScriptFlareType Enum. Flare Type:. Determines the profile used as a displacement.  

## Outputs

Geometry Script Flare Warp Options: Geometry Script Flare Warp Options Structure.

