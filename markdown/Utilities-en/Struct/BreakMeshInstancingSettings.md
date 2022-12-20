# BreakMeshInstancingSettings

Adds a node that breaks a 'MeshInstancingSettings' into its member fields

## 图示

![]($-20221218-14395679.png)

## Inputs

Mesh Instancing Settings: Mesh Instancing Settings Structure (by ref).  

## Outputs

Actor Class To Use: Actor Class Reference. Actor Class to Use:. The actor class to attach new instance static mesh components to.

Instance Replacement Threshold: Integer. Instance Replacement Threshold:. The number of static mesh instances needed before a mesh is replaced with an instanced version.

Skip Meshes With Vertex Colors: Boolean. Skip Meshes with Vertex Colors:. Whether to skip the conversion to an instanced static mesh for meshes with vertex colors.. Instanced static meshes do not support vertex colors per-instance, so conversion will lose. this data..

Use HLOD Volumes: Boolean. Use HLODVolumes:. Whether split up instanced static mesh components based on their intersection with HLOD volumes.

Select The Type Of Instanced Component: Instanced Static Mesh Component Class Reference. ISMComponent to Use:. Whether to use the Instanced Static Mesh Compoment or the Hierarchical Instanced Static Mesh Compoment.

