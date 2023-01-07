# CreateGridMeshTriangles

为一个四边形网格生成一个索引缓冲区。

目标是 Kismet 程序网格库

## 图示

![](/uploads/projects/ue-bluprint/20221218-18254026.png)

## Inputs

在。执行。

Num X：整数。X 方向的顶点数量（必须大于等于 2）。

Num Y：整数。Y 方向上的顶点数量（必须>=2）。

缠绕。布尔型。对每个四边形生成的指数进行反向缠绕。

## Outputs

输出。执行。

三角形。整数阵列。

<hr>

Generate an index buffer for a grid of quads.

Target is Kismet Procedural Mesh Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-18254026.png)

## Inputs

In: Exec.

Num X: Integer. Number of vertices in X direction (must be >= 2).

Num Y: Integer. Number of vertices in y direction (must be >= 2).

Winding: Boolean. Reverses winding of indices generated for each quad.

## Outputs

Out: Exec.

Triangles: Array of Integers.
