# CreateGridMeshWelded

Generate a vertex buffer, index buffer and UVs for a tessellated grid mesh.

Target is Kismet Procedural Mesh Library

## 图示

![]($-20221218-18254141.png)

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

