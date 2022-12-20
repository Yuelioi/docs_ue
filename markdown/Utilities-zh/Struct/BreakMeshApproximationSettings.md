# BreakMeshApproximationSettings

Adds a node that breaks a 'MeshApproximationSettings' into its member fields

## 图示

![]($-20221218-14395409.png)

## Inputs

Mesh Approximation Settings: Mesh Approximation Settings Structure (by ref).  

## Outputs

Output Type: EMeshApproximationType Enum. Output Type:. Type of output from mesh approximation process.

Approximation Accuracy (Meters): Float (single-precision). Approximation Accuracy:. Approximation Accuracy in Meters, will determine (eg) voxel resolution.

Clamp Voxel Dimension: Integer. Clamp Voxel Dimension:. Maximum allowable voxel count along main directions. This is a limit on ApproximationAccuracy. Max of 1290 (1290^3 is the last integer < 2^31, using a bigger number results in failures in TArray code & probably elsewhere).

Attempt Auto Thickening: Boolean. Attempt Auto Thickening:. if enabled, we will attempt to auto-thicken thin parts or flat sheets.

Target Min Thickness Multiplier: Float (single-precision). Target Min Thickness Multiplier:. Multiplier on Approximation Accuracy used for auto-thickening.

Ignore Tiny Parts: Boolean. Ignore Tiny Parts:. If enabled, tiny parts will be excluded from the mesh merging, which can improve performance.

Tiny Part Size Multiplier: Float (single-precision). Tiny Part Size Multiplier:. Multiplier on Approximation Accuracy used to define tiny-part threshold, using maximum bounding-box dimension.

Base Capping: EMeshApproximationBaseCappingType Enum. Base Capping:. Optional methods to attempt to close off the bottom of open meshes.

Winding Threshold: Float (single-precision). Winding Threshold:. Winding Threshold controls hole filling at open mesh borders. Smaller value means "more/rounder" filling.

Fill Gaps: Boolean. Fill Gaps:. If true, topological expand/contract is used to try to fill small gaps between objects..

Gap Filling Distance (Meters): Float (single-precision). Gap Distance:. Distance in Meters to expand/contract to fill gaps.

Occlusion Method: EOccludedGeometryFilteringPolicy Enum. Occlusion Method:. Type of hidden geometry removal to apply.

Occlude From Bottom: Boolean. Occlude from Bottom:. If true, then the OcclusionMethod computation is configured to try to consider downward-facing "bottom" geometry as occluded.

Simplify Method: EMeshApproximationSimplificationPolicy Enum. Simplify Method:. Mesh Simplification criteria.

Target Tri Count: Integer. Target Tri Count:. Target triangle count for Mesh Simplification, for SimplifyMethods that use a Count.

Triangles Per M: Float (single-precision). Triangles Per M:. Approximate Number of triangles per Square Meter, for SimplifyMethods that use such a constraint.

Geometric Deviation (Meters): Float (single-precision). Geometric Deviation:. Allowable Geometric Deviation in Meters when SimplifyMethod incorporates a Geometric Tolerance.

Ground Clipping: EMeshApproximationGroundPlaneClippingPolicy Enum. Ground Clipping:. Configure how the final mesh should be clipped with a ground plane, if desired.

Ground Clipping ZHeight: Float (single-precision). Ground Clipping ZHeight:. Z-Height for the ground clipping plane, if enabled.

Estimate Hard Normals: Boolean. Estimate Hard Normals:. If true, normal angle will be used to estimate hard normals.

Hard Normal Angle: Float (single-precision). Hard Normal Angle.

UVGeneration Method: EMeshApproximationUVGenerationPolicy Enum. UVGeneration Method:. Mesh UV Generation Settings.

Initial Patch Count: Integer. Initial Patch Count:. Number of initial patches mesh will be split into before computing island merging.

Curvature Alignment: Float (single-precision). Curvature Alignment:. This parameter controls alignment of the initial patches to creases in the mesh.

Merging Threshold: Float (single-precision). Merging Threshold:. Distortion/Stretching Threshold for island merging - larger values increase the allowable UV stretching.

Max Angle Deviation: Float (single-precision). Max Angle Deviation:. UV islands will not be merged if their average face normals deviate by larger than this amount.

Generate Nanite Enabled Mesh: Boolean. Generate Nanite Enabled Mesh:. Whether to generate a nanite-enabled mesh.

Nanite Proxy Triangle Percent: Float (single-precision). Nanite Proxy Triangle Percent:. Percentage of triangles to reduce down to for generating a coarse proxy mesh from the Nanite mesh.

Support Ray Tracing: Boolean. Support Ray Tracing:. Whether ray tracing will be supported on this mesh. Disable this to save memory if the generated mesh will only be rendered in the distance..

Allow Distance Field: Boolean. Allow Distance Field:. Whether to allow distance field to be computed for this mesh. Disable this to save memory if the generated mesh will only be rendered in the distance..

Multi Sampling AA: Integer. Multi Sampling AA:. If Value is > 1, Multisample output baked textures by this amount in each direction (eg 4 == 16x supersampling).

Render Capture Resolution: Integer. Render Capture Resolution:. If Value is zero, use MaterialSettings resolution, otherwise override the render capture resolution.

Material Settings: Material Proxy Settings Structure. Material Settings:. Material generation settings.

Capture Field Of View: Float (single-precision). Capture Field Of View.

Near Plane Dist: Float (single-precision). Near Plane Dist.

Use Render LODMeshes: Boolean. Use Render LODMeshes:. If true, LOD0 Render Meshes (or Nanite Fallback meshes) are used instead of Source Mesh data. This can significantly reduce computation time and memory usage, but potentially at the cost of lower quality output..

Enable Simplify Pre Pass: Boolean. Enable Simplify Pre Pass:. If true, a faster mesh simplfication strategy will be used. This can significantly reduce computation time and memory usage, but potentially at the cost of lower quality output..

Enable Parallel Baking: Boolean. Enable Parallel Baking:. If false, texture capture and baking will be done serially after mesh generation, rather than in parallel when possible. This will reduce the maximum memory requirements of the process..

Print Debug Messages: Boolean. Print Debug Messages:. If true, print out debugging messages.

Emit Full Debug Mesh: Boolean. Emit Full Debug Mesh:. If true, write the full mesh triangle set (ie flattened, non-instanced) used for mesh generation. Warning: this asset may be extremely large!!.

