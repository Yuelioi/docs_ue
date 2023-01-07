# AppendRevolvePolygon

在旋转多边形的坐标系中，+X 是朝向旋转甜甜圈的 "外面"，而+Y 是 "向上"（即本地空间的+Z）。多边形的方向应该是逆时针的，以产生一个正确方向的形状，否则它将是内向的。多边形的端点是不重复的。

目标是 Geometry Script Library Mesh Primitive Functions

## 图示

![](/uploads/projects/ue-bluprint/20221218-19125721.png)

## Inputs

在。执行。

目标网格。动态网格对象参考。

原始选项。Geometry Script Primitive Options 结构。

改造：改造。

多边形顶点。矢量二维结构的阵列。

Revolve 选项。Geometry Script Revolve Options 结构。

半径。Float（单精度）。

步数。整数。

调试。Geometry Script Debug Object Reference.

## Outputs

出：执行。

目标网格。动态网格对象参考。在旋转多边形的坐标系中，+X 是朝向旋转甜甜圈的 "外面"，而+Y 是 "向上"（即本地空间中的+Z）。多边形的方向应该是逆时针的，以产生一个正确方向的形状，否则它将是内向的。多边形的端点不重复。

<hr>

In the coordinate system of the revolve polygon, +X is towards the "outside" of the revolve donut, and +Y is "up" (ie +Z in local space). Polygon should be oriented counter-clockwise to produce a correctly-oriented shape, otherwise it will be inside-out. Polygon endpoint is not repeated.

Target is Geometry Script Library Mesh Primitive Functions

## 图示

![](/uploads/projects/ue-bluprint/20221218-19125721.png)

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
