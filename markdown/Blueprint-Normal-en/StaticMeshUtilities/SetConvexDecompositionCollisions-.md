# SetConvexDecompositionCollisions-

Add a convex collision to a static mesh.. Any existing collisions will be removed from the static mesh.. This method replicates what is done when invoking menu entry "Collision > Auto Convex Collision" in the Mesh Editor.

Target is Static Mesh Editor Subsystem

## 图示

![]($-20221218-21040622.png)

## Inputs

In: Exec.

Target: Static Mesh Editor Subsystem Object Reference.

Static Mesh: Static Mesh Object Reference. Static mesh to add convex collision on..

Hull Count: Integer. Maximum number of convex pieces that will be created. Must be positive..

Max Hull Verts: Integer. Maximum number of vertices allowed for any generated convex hull..

Hull Precision: Integer. Number of voxels to use when generating collision. Must be positive..

Apply Changes: Boolean. Indicates if changes must be apply or not..  

## Outputs

Out: Exec.

Return Value: Boolean. A boolean indicating if the addition was successful or not..

