# AddArrayNodefromObjectPath

在给定的结构对象路径名称中添加一个阵列节点到已编辑的图形中。这将导致一个NodeAdded修改事件。

目标是Rig VMController

## 图示

![]($-20221218-20414610.png)

## Inputs

在。执行。

目标。Rig VMController对象参考。

In On Code: ERigVMOpCode Enum.

在CPPT类型。字符串。

在CPPType对象路径中。字符串。

在位。矢量二维结构（按参考）。

在节点名称中。字符串。

设置撤销重做：布尔值。

打印Python命令。布尔值。  

## Outputs

出：执行。

返回值。Rig VMArray Node对象参考。在给定的结构对象路径名称下，将一个阵列节点添加到已编辑的图形中。这将导致一个NodeAdded修改事件。
