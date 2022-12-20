# CreateGridMeshSplit

Generate a vertex buffer, index buffer and UVs for a grid mesh where each quad is split, with standard 0-1 UVs on UV0 and point sampled texel center UVs for UV1.

Target is Kismet Procedural Mesh Library

## 图示

![]($-20221218-18253913.png)

## Inputs

In: Exec.

Num X: Integer. Number of vertices in X direction (must be >= 2).

Num Y: Integer. Number of vertices in y direction (must be >= 2).

Grid Spacing: Float (single-precision). Size of each quad in world units.  

## Outputs

Out: Exec.

Triangles: Array of Integers.

Vertices: Array of Vectors.

UVs: Array of Vector 2D Structures.

UV1s: Array of Vector 2D Structures.

