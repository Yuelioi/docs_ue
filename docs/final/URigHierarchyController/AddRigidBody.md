# AddRigidBody

将一个刚体添加到层次结构中。

目标是Rig Hierarchy控制器

## 图示

![]($-20221218-21203410.png)

## Inputs

在。执行。

目标。Rig Hierarchy Controller对象参考。

在姓名。名称。新刚体的建议名称--最终将由命名空间来纠正。

在父母。刚体元素关键结构。新刚体的（可选）父体。如果你不需要一个父体，请传递FRigElementKey()。

在设置中。刚体的设置结构。刚体的所有设置。

在地方转型中。变换。新刚体的变换--在所提供的父体的空间中。

设置撤销。布尔值。如果设置为 "true"，堆栈将记录该变化，以便撤销/重做。

打印Python命令。布尔值。如果设置为 "true"，相当于此调用的Python命令将被打印出来。  

## Outputs

出：执行。

返回值。刚体元素键结构。新创建的刚体的键。

Adds a rigidbody to the hierarchy

Target is Rig Hierarchy Controller

## 图示

![]($-20221218-21203410.png)

## Inputs

In: Exec.

Target: Rig Hierarchy Controller Object Reference.

In Name: Name. The suggested name of the new rigidbody - will eventually be corrected by the namespace.

In Parent: Rig Element Key Structure. The (optional) parent of the new rigidbody. If you don't need a parent, pass FRigElementKey().

In Settings: Rig Rigid Body Settings Structure. All of the rigidbody's settings.

In Local Transform: Transform. The transform for the new rigidbody - in the space of the provided parent.

Setup Undo: Boolean. If set to true the stack will record the change for undo / redo.

Print Python Command: Boolean. If set to true a python command equivalent to this call will be printed out.  

## Outputs

Out: Exec.

Return Value: Rig Element Key Structure. The key for the newly created rigidbody..

