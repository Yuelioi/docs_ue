# CreateMeshSection

Create/replace a section for this procedural mesh component.

Target is Procedural Mesh Component

## 图示

![]($-20221218-18254257.png)

## Inputs

In: Exec.

Target: Procedural Mesh Component Object Reference.

Section Index: Integer. Index of the section to create or replace..

Vertices: Array of Vectors. Vertex buffer of all vertex positions to use for this mesh section..

Triangles: Array of Integers. Index buffer indicating which vertices make up each triangle. Length must be a multiple of 3..

Normals: Array of Vectors. Optional array of normal vectors for each vertex. If supplied, must be same length as Vertices array..

UV0: Array of Vector 2D Structures. Optional array of texture co-ordinates for each vertex. If supplied, must be same length as Vertices array..

UV1: Array of Vector 2D Structures.

UV2: Array of Vector 2D Structures.

UV3: Array of Vector 2D Structures.

Vertex Colors: Array of Linear Color Structures. Optional array of colors for each vertex. If supplied, must be same length as Vertices array..

Tangents: Array of Proc Mesh Tangent Structures. Optional array of tangent vector for each vertex. If supplied, must be same length as Vertices array..

Create Collision: Boolean. Indicates whether collision should be created for this section. This adds significant cost..  

## Outputs

Out: Exec.

