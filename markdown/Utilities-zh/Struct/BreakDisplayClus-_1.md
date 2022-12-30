# BreakDisplayClus-_1

添加一个打破'DisplayClusterConfigurationFramePostProcess_OutputRemap'的节点到其成员字段中

## 图示

![]($-20221218-14335909.png)

## Inputs

Display Cluster Configuration Frame Post Process Output Remap。显示群集配置框架后进程输出重映射结构（通过参考）。 

## Outputs

启用输出重映射。布尔值。启用：。启用或禁用输出重映射。

数据来源。EDisplayClusterConfigurationFramePostProcess_OutputRemapSource枚举。数据源：。选择静态网格或外部文件设置作为输出重映射的来源。

静态网格。静态网格对象参考。Static Mesh:.静态网格。当数据源设置为静态网格时，用于输出重映射的静态网格参考。

网格组件名称。字符串。网格组件名称：。当数据源设置为Mesh Component时，用于输出重映射的MeshComponent引用（ProceduralMeshComponent或StaticMeshComponent）。

External File：字符串。External File:（外部文件）。当数据源设置为文件时用于输出重映射的外部.obj文件。
