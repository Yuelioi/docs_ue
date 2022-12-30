# MakeMeshInstancingSettings

添加一个节点，从其成员中创建一个 "MeshInstancingSettings"。

## 图示

![]($-20221218-14573803.png)

## Inputs

要使用的演员类。Actor Class Reference.要使用的角色类：。用于连接新的静态网格组件实例的角色类。

实例替换阈值。整数。实例替换阈值：。在网格被替换成实例版本之前，需要的静态网格实例数量。

跳过有顶点颜色的网格。布尔值。跳过有顶点颜色的网格：。对于有顶点颜色的网格，是否跳过转换为实例静态网格。实例静态网格不支持每个实例的顶点颜色，所以转换时会丢失这些数据。

使用HLOD卷。Boolean.Use HLODVolumes:（使用HLOD卷）。是否根据其与HLOD卷的交集来分割实例的静态网格组件。

选择实例化组件的类型。Instanced Static Mesh Component类参考。使用的ISMComponent：.是使用Instanced Static Mesh Compoment还是Hierarchical Instanced Static Mesh Compoment。  

## Outputs

网格实例设置。网格实例设置结构。
