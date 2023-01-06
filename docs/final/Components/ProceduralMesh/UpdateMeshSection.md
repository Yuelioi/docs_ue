# UpdateMeshSection

更新这个程序网格组件的一个部分。这比CreateMeshSection快，但不能让你改变拓扑结构。碰撞信息也会被更新。

目标是程序网格组件

## 图示

![]($-20221218-18255196.png)

## Inputs

在。执行。

目标。程序网格组件对象参考。

章节索引。整数。

顶点。矢量数组。顶点缓冲区，该网格段使用的所有顶点位置。

Normals（规范）。向量数组。可选的每个顶点的法线向量数组。如果提供，必须与顶点数组的长度相同。

UV0：向量2D结构数组。每个顶点的纹理坐标的可选数组。如果提供，必须与Vertices数组的长度相同。

UV1：向量二维结构数组。矢量二维结构的数组。

UV2：向量二维结构数组。矢量二维结构数组。

UV3：矢量二维结构数组。

顶点颜色。线性颜色结构的数组。每个顶点的可选颜色数组。如果提供，必须与顶点数组的长度相同。

切线。Proc网格切线结构的数组。可选的每个顶点的切线向量数组。如果提供，必须与Vertices数组的长度相同。 

## Outputs

输出。执行。

Updates a section of this procedural mesh component. This is faster than CreateMeshSection, but does not let you change topology. Collision info is also updated.

Target is Procedural Mesh Component

## 图示

![]($-20221218-18255196.png)

## Inputs

In: Exec.

Target: Procedural Mesh Component Object Reference.

Section Index: Integer.

Vertices: Array of Vectors. Vertex buffer of all vertex positions to use for this mesh section..

Normals: Array of Vectors. Optional array of normal vectors for each vertex. If supplied, must be same length as Vertices array..

UV0: Array of Vector 2D Structures. Optional array of texture co-ordinates for each vertex. If supplied, must be same length as Vertices array..

UV1: Array of Vector 2D Structures.

UV2: Array of Vector 2D Structures.

UV3: Array of Vector 2D Structures.

Vertex Colors: Array of Linear Color Structures. Optional array of colors for each vertex. If supplied, must be same length as Vertices array..

Tangents: Array of Proc Mesh Tangent Structures. Optional array of tangent vector for each vertex. If supplied, must be same length as Vertices array..  

## Outputs

Out: Exec.

