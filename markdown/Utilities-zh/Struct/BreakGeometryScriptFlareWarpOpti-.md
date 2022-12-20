# BreakGeometryScriptFlareWarpOpti-

Adds a node that breaks a 'GeometryScriptFlareWarpOptions' into its member fields

## 图示

![]($-20221218-14370048.png)

## Inputs

Geometry Script Flare Warp Options: Geometry Script Flare Warp Options Structure (by ref).  

## Outputs

Symmetric Extents: Boolean. Symmetric Extents:. Symmetric extents are [-BendExtent,BendExtent], if disabled, then [-LowerExtent,BendExtent] is used.

Lower Extent: Float (single-precision). Lower Extent:. Lower extent used when bSymmetricExtents = false.

Flare Type: EGeometryScriptFlareType Enum. Flare Type:. Determines the profile used as a displacement.

