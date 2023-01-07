# AddCurve

将一条曲线添加到层次结构中

目标是 Rig Hierarchy 控制器

## 图示

![](/uploads/projects/ue-bluprint/20221218-21203051.png)

## Inputs

在。执行。

目标。Rig Hierarchy Controller 对象参考。

在姓名。命名。新曲线的建议名称--最终会被命名空间所纠正。

在值。Float（单精度）。曲线要使用的值。

设置撤销。布尔值。如果设置为 "true"，堆栈将记录该变化，以便撤销/重做。

打印 Python 命令。布尔值。如果设置为 "true"，相当于此调用的 Python 命令将被打印出来。

## Outputs

出：执行。

返回值。Rig Element Key 结构。新建曲线的密钥。

<hr>

Adds a curve to the hierarchy

Target is Rig Hierarchy Controller

## 图示

![](/uploads/projects/ue-bluprint/20221218-21203051.png)

## Inputs

In: Exec.

Target: Rig Hierarchy Controller Object Reference.

In Name: Name. The suggested name of the new curve - will eventually be corrected by the namespace.

In Value: Float (single-precision). The value to use for the curve.

Setup Undo: Boolean. If set to true the stack will record the change for undo / redo.

Print Python Command: Boolean. If set to true a python command equivalent to this call will be printed out.

## Outputs

Out: Exec.

Return Value: Rig Element Key Structure. The key for the newly created curve..
