# MakeDatasmithRuntimeImportOption-

添加一个节点，从其成员中创建一个 "DatasmithRuntimeImportOptions"。

## 图示

![]($-20221218-14501012.png)

## Inputs

镶嵌选项。Datasmith Tessellation Options结构。镶嵌选项：。用于CAD导入的细分化选项。

构建层次结构。EBuildHierarchyMethod Enum.构建层次结构：。表示是否应该建立一个角色的层次结构。在建立层次结构的情况下，可以对其进行简化以尽量减少创建的角色数量。默认情况下，会建立一个简化的层次结构。

建立碰撞。ECollisionEnabled Enum.构建碰撞：。指明组件的碰撞类型。默认设置为ECollisionEnabled::QueryOnly（空间查询，无物理学）。

碰撞类型。ECollisionTraceFlag 枚举。碰撞类型：。表示静态网格的碰撞类型。默认设置为ECollisionTraceFlag::CTF_UseComplexAsSimple。

导入元数据。Boolean.导入元数据：。表示是否应该导入元数据。默认情况下，元数据被导入。  

## Outputs

Datasmith运行时导入选项。Datasmith运行时导入选项的结构。
