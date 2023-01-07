# AddRerouteNodeonLink

在已编辑的图上的现有链接上添加一个重路由节点。改道节点可以用来从视觉上改善数据流，它们不需要任何额外的内存，而且是纯粹的。

1.这将导致一个 NodeAdded 修改事件。

目标是 Rig VMController

## 图示

![](/uploads/projects/ue-bluprint/20221218-20420885.png)

## Inputs

在。执行。

目标。Rig VMController 对象参考。

在链接中。Rig VMLink 对象参考。

显示为完整节点。布尔值。

在位。矢量二维结构（按参考）。

在节点名称中。字符串。

设置撤销重做：布尔值。

打印 Python 命令。布尔值。

## Outputs

出：执行。

返回值。Rig VMReroute Node 对象参考。在已编辑的图形中的现有链接上添加一个重路由节点。Reroute Nodes 可以用来直观地改善数据流，它们不需要任何额外的内存，而且是纯粹的。这将导致一个 NodeAdded 修改事件。

<hr>

Adds a Reroute Node on an existing Link to the edited Graph.. Reroute Nodes can be used to visually improve the data flow,. they don't require any additional memory though and are purely

1. This causes a NodeAdded modified event.

Target is Rig VMController

## 图示

![](/uploads/projects/ue-bluprint/20221218-20420885.png)

## Inputs

In: Exec.

Target: Rig VMController Object Reference.

In Link: Rig VMLink Object Reference.

Show as Full Node: Boolean.

In Position: Vector 2D Structure (by ref).

In Node Name: String.

Setup Undo Redo: Boolean.

Print Python Command: Boolean.

## Outputs

Out: Exec.

Return Value: Rig VMReroute Node Object Reference. Adds a Reroute Node on an existing Link to the edited Graph.. Reroute Nodes can be used to visually improve the data flow,. they don't require any additional memory though and are purely: This causes a NodeAdded modified event..
