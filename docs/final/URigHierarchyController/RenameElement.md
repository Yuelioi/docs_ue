# RenameElement

重命名层次结构中的一个现有元素

目标是 Rig Hierarchy 控制器

## 图示

![](/uploads/projects/ue-bluprint/20221218-21205463.png)

## Inputs

在。执行。

目标。Rig Hierarchy Controller 对象参考。

在元素中。Rig Element Key Structure.要重命名的元素的键。

在姓名。名称。为该元素设置的新名称。

设置撤销。布尔值。如果设置为 "true"，堆栈将记录该变化，以便撤销/重做。

打印 Python 命令。布尔值。如果设置为 "true"，相当于此调用的 Python 命令将被打印出来。

清除选择。布尔值。如果重命名后应清除选择，则为真。

## Outputs

出：执行。

返回值。Rig Element Key 结构。返回用于该元素的新元素密钥。

<hr>

Renames an existing element in the hierarchy

Target is Rig Hierarchy Controller

## 图示

![](/uploads/projects/ue-bluprint/20221218-21205463.png)

## Inputs

In: Exec.

Target: Rig Hierarchy Controller Object Reference.

In Element: Rig Element Key Structure. The key of the element to rename.

In Name: Name. The new name to set for the element.

Setup Undo: Boolean. If set to true the stack will record the change for undo / redo.

Print Python Command: Boolean. If set to true a python command equivalent to this call will be printed out.

Clear Selection: Boolean. True if the selection should be cleared after a rename.

## Outputs

Out: Exec.

Return Value: Rig Element Key Structure. Returns the new element key used for the element.
