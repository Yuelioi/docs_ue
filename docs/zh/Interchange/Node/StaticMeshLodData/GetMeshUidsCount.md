# GetMeshUidsCount

网格UID。它可以是一个场景或一个网格节点UID。如果是一个场景，意味着我们希望Mesh工厂用场景节点的全局变换来烘烤地理载荷。

目标是Interchange Static Mesh Lod Data Node。

## 图示

![]($-20221218-19335910.png)

## Inputs

目标：Interchange Static Mesh Lod Data Node对象参考。

## Outputs

返回值。整数。网格Uids。它可以是一个场景或一个Mesh节点UID。如果是场景，意味着我们希望Mesh工厂用场景节点的全局变换来烘烤地理载荷。