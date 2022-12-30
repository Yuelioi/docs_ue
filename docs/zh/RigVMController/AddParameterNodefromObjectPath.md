# AddParameterNodefromObjectPath

在给定结构对象路径名称的情况下，将参数节点添加到已编辑的图形中。参数代表图形/函数的输入或输出参数。输入参数是常量值/字数。这将导致一个NodeAdded修改事件。

目标是Rig VMController

## 图示

![]($-20221218-20420647.png)

## Inputs

在。执行。

目标。Rig VMController对象参考。

在参数名称中：名称（由参考）。

在CPPT类型。字符串。

在CPPType对象路径中。字符串。

是输入。布尔型。

在默认值中。字符串。

在位。矢量二维结构（按参考）。

在节点名称中。字符串。

设置撤销重做：布尔值。

打印Python命令。布尔值。  

## Outputs

出：执行。

返回值。Rig VMParameter Node Object Reference。在编辑的图形中添加一个参数节点，给定一个结构对象的路径名称。参数代表图形/函数的输入或输出参数。输入参数是常量值/字数。这将导致一个NodeAdded修改事件。
