# BindPintoVariable

将一个针脚绑定到一个变量上（或者根据 NAME_NONE 删除绑定）。这将导致一个 PinBoundVariableChanged 修改事件。

目标是 Rig VMController

## 图示

![](/uploads/projects/ue-bluprint/20221218-20421974.png)

## Inputs

在。执行。

目标。Rig VMController 对象参考。

在销路：字符串。

在新绑定的变量路径。字符串。

设置撤销重做：布尔值。

打印 Python 命令。布尔值。

## Outputs

出：执行。

返回值。布尔值。将一个针脚绑定到一个变量上（或者根据 NAME_NONE 删除绑定）。这将导致一个 PinBoundVariableChanged 修改事件。

<hr>

Binds a pin to a variable (or removes the binding given NAME_None). This causes a PinBoundVariableChanged modified event.

Target is Rig VMController

## 图示

![](/uploads/projects/ue-bluprint/20221218-20421974.png)

## Inputs

In: Exec.

Target: Rig VMController Object Reference.

In Pin Path: String.

In New Bound Variable Path: String.

Setup Undo Redo: Boolean.

Print Python Command: Boolean.

## Outputs

Out: Exec.

Return Value: Boolean. Binds a pin to a variable (or removes the binding given NAME_None). This causes a PinBoundVariableChanged modified event..
