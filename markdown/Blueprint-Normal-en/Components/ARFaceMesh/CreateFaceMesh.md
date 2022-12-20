# CreateFaceMesh

Create the initial face mesh from raw mesh data

Target is Apple ARKit Face Mesh Component

## 图示

![]($-20221218-18224358.png)

## Inputs

In: Exec.

Target: Apple ARKit Face Mesh Component Object Reference.

Vertices: Array of Vectors. Vertex buffer of all vertex positions to use for this mesh section..

Triangles: Array of Integers. Index buffer indicating which vertices make up each triangle. Length must be a multiple of 3..

UV0: Array of Vector 2D Structures. Optional array of texture co-ordinates for each vertex. If supplied, must be same length as Vertices array..  

## Outputs

Out: Exec.

