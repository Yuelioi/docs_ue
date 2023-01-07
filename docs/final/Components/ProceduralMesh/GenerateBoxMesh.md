# GenerateBoxMesh

根据提供的尺寸，为一个简单的盒子生成顶点和索引缓冲区。同时为每个顶点生成法线、UV 和切线。

目标是 Kismet 程序网格库

## 图示

![](/uploads/projects/ue-bluprint/20221218-18254379.png)

## Inputs

在。执行。

盒子半径。矢量。

## Outputs

Out: 输出。Exec.

顶点。矢量的阵列。

三角形。整数的数组。

法线。矢量数组。

紫外线。矢量 2D 结构数组。

切线。Proc 网格切线结构数组。

<hr>

Generate vertex and index buffer for a simple box, given the supplied dimensions. Normals, UVs and tangents are also generated for each vertex.

Target is Kismet Procedural Mesh Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-18254379.png)

## Inputs

In: Exec.

Box Radius: Vector.

## Outputs

Out: Exec.

Vertices: Array of Vectors.

Triangles: Array of Integers.

Normals: Array of Vectors.

UVs: Array of Vector 2D Structures.

Tangents: Array of Proc Mesh Tangent Structures.
