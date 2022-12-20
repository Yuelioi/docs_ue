# BreakMeshMergingSettings

Adds a node that breaks a 'MeshMergingSettings' into its member fields

## 图示

![]($-20221218-14395766.png)

## Inputs

Mesh Merging Settings: Mesh Merging Settings Structure (by ref).  

## Outputs

Target Lightmap Resolution: Integer. Target Light Map Resolution:. The lightmap resolution used both for generating lightmap UV coordinates, and also set on the generated static mesh.

Material Settings: Material Proxy Settings Structure. Material Settings:. Material simplification.

Specific LOD: Integer. Specific LOD:. A given LOD level to export from the source meshes.

LODSelection Type: EMeshLODSelectionType Enum. LODSelection Type:. Which selection mode should be used when generating the merged static mesh.

Generate Lightmap UV: Boolean. Generate Light Map UV:. Whether to generate lightmap UVs for a merged mesh.

Computed Lightmap Resolution: Boolean. Computed Light Map Resolution:. Whether or not the lightmap resolution should be computed by summing the lightmap resolutions for the input Mesh Components.

Pivot Point At Zero: Boolean. Pivot Point at Zero:. Whether merged mesh should have pivot at world origin, or at first merged component otherwise.

Merge Physics Data: Boolean. Merge Physics Data:. Whether to merge physics data (collision primitives).

Merge Materials: Boolean. Merge Materials:. Whether to merge source materials into one flat material, ONLY available when merging a single LOD level, see LODSelectionType.

Create Merged Material: Boolean. Create Merged Material:. Create a flat material from all source materials, along with a new set of UVs. This material won't be applied to any section by default..

Bake Vertex Data To Mesh: Boolean. Bake Vertex Data to Mesh:. Whether or not vertex data such as vertex colours should be baked into the resulting mesh.

Use Vertex Data For Baking Material: Boolean. Use Vertex Data for Baking Material:. Whether or not vertex data such as vertex colours should be used when baking out materials.

Use Texture Binning: Boolean. Use Texture Binning:. Whether or not to calculate varying output texture sizes according to their importance in the final atlas texture.

Use Landscape Culling: Boolean. Use Landscape Culling:. Whether or not to use available landscape geometry to cull away invisible triangles.

Include Imposters: Boolean. Include Imposters:. Whether or not to include any imposter LODs that are part of the source static meshes.

Generate Nanite Enabled Mesh: Boolean. Generate Nanite Enabled Mesh:. Whether to generate a nanite-enabled mesh.

Nanite Fallback Triangle Percent: Float (single-precision). Nanite Fallback Triangle Percent:. Percentage of triangles to reduce down to for generating a coarse fallback mesh from the Nanite mesh.

