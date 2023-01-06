# AddVariableNode

在编辑的图中添加一个变量节点。变量代表函数的局部工作状态，可以被读出和写入。这将导致一个NodeAdded修改事件。

目标是Rig VMController

## 图示

![]($-20221218-20421733.png)

## Inputs

在。执行。

目标。Rig VMController对象参考。

在变量名称中。名称（通过参考）。

在CPPT类型。字符串。

在CPPT类型对象中。对象参考。

是Getter。布尔值。

在默认值中。字符串。

在位。矢量二维结构（按参考）。

在节点名称中。字符串。

设置撤销重做：布尔值。

打印Python命令。布尔值。  

## Outputs

出：执行。

返回值。Rig VMVariable Node Object Reference。在编辑的图形中添加一个变量节点。变量代表函数的本地工作状态，可以被读出和写入。这将导致一个NodeAdded修改事件。

Adds a Variable Node to the edited Graph.. Variables represent local work state for the function and. can be read from and written to.. This causes a NodeAdded modified event.

Target is Rig VMController

## 图示

![]($-20221218-20421733.png)

## Inputs

In: Exec.

Target: Rig VMController Object Reference.

In Variable Name: Name (by ref).

In CPPType: String.

In CPPType Object: Object Reference.

Is Getter: Boolean.

In Default Value: String.

In Position: Vector 2D Structure (by ref).

In Node Name: String.

Setup Undo Redo: Boolean.

Print Python Command: Boolean.  

## Outputs

Out: Exec.

Return Value: Rig VMVariable Node Object Reference. Adds a Variable Node to the edited Graph.. Variables represent local work state for the function and. can be read from and written to.. This causes a NodeAdded modified event..

