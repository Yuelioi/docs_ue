# CreateGridMeshSplit

为一个网格生成顶点缓冲区、索引缓冲区和UV，其中每个四边形被分割，UV0上有标准的0-1 UV，UV1上有点采样的texel中心UV。

目标是Kismet程序网格库

## 图示

![]($-20221218-18253913.png)

## Inputs

在。Exec.

Num X：整数。X方向上的顶点数量（必须大于2）。

Num Y：整数。Y方向上的顶点数量（必须大于等于2）。

Grid Spacing（网格间距）。Float（单精度）。每个四边形的大小，以世界为单位。 

## Outputs

输出。执行。

三角形。整数阵列。

顶点。矢量数组。

UVs。矢量二维结构的数组。

UV1s。矢量二维结构的数组。

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

