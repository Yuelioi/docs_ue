# MakeMeshNaniteSettings

Adds a node that create a 'MeshNaniteSettings' from its members

## 图示

![]($-20221218-14573978.png)

## Inputs

Enabled: Boolean. Enabled:. If true, Nanite data will be generated..

Position Precision: Integer. Position Precision:. Position Precision. Step size is 2^(-PositionPrecision) cm. MIN_int32 is auto..

Keep Percent Triangles: Float (single-precision). Keep Percent Triangles:. Percentage of triangles to keep from source mesh. 1.0 = no reduction, 0.0 = no triangles..

Trim Relative Error: Float (single-precision). Trim Relative Error:. Reduce until at least this amount of error is reached relative to size of the mesh.

Fallback Percent Triangles: Float (single-precision). Fallback Percent Triangles:. Percentage of triangles to keep from source mesh for fallback. 1.0 = no reduction, 0.0 = no triangles..

Fallback Relative Error: Float (single-precision). Fallback Relative Error:. Reduce until at least this amount of error is reached relative to size of the mesh.  

## Outputs

Mesh Nanite Settings: Mesh Nanite Settings Structure.

