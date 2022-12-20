# MakeMeshReductionSettings

Adds a node that create a 'MeshReductionSettings' from its members

## 图示

![]($-20221218-14574155.png)

## Inputs

Percent Triangles: Float (single-precision). Percent Triangles:. Percentage of triangles to keep. 1.0 = no reduction, 0.0 = no triangles..

Percent Vertices: Float (single-precision). Percent Vertices:. Percentage of vertices to keep. 1.0 = no reduction, 0.0 = no vertices..

Max Deviation: Float (single-precision). Max Deviation:. The maximum distance in object space by which the reduced mesh may deviate from the original mesh..

Pixel Error: Float (single-precision). Pixel Error:. The amount of error in pixels allowed for this LOD..

Welding Threshold: Float (single-precision). Welding Threshold:. Threshold in object space at which vertices are welded together..

Hard Angle Threshold: Float (single-precision). Hard Angle Threshold:. Angle at which a hard edge is introduced between faces..

Base LODModel: Integer. Base LODModel.

Silhouette Importance: EMeshFeatureImportance Enum. Silhouette Importance:. Higher values minimize change to border edges..

Texture Importance: EMeshFeatureImportance Enum. Texture Importance:. Higher values reduce texture stretching..

Shading Importance: EMeshFeatureImportance Enum. Shading Importance:. Higher values try to preserve normals better..

Recalculate Normals: Boolean. Recalculate Normals.

Generate Unique Lightmap UVs: Boolean. Generate Unique Lightmap UVs.

Keep Symmetry: Boolean. Keep Symmetry.

Visibility Aided: Boolean. Visibility Aided.

Cull Occluded: Boolean. Cull Occluded.

Termination Criterion: EStaticMeshReductionTerimationCriterion Enum. Termination Criterion:. The method to use when optimizing static mesh LODs.

Visibility Aggressiveness: EMeshFeatureImportance Enum. Visibility Aggressiveness:. Higher values generates fewer samples.

Vertex Color Importance: EMeshFeatureImportance Enum. Vertex Color Importance:. Higher values minimize change to vertex color data..  

## Outputs

Mesh Reduction Settings: Mesh Reduction Settings Structure.

