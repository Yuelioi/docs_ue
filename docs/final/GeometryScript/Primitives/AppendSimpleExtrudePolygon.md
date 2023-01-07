# AppendSimpleExtrudePolygon

多边形的方向应该是逆时针的，以产生一个正确方向的形状，否则它将是内向的。多边形的端点不重复。

目标是 Geometry Script Library Mesh Primitive Functions

## 图示

![](/uploads/projects/ue-bluprint/20221218-19125952.png)

## Inputs

在。执行。

目标网格。动态网格对象参考。

原始选项。Geometry Script Primitive Options 结构。

改造：改造。

多边形顶点。矢量二维结构的阵列。

高度。Float（单精度）。

高度步数。整数。

上限。布尔值。

原产地。EGeometryScriptPrimitiveOriginMode 枚举。

调试。Geometry Script Debug Object Reference.

## Outputs

出：执行。

目标网格。动态网格对象参考。多边形的方向应该是逆时针的，以产生一个正确的方向的形状，否则它将是内向的。多边形的端点不重复。

<hr>

Polygon should be oriented counter-clockwise to produce a correctly-oriented shape, otherwise it will be inside-out. Polygon endpoint is not repeated.

Target is Geometry Script Library Mesh Primitive Functions

## 图示

![](/uploads/projects/ue-bluprint/20221218-19125952.png)

## Inputs

In: Exec.

Target Mesh: Dynamic Mesh Object Reference.

Primitive Options: Geometry Script Primitive Options Structure.

Transform: Transform.

Polygon Vertices: Array of Vector 2D Structures.

Height: Float (single-precision).

Height Steps: Integer.

Capped: Boolean.

Origin: EGeometryScriptPrimitiveOriginMode Enum.

Debug: Geometry Script Debug Object Reference.

## Outputs

Out: Exec.

Target Mesh: Dynamic Mesh Object Reference. Polygon should be oriented counter-clockwise to produce a correctly-oriented shape, otherwise it will be inside-out. Polygon endpoint is not repeated..
