# AddVariableNodefromObjectPath

在给定的结构对象路径名下的编辑图中添加一个变量节点。变量代表函数的本地工作状态，可以从（bIsGetter == true）读取或写入（bIsGetter == false）。这将导致一个NodeAdded修改事件。

目标是Rig VMController

## 图示

![]($-20221218-20421852.png)

## Inputs

在。执行。

目标。Rig VMController对象参考。

在变量名称中。名称（通过参考）。

在CPPT类型。字符串。

在CPPType对象路径中。字符串。

是获取器。布尔值。

在默认值中。字符串。

在位。矢量二维结构（按参考）。

在节点名称中。字符串。

设置撤销重做：布尔值。

打印Python命令。布尔值。  

## Outputs

出：执行。

返回值。Rig VMVariable Node对象参考。在编辑的图形中添加一个变量节点，给定一个结构对象路径名称。变量代表函数的本地工作状态，可以从（bIsGetter == true）读取或写入（bIsGetter == false）。这将导致一个NodeAdded修改事件。

Adds a Variable Node to the edited Graph given a struct object path name.. Variables represent local work state for the function and. can be read from (bIsGetter == true) or written to (bIsGetter == false).. This causes a NodeAdded modified event.

Target is Rig VMController

## 图示

![]($-20221218-20421852.png)

## Inputs

In: Exec.

Target: Rig VMController Object Reference.

In Variable Name: Name (by ref).

In CPPType: String.

In CPPType Object Path: String.

Is Getter: Boolean.

In Default Value: String.

In Position: Vector 2D Structure (by ref).

In Node Name: String.

Setup Undo Redo: Boolean.

Print Python Command: Boolean.  

## Outputs

Out: Exec.

Return Value: Rig VMVariable Node Object Reference. Adds a Variable Node to the edited Graph given a struct object path name.. Variables represent local work state for the function and. can be read from (bIsGetter == true) or written to (bIsGetter == false).. This causes a NodeAdded modified event..

