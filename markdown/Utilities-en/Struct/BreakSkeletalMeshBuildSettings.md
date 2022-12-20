# BreakSkeletalMeshBuildSettings

Adds a node that breaks a 'SkeletalMeshBuildSettings' into its member fields

## 图示

![]($-20221218-14423956.png)

## Inputs

Skeletal Mesh Build Settings: Skeletal Mesh Build Settings Structure (by ref).  

## Outputs

Recompute Normals: Boolean. Recompute Normals:. If true, normals in the raw mesh are ignored and recomputed..

Recompute Tangents: Boolean. Recompute Tangents:. If true, tangents in the raw mesh are ignored and recomputed..

Use Mikk TSpace: Boolean. Use Mikk TSpace:. If true, degenerate triangles will be removed..

Compute Weighted Normals: Boolean. Compute Weighted Normals:. If true, we will use the surface area and the corner angle of the triangle as a ratio when computing the normals..

Remove Degenerates: Boolean. Remove Degenerates:. If true, degenerate triangles will be removed..

Use High Precision Tangent Basis: Boolean. Use High Precision Tangent Basis:. If true, Tangents will be stored at 16 bit vs 8 bit precision..

Use Full Precision UVs: Boolean. Use Full Precision UVs:. If true, UVs will be stored at full floating point precision..

Use Backwards Compatible F16Trunc UVs: Boolean. Use Backwards Compatible F16Trunc UVs:. If true, UVs will use backwards-compatible F16 conversion with truncation for legacy meshes..

Threshold Position: Float (single-precision). Threshold Position:. Threshold use to decide if two vertex position are equal..

Threshold Tangent Normal: Float (single-precision). Threshold Tangent Normal:. Threshold use to decide if two normal, tangents or bi-normals are equal..

Threshold UV: Float (single-precision). Threshold UV:. Threshold use to decide if two UVs are equal..

Morph Threshold Position: Float (single-precision). Morph Threshold Position:. Threshold to compare vertex position equality when computing morph target deltas..

