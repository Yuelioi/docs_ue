# BreakMeshBuildSettings

Adds a node that breaks a 'MeshBuildSettings' into its member fields

## 图示

![]($-20221218-14395590.png)

## Inputs

Mesh Build Settings: Mesh Build Settings Structure (by ref).  

## Outputs

Use Mikk TSpace: Boolean. Use Mikk TSpace:. If true, degenerate triangles will be removed..

Recompute Normals: Boolean. Recompute Normals:. If true, normals in the raw mesh are ignored and recomputed..

Recompute Tangents: Boolean. Recompute Tangents:. If true, tangents in the raw mesh are ignored and recomputed..

Compute Weighted Normals: Boolean. Compute Weighted Normals:. If true, we will use the surface area and the corner angle of the triangle as a ratio when computing the normals..

Remove Degenerates: Boolean. Remove Degenerates:. If true, degenerate triangles will be removed..

Build Reversed Index Buffer: Boolean. Build Reversed Index Buffer:. Required to optimize mesh in mirrored transform. Double index buffer size..

Use High Precision Tangent Basis: Boolean. Use High Precision Tangent Basis:. If true, Tangents will be stored at 16 bit vs 8 bit precision..

Use Full Precision UVs: Boolean. Use Full Precision UVs:. If true, UVs will be stored at full floating point precision..

Use Backwards Compatible F16Trunc UVs: Boolean. Use Backwards Compatible F16Trunc UVs:. If true, UVs will use backwards-compatible F16 conversion with truncation for legacy meshes..

Generate Lightmap UVs: Boolean. Generate Lightmap UVs.

Two- Sided Distance Field Generation: Boolean. Generate Distance Field as if Two Sided:. Whether to generate the distance field treating every triangle hit as a front face.. When enabled prevents the distance field from being discarded due to the mesh being open, but also lowers Distance Field AO quality..

Enable Physical Material Mask: Boolean. Support Face Remap.

Min Lightmap Resolution: Integer. Min Lightmap Resolution.

Source Lightmap Index: Integer. Src Lightmap Index.

Destination Lightmap Index: Integer. Dst Lightmap Index.

Build Scale: Vector. Build Scale 3D:. The local scale applied when building the mesh.

Distance Field Resolution Scale: Float (single-precision). Distance Field Resolution Scale:. Scale to apply to the mesh when allocating the distance field volume texture.. The default scale is 1, which is assuming that the mesh will be placed unscaled in the world..

Distance Field Replacement Mesh: Static Mesh Object Reference. Distance Field Replacement Mesh.

Max Lumen Mesh Cards: Integer. Max Lumen Mesh Cards:. Max Lumen mesh cards to generate for this mesh.. More cards means that surface will have better coverage, but will result in increased runtime overhead.. Set to 0 in order to disable mesh card generation for this mesh.. Default is 12..

