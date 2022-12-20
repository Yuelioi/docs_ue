# GetMaterialfromCollisionFaceInde-

Try and retrieve the material applied to a particular collision face of mesh. Used with face index returned from collision trace.

Target is Primitive Component

## 图示

![]($-20221218-20374199.png)

## Inputs

Target: Primitive Component Object Reference.

Face Index: Integer. Face index from hit result that was hit by a trace.  

## Outputs

Section Index: Integer. Section of the mesh that the face belongs to.

Return Value: Material Interface Object Reference. Material applied to section that the hit face belongs to.

