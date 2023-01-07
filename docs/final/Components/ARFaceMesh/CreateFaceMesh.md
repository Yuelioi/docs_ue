# CreateFaceMesh

从原始网格数据中创建初始面部网格

目标是苹果 ARKit 面部网格组件

## 图示

![](/uploads/projects/ue-bluprint/20221218-18224358.png)

## Inputs

在。执行。

目标。Apple ARKit Face Mesh Component 对象参考。

顶点。向量数组。顶点：所有顶点位置的缓冲区，用于此网格部分。

Triangles（三角形）。整数数组。索引缓冲区，显示每个三角形的顶点。长度必须是 3 的倍数。

UV0: 矢量 2D 结构数组。每个顶点的纹理坐标的可选数组。如果提供，必须与 Vertices 数组的长度相同。

## Outputs

输出。执行。

<hr>

Create the initial face mesh from raw mesh data

Target is Apple ARKit Face Mesh Component

## 图示

![](/uploads/projects/ue-bluprint/20221218-18224358.png)

## Inputs

In: Exec.

Target: Apple ARKit Face Mesh Component Object Reference.

Vertices: Array of Vectors. Vertex buffer of all vertex positions to use for this mesh section..

Triangles: Array of Integers. Index buffer indicating which vertices make up each triangle. Length must be a multiple of 3..

UV0: Array of Vector 2D Structures. Optional array of texture co-ordinates for each vertex. If supplied, must be same length as Vertices array..

## Outputs

Out: Exec.
