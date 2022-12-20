# BreakGeometryScriptNaniteOptions

Adds a node that breaks a 'GeometryScriptNaniteOptions' into its member fields

## 图示

![]($-20221218-14371658.png)

## Inputs

Geometry Script Nanite Options: Geometry Script Nanite Options Structure (by ref).  

## Outputs

Enabled: Boolean. Enabled:. Set Nanite to Enabled/Disabled.

Fallback Percent Triangles: Float (single-precision). Fallback Percent Triangles:. Percentage of triangles to maintain in Fallback Mesh used when Nanite is unavailable.

Fallback Relative Error: Float (single-precision). Fallback Relative Error:. Relative Error to maintain in Fallback Mesh used when Nanite is unavailable. Overrides FallbackPercentTriangles. Set to 0 to only use FallbackPercentTriangles (default)..

