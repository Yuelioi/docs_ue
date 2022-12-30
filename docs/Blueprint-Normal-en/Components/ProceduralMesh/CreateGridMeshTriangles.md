# CreateGridMeshTriangles

Generate an index buffer for a grid of quads.

Target is Kismet Procedural Mesh Library

## 图示

![]($-20221218-18254026.png)

## Inputs

In: Exec.

Num X: Integer. Number of vertices in X direction (must be >= 2).

Num Y: Integer. Number of vertices in y direction (must be >= 2).

Winding: Boolean. Reverses winding of indices generated for each quad.  

## Outputs

Out: Exec.

Triangles: Array of Integers.

