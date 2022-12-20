# BreakSkeletalMeshMergeParams

Adds a node that breaks a 'SkeletalMeshMergeParams' into its member fields

## 图示

![]($-20221218-14424044.png)

## Inputs

Skeletal Mesh Merge Params: Skeletal Mesh Merge Params Structure (by ref).  

## Outputs

Mesh Section Mappings: Array of Skel Mesh Merge Section Mapping Structures. Mesh Section Mappings:. An optional array to map sections from the source meshes to merged section entries.

UVTransforms Per Mesh: Array of Skel Mesh Merge Mesh UVTransforms Structures. UVTransforms Per Mesh:. An optional array to transform the UVs in each mesh.

Meshes To Merge: Array of Skeletal Mesh Object References. Meshes to Merge:. The list of skeletal meshes to merge..

Strip Top LODS: Integer. Strip Top LODS:. The number of high LODs to remove from input meshes.

Needs Cpu Access: Boolean. Needs Cpu Access:. Whether or not the resulting mesh needs to be accessed by the CPU for any reason (e.g. for spawning particle effects)..

Skeleton Before: Boolean. Skeleton Before:. Update skeleton before merge. Otherwise, update after.. Skeleton must also be provided..

Skeleton: Skeleton Object Reference. Skeleton:. Skeleton that will be used for the merged mesh.. Leave empty if the generated skeleton is OK..

