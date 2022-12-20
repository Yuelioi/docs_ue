# BreakMeshProxySettings

Adds a node that breaks a 'MeshProxySettings' into its member fields

## 图示

![]($-20221218-14395943.png)

## Inputs

Mesh Proxy Settings: Mesh Proxy Settings Structure (by ref).  

## Outputs

Screen Size: Integer. Screen Size:. Screen size of the resulting proxy mesh in pixels.

Override Spatial Sampling Distance: Float (single-precision). Voxel Size:. Override when converting multiple meshes for proxy LOD merging. Warning, large geometry with small sampling has very high memory costs.

Material Settings: Material Proxy Settings Structure. Material Settings:. Material simplification.

Merge Distance: Float (single-precision). Merge Distance:. Distance at which meshes should be merged together, this can close gaps like doors and windows in distant geometry.

Unresolved Geometry Color: Color Structure. Unresolved Geometry Color:. Base color assigned to LOD geometry that can't be associated with the source geometry: e.g. doors and windows that have been closed by the Merge Distance.

Transfer Distance Override: Float (single-precision). Max Ray Cast Dist:. Override search distance used when discovering texture values for simplified geometry. Useful when non-zero Merge Distance setting generates new geometry in concave corners..

Hard Edge Angle: Float (single-precision). Hard Angle Threshold:. Angle at which a hard edge is introduced between faces.

Lightmap Resolution: Integer. Light Map Resolution:. Lightmap resolution.

Normal Calculation Method: EProxyNormalComputationMethod Enum. Normal Calculation Method:. Controls the method used to calculate the normal for the simplified geometry.

Landscape Culling Precision: ELandscapeCullingPrecision Enum. Landscape Culling Precision:. Level of detail of the landscape that should be used for the culling.

Calculate Correct LODModel: Boolean. Calculate Correct LODModel:. Determines whether or not the correct LOD models should be calculated given the source meshes and transition size.

Override Voxel Size: Boolean. Override Voxel Size:. If true, Spatial Sampling Distance will not be automatically computed based on geometry and you must set it directly.

Override Transfer Distance: Boolean. Override Transfer Distance:. Enable an override for material transfer distance.

Use Hard Angle Threshold: Boolean. Use Hard Angle Threshold:. Enable the use of hard angle based vertex splitting.

Compute Lightmap Resolution: Boolean. Compute Light Map Resolution:. If ticked will compute the lightmap resolution by summing the dimensions for each mesh included for merging.

Recalculate Normals: Boolean. Recalculate Normals:. Whether Simplygon should recalculate normals, otherwise the normals channel will be sampled from the original mesh.

Use Landscape Culling: Boolean. Use Landscape Culling:. Whether or not to use available landscape geometry to cull away invisible triangles.

Allow Distance Field: Boolean. Allow Distance Field:. Whether to allow distance field to be computed for this mesh. Disable this to save memory if the merged mesh will only be rendered in the distance..

Reuse Mesh Lightmap UVs: Boolean. Reuse Mesh Lightmap UVs:. Whether to attempt to re-use the source mesh's lightmap UVs when baking the material or always generate a new set..

Group Identical Meshes For Baking: Boolean. Group Identical Meshes for Baking:. Bake identical meshes (or mesh instances) only once. Can lead to discrepancies with the source mesh visual, especially for materials that are using world position or per instance data. However, this will result in better quality baked textures & greatly reduce baking time..

Create Collision: Boolean. Create Collision:. Whether to generate collision for the merged mesh.

Allow Vertex Colors: Boolean. Allow Vertex Colors:. Whether to allow vertex colors saved in the merged mesh.

Generate Lightmap UVs: Boolean. Generate Lightmap UVs:. Whether to generate lightmap uvs for the merged mesh.

Generate Nanite Enabled Mesh: Boolean. Generate Nanite Enabled Mesh:. Whether to generate a nanite-enabled mesh.

Nanite Proxy Triangle Percent: Float (single-precision). Nanite Proxy Triangle Percent:. Percentage of triangles to reduce down to for generating a coarse proxy mesh from the Nanite mesh.

