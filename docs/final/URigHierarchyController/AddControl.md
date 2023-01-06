# AddControl

将一个控件添加到层次结构中

目标是Rig Hierarchy控制器

## 图示

![]($-20221218-21202941.png)

## Inputs

在。执行。

目标。Rig Hierarchy Controller对象参考。

在姓名。名称。新控件的建议名称 - 最终会被命名空间纠正。

在父母。Rig Element Key Structure.新控件的（可选）父控件。如果你不需要一个父级，请传递FRigElementKey()。

在设置中。钻机控制设置结构。控件的所有设置。

在价值。钻机控制值结构。控件要使用的值。

设置撤销。布尔值。如果设置为 "true"，堆栈将记录该变化，以便撤销/重做。  

## Outputs

出：执行。

返回值。Rig Element Key结构。新创建的控件的密钥。

Adds a control to the hierarchy

Target is Rig Hierarchy Controller

## 图示

![]($-20221218-21202941.png)

## Inputs

In: Exec.

Target: Rig Hierarchy Controller Object Reference.

In Name: Name. The suggested name of the new control - will eventually be corrected by the namespace.

In Parent: Rig Element Key Structure. The (optional) parent of the new control. If you don't need a parent, pass FRigElementKey().

In Settings: Rig Control Settings Structure. All of the control's settings.

In Value: Rig Control Value Structure. The value to use for the control.

Setup Undo: Boolean. If set to true the stack will record the change for undo / redo.  

## Outputs

Out: Exec.

Return Value: Rig Element Key Structure. The key for the newly created control..

