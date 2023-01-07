# AddArrayNodefromObjectPath

在给定的结构对象路径名称中添加一个阵列节点到已编辑的图形中。这将导致一个 NodeAdded 修改事件。

目标是 Rig VMController

## 图示

![](/uploads/projects/ue-bluprint/20221218-20414610.png)

## Inputs

在。执行。

目标。Rig VMController 对象参考。

In On Code: ERigVMOpCode Enum.

在 CPPT 类型。字符串。

在 CPPType 对象路径中。字符串。

在位。矢量二维结构（按参考）。

在节点名称中。字符串。

设置撤销重做：布尔值。

打印 Python 命令。布尔值。

## Outputs

出：执行。

返回值。Rig VMArray Node 对象参考。在给定的结构对象路径名称下，将一个阵列节点添加到已编辑的图形中。这将导致一个 NodeAdded 修改事件。

<hr>

Adds a Array Node to the edited Graph given a struct object path name.. This causes a NodeAdded modified event.

Target is Rig VMController

## 图示

![](/uploads/projects/ue-bluprint/20221218-20414610.png)

## Inputs

In: Exec.

Target: Rig VMController Object Reference.

In Op Code: ERigVMOpCode Enum.

In CPPType: String.

In CPPType Object Path: String.

In Position: Vector 2D Structure (by ref).

In Node Name: String.

Setup Undo Redo: Boolean.

Print Python Command: Boolean.

## Outputs

Out: Exec.

Return Value: Rig VMArray Node Object Reference. Adds a Array Node to the edited Graph given a struct object path name.. This causes a NodeAdded modified event..
