# BreakGeometryScriptCopyMeshToAss-

Adds a node that breaks a 'GeometryScriptCopyMeshToAssetOptions' into its member fields

## 图示

![]($-20221218-14365433.png)

## Inputs

Geometry Script Copy Mesh to Asset Options: Geometry Script Copy Mesh To Asset Options Structure (by ref).  

## Outputs

Enable Recompute Normals: Boolean. Enable Recompute Normals.

Enable Recompute Tangents: Boolean. Enable Recompute Tangents.

Enable Remove Degenerates: Boolean. Enable Remove Degenerates.

Replace Materials: Boolean. Replace Materials.

New Materials: Array of Material Interface Object References. New Materials.

New Material Slot Names: Array of Names. New Material Slot Names.

Apply Nanite Settings: Boolean. Apply Nanite Settings:. If enabled, NaniteSettings will be applied to the target Asset if possible.

Nanite Settings: Geometry Script Nanite Options Structure. Nanite Settings:. Nanite Settings applied to the target Asset, if bApplyNaniteSettings = true.

Emit Transaction: Boolean. Emit Transaction.

Defer Mesh Post Edit Change: Boolean. Defer Mesh Post Edit Change.

