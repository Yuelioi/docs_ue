# MergeStaticMeshActors

Merge the meshes into a unique mesh with the provided StaticMeshActors. There are multiple options on how to merge the meshes and their materials.. The ActorsToMerge need to be in the same Level.. This may have a high impact on performance depending of the MeshMergingSettings options.

Target is Static Mesh Editor Subsystem

## 图示

![]($-20221218-18484937.png)

## Inputs

In: Exec.

Target: Static Mesh Editor Subsystem Object Reference.

Actors to Merge: Array of Static Mesh Actor Object References. List of Actors to merge..

Merge Options: Merge Static Mesh Actors Options Structure (by ref). Options on how to merge the actors..  

## Outputs

Out: Exec.

Out Merged Actor: Static Mesh Actor Object Reference. The new created actor, if requested..

Return Value: Boolean. if the operation is successful..

