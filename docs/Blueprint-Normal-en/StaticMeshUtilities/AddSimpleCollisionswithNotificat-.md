# AddSimpleCollisionswithNotificat-

Add simple collisions to a static mesh.. This method replicates what is done when invoking menu entries "Collision > Add [...] Simplified Collision" in the Mesh Editor.

Target is Static Mesh Editor Subsystem

## 图示

![]($-20221218-21032497.png)

## Inputs

In: Exec.

Target: Static Mesh Editor Subsystem Object Reference.

Static Mesh: Static Mesh Object Reference. Mesh to generate simple collision for..

Shape Type: EScriptCollisionShapeType Enum. Options on which simple collision to add to the mesh..

Apply Changes: Boolean. Indicates if changes must be apply or not..  

## Outputs

Out: Exec.

Return Value: Integer. An integer indicating the index of the collision newly created. A negative value indicates the addition failed..

