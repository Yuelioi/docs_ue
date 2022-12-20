# BreakGeometryScriptRemoveHiddenT-

Adds a node that breaks a 'GeometryScriptRemoveHiddenTrianglesOptions' into its member fields

## 图示

![]($-20221218-14372755.png)

## Inputs

Geometry Script Remove Hidden Triangles Options: Geometry Script Remove Hidden Triangles Options Structure (by ref).  

## Outputs

Method: EGeometryScriptRemoveHiddenTrianglesMethod Enum. Method.

Samples Per Triangle: Integer. Samples Per Triangle:. add triangle samples per triangle (in addition to TriangleSamplingMethod).

Shrink Selection: Integer. Shrink Selection:. once triangles to remove are identified, do iterations of boundary erosion, ie contract selection by boundary vertex one-rings.

Winding Iso Value: Float (single-precision). Winding Iso Value:. use this as winding isovalue for WindingNumber mode.

Rays Per Sample: Integer. Rays Per Sample:. random rays to add beyond +/- major axes, for raycast sampling.

Normal Offset: Float (single-precision). Normal Offset:. Nudge sample points out by this amount to try to counteract numerical issues.

Compact Result: Boolean. Compact Result.

