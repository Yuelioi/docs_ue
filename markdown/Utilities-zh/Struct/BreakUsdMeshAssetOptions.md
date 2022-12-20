# BreakUsdMeshAssetOptions

Adds a node that breaks a 'UsdMeshAssetOptions' into its member fields

## 图示

![]($-20221218-14450398.png)

## Inputs

Usd Mesh Asset Options: Usd Mesh Asset Options Structure (by ref).  

## Outputs

Use Payload: Boolean. Use Payload:. If true, the mesh data is exported to yet another "payload" file, and referenced via a payload composition arc.

Payload Format: String. Payload Format:. USD format to use for exported payload files.

Bake Materials: Boolean. Bake Materials:. Whether to bake the mesh's assigned material and export these as separate UsdPreviewSurface assets.

Remove Unreal Materials: Boolean. Remove Unreal Materials:. Whether to remove the 'unrealMaterial' attribute after binding the corresponding baked material.

Material Baking Options: Usd Material Baking Options Structure. Material Baking Options.

Lowest Mesh LOD: Integer. Lowest Mesh LOD:. Lowest of the LOD indices to export static and skeletal meshes with (use 0 for full detail).

Highest Mesh LOD: Integer. Highest Mesh LOD:. Highest of the LOD indices to export static and skeletal meshes with.

