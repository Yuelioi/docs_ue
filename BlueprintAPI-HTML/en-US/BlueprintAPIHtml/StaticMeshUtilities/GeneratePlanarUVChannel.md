# GeneratePlanarUVChannel

Generates planar UV mapping in the specified UV channel on the given LOD of a StaticMesh.

Target is Static Mesh Editor Subsystem

## 图示

![]($-20221218-21033473.png)

## Inputs

In: Exec.

Target: Static Mesh Editor Subsystem Object Reference.

Static Mesh: Static Mesh Object Reference. Static mesh on which to generate the UV mapping..

LODIndex: Integer. Index of the StaticMesh LOD..

UVChannel Index: Integer. Channel where to save the UV mapping..

Position: Vector (by ref). Position of the center of the projection gizmo..

Orientation: Rotator (by ref). Rotation to apply to the projection gizmo..

Tiling: Vector 2D Structure (by ref). The UV tiling to use to generate the UV mapping..  

## Outputs

Out: Exec.

Return Value: Boolean. true if the UV mapping was generated..

