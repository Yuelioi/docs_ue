# ReplaceMeshComponentsMeshes

Find the references of the mesh MeshToBeReplaced on all the MeshComponents provided and replace it by NewMesh.. The editor should not be in play in editor mode.

Target is Static Mesh Editor Subsystem

## 图示

![]($-20221218-21040139.png)

## Inputs

In: Exec.

Target: Static Mesh Editor Subsystem Object Reference.

Mesh Components: Array of Static Mesh Component Object References. List of MeshComponent to search from..

Mesh to be Replaced: Static Mesh Object Reference. Mesh we want to replace..

New Mesh: Static Mesh Object Reference. Mesh to replace MeshToBeReplaced by..  

## Outputs

Out: Exec.

