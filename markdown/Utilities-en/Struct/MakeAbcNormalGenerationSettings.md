# MakeAbcNormalGenerationSettings

Adds a node that create a 'AbcNormalGenerationSettings' from its members

## 图示

![]($-20221218-14461376.png)

## Inputs

Force One Smoothing Group Per Object: Boolean. Force One Smoothing Group Per Object:. Whether or not to force smooth normals for each individual object rather than calculating smoothing groups.

Hard Edge Angle Threshold: Float (single-precision). Hard Edge Angle Threshold:. Threshold used to determine whether an angle between two normals should be considered hard, closer to 0 means more smooth vs 1.

Recompute Normals: Boolean. Recompute Normals:. Determines whether or not the normals should be forced to be recomputed.

Ignore Degenerate Triangles: Boolean. Ignore Degenerate Triangles:. Determines whether or not the degenerate triangles should be ignored when calculating tangents/normals.

Skip Computing Tangents: Boolean. Skip Computing Tangents:. Determines whether tangents are computed for GeometryCache. Skipping them can improve streaming performance but may cause visual artifacts where they are required.  

## Outputs

Abc Normal Generation Settings: Abc Normal Generation Settings Structure.

