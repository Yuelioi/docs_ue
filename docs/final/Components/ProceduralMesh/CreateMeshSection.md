# CreateMeshSection

为这个程序网格组件创建/替换一个部分。

目标是程序性网格组件

## 图示

![](/uploads/projects/ue-bluprint/20221218-18254257.png)

## Inputs

在。执行。

目标。程序网格组件对象参考。

章节索引。整数。要创建或替换的部分的索引。

顶点。矢量数组。网格断面的所有顶点的缓冲区。

Triangles（三角形）。整数阵列。索引缓冲区，显示每个三角形的顶点。长度必须是 3 的倍数。

Normals（规范）。矢量数组。每个顶点的法线向量的可选数组。如果提供，必须与 Vertices 数组的长度相同。

UV0: 矢量 2D 结构数组。每个顶点的纹理坐标的可选数组。如果提供，必须与 Vertices 数组的长度相同。

UV1：向量二维结构数组。矢量二维结构的数组。

UV2：向量二维结构数组。矢量二维结构数组。

UV3：矢量二维结构数组。

顶点颜色。线性颜色结构的数组。每个顶点的可选颜色数组。如果提供，必须与顶点数组的长度相同。

切线。Proc 网格切线结构的数组。可选的每个顶点的切线向量数组。如果提供，必须与 Vertices 数组的长度相同。

创建碰撞。布尔值。表示是否要为这个部分创建碰撞。这将增加大量的成本。

## Outputs

输出。执行。

<hr>

Create/replace a section for this procedural mesh component.

Target is Procedural Mesh Component

## 图示

![](/uploads/projects/ue-bluprint/20221218-18254257.png)

## Inputs

In: Exec.

Target: Procedural Mesh Component Object Reference.

Section Index: Integer. Index of the section to create or replace..

Vertices: Array of Vectors. Vertex buffer of all vertex positions to use for this mesh section..

Triangles: Array of Integers. Index buffer indicating which vertices make up each triangle. Length must be a multiple of 3..

Normals: Array of Vectors. Optional array of normal vectors for each vertex. If supplied, must be same length as Vertices array..

UV0: Array of Vector 2D Structures. Optional array of texture co-ordinates for each vertex. If supplied, must be same length as Vertices array..

UV1: Array of Vector 2D Structures.

UV2: Array of Vector 2D Structures.

UV3: Array of Vector 2D Structures.

Vertex Colors: Array of Linear Color Structures. Optional array of colors for each vertex. If supplied, must be same length as Vertices array..

Tangents: Array of Proc Mesh Tangent Structures. Optional array of tangent vector for each vertex. If supplied, must be same length as Vertices array..

Create Collision: Boolean. Indicates whether collision should be created for this section. This adds significant cost..

## Outputs

Out: Exec.
