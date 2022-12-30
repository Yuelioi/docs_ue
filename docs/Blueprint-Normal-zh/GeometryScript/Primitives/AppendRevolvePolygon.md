# AppendRevolvePolygon

在旋转多边形的坐标系中，+X是朝向旋转甜甜圈的 "外面"，而+Y是 "向上"（即本地空间的+Z）。多边形的方向应该是逆时针的，以产生一个正确方向的形状，否则它将是内向的。多边形的端点是不重复的。

目标是Geometry Script Library Mesh Primitive Functions

## 图示

![]($-20221218-19125721.png)

## Inputs

在。执行。

目标网格。动态网格对象参考。

原始选项。Geometry Script Primitive Options结构。

改造：改造。

多边形顶点。矢量二维结构的阵列。

Revolve选项。Geometry Script Revolve Options结构。

半径。Float（单精度）。

步数。整数。

调试。Geometry Script Debug Object Reference.  

## Outputs

出：执行。

目标网格。动态网格对象参考。在旋转多边形的坐标系中，+X是朝向旋转甜甜圈的 "外面"，而+Y是 "向上"（即本地空间中的+Z）。多边形的方向应该是逆时针的，以产生一个正确方向的形状，否则它将是内向的。多边形的端点不重复。
