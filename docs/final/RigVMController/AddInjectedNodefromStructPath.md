# AddInjectedNodefromStructPath

将一个函数/结构节点作为一个注入的节点添加到已编辑的图中。UnitNode 代表一个 USTRUCT 上的 RIGVM_METHOD 声明。这将导致一个 NodeAdded 修改事件。

目标是 Rig VMController

## 图示

![](/uploads/projects/ue-bluprint/20221218-20420030.png)

## Inputs

在。执行。

目标。Rig VMController 对象参考。

在销路：字符串。

作为输入。布尔值。

在脚本结构路径。字符串。

在方法名称中。名称（通过参考）。

在输入引脚名称。名称（通过参考）。

在输出引脚名称。名称（通过参考）。

在节点名称中。字符串。

设置撤销重做：布尔值。

## Outputs

出：执行。

返回值。Rig VMInjection 信息对象参考。将一个函数/结构节点作为一个注入的节点添加到已编辑的图中。UnitNode 代表一个 USTRUCT 上的 RIGVM_METHOD 声明。这将导致一个 NodeAdded 修改事件。

<hr>

Adds a Function / Struct Node to the edited Graph as an injected node. UnitNode represent a RIGVM_METHOD declaration on a USTRUCT.. This causes a NodeAdded modified event.

Target is Rig VMController

## 图示

![](/uploads/projects/ue-bluprint/20221218-20420030.png)

## Inputs

In: Exec.

Target: Rig VMController Object Reference.

In Pin Path: String.

As Input: Boolean.

In Script Struct Path: String.

In Method Name: Name (by ref).

In Input Pin Name: Name (by ref).

In Output Pin Name: Name (by ref).

In Node Name: String.

Setup Undo Redo: Boolean.

## Outputs

Out: Exec.

Return Value: Rig VMInjection Info Object Reference. Adds a Function / Struct Node to the edited Graph as an injected node. UnitNode represent a RIGVM_METHOD declaration on a USTRUCT.. This causes a NodeAdded modified event..
