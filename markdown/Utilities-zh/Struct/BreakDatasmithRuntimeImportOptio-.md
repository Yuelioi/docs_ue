# BreakDatasmithRuntimeImportOptio-

添加一个节点，将'DatasmithRuntimeImportOptions'分解成其成员字段

## 图示

![]($-20221218-14334244.png)

## Inputs

Datasmith Runtime Import Options。Datasmith Runtime Import Options结构（通过引用）。 

## Outputs

镶嵌选项（Tessellation Options）。Datasmith Tessellation Options结构。Tessellation Options: 镶嵌选项。用于CAD导入的细分化选项。

Build Hierarchy（构建层次）。EBuildHierarchyMethod枚举。构建层次结构:. 表示是否应该建立一个演员的层次结构。在建立层次结构的情况下，可以对其进行简化以尽量减少创建的角色数量。默认情况下，会建立一个简化的层次结构。

构建碰撞。ECollisionEnabled枚举。构建碰撞：。表示组件的碰撞类型。默认设置为ECollisionEnabled::QueryOnly（空间查询，没有物理学）。

碰撞类型。ECollisionTraceFlag Enum。碰撞类型：。表示静态网格的碰撞类型。默认设置为ECollisionTraceFlag::CTF_UseComplexAsSimple。

导入元数据。布尔值。导入元数据：。指示是否应该导入元数据。默认情况下，元数据被导入。
