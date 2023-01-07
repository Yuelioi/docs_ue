# AddUnitNodefromStructPath

在已编辑的图中添加一个函数/结构节点，给定其结构对象路径名称。UnitNode 代表一个 USTRUCT 上的 RIGVM_METHOD 声明。这将导致一个 NodeAdded 修改事件。

目标是 Rig VMController

## 图示

![](/uploads/projects/ue-bluprint/20221218-20421619.png)

## Inputs

在。执行。

目标。Rig VMController 对象参考。

在脚本结构路径。字符串。

在方法名称中。名称（通过参考）。

在位。矢量二维结构（由参考）。

在节点名称中。字符串。

设置撤销重做：布尔值。

打印 Python 命令。布尔值。

## Outputs

出：执行。

返回值。Rig VMUnit Node Object Reference。在编辑的图中添加一个函数/结构节点，给出其结构对象的路径名称。UnitNode 代表一个 USTRUCT 上的 RIGVM_METHOD 声明。这将导致一个 NodeAdded 修改事件。

<hr>

Adds a Function / Struct Node to the edited Graph given its struct object path name.. UnitNode represent a RIGVM_METHOD declaration on a USTRUCT.. This causes a NodeAdded modified event.

Target is Rig VMController

## 图示

![](/uploads/projects/ue-bluprint/20221218-20421619.png)

## Inputs

In: Exec.

Target: Rig VMController Object Reference.

In Script Struct Path: String.

In Method Name: Name (by ref).

In Position: Vector 2D Structure (by ref).

In Node Name: String.

Setup Undo Redo: Boolean.

Print Python Command: Boolean.

## Outputs

Out: Exec.

Return Value: Rig VMUnit Node Object Reference. Adds a Function / Struct Node to the edited Graph given its struct object path name.. UnitNode represent a RIGVM_METHOD declaration on a USTRUCT.. This causes a NodeAdded modified event..
