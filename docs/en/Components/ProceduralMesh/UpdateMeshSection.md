# UpdateMeshSection

Updates a section of this procedural mesh component. This is faster than CreateMeshSection, but does not let you change topology. Collision info is also updated.

Target is Procedural Mesh Component

## 图示

![]($-20221218-18255196.png)

## Inputs

In: Exec.

Target: Procedural Mesh Component Object Reference.

Section Index: Integer.

Vertices: Array of Vectors. Vertex buffer of all vertex positions to use for this mesh section..

Normals: Array of Vectors. Optional array of normal vectors for each vertex. If supplied, must be same length as Vertices array..

UV0: Array of Vector 2D Structures. Optional array of texture co-ordinates for each vertex. If supplied, must be same length as Vertices array..

UV1: Array of Vector 2D Structures.

UV2: Array of Vector 2D Structures.

UV3: Array of Vector 2D Structures.

Vertex Colors: Array of Linear Color Structures. Optional array of colors for each vertex. If supplied, must be same length as Vertices array..

Tangents: Array of Proc Mesh Tangent Structures. Optional array of tangent vector for each vertex. If supplied, must be same length as Vertices array..  

## Outputs

Out: Exec.

