# AppendRevolvePolygon

In the coordinate system of the revolve polygon, +X is towards the "outside" of the revolve donut, and +Y is "up" (ie +Z in local space). Polygon should be oriented counter-clockwise to produce a correctly-oriented shape, otherwise it will be inside-out. Polygon endpoint is not repeated.

Target is Geometry Script Library Mesh Primitive Functions

## 图示

![]($-20221218-19125721.png)

## Inputs

In: Exec.

Target Mesh: Dynamic Mesh Object Reference.

Primitive Options: Geometry Script Primitive Options Structure.

Transform: Transform.

Polygon Vertices: Array of Vector 2D Structures.

Revolve Options: Geometry Script Revolve Options Structure.

Radius: Float (single-precision).

Steps: Integer.

Debug: Geometry Script Debug Object Reference.  

## Outputs

Out: Exec.

Target Mesh: Dynamic Mesh Object Reference. In the coordinate system of the revolve polygon, +X is towards the "outside" of the revolve donut, and +Y is "up" (ie +Z in local space). Polygon should be oriented counter-clockwise to produce a correctly-oriented shape, otherwise it will be inside-out. Polygon endpoint is not repeated..

