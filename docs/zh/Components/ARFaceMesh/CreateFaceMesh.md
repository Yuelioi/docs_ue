# CreateFaceMesh

从原始网格数据中创建初始面部网格

目标是苹果ARKit面部网格组件

## 图示

![]($-20221218-18224358.png)

## Inputs

在。执行。

目标。Apple ARKit Face Mesh Component 对象参考。

顶点。向量数组。顶点：所有顶点位置的缓冲区，用于此网格部分。

Triangles（三角形）。整数数组。索引缓冲区，显示每个三角形的顶点。长度必须是3的倍数。

UV0: 矢量2D结构数组。每个顶点的纹理坐标的可选数组。如果提供，必须与Vertices数组的长度相同。 

## Outputs

输出。执行。
