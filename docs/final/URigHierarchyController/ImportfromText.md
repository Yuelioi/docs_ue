# ImportfromText

将一个文本缓冲区的内容导入到层次结构中。

目标是 Rig Hierarchy 控制器

## 图示

![](/uploads/projects/ue-bluprint/20221218-21204907.png)

## Inputs

在。执行。

目标。Rig Hierarchy Controller 对象参考。

在内容上。字符串。代表要导入的内容的字符串缓冲区。

替换现有的元素。布尔值。如果设置为真，现有的项目将被替换/更新为缓冲区内的内容。

选择新元素。布尔值。如果设置为真，新元素将被选中。

设置撤销。布尔值。如果设置为 "true"，堆栈将记录该变化，以便撤销/重做。

打印 Python 命令。布尔值。

## Outputs

出：执行。

返回值。钻机元素关键结构的数组。

<hr>

Imports the content of a text buffer to the hierarchy

Target is Rig Hierarchy Controller

## 图示

![](/uploads/projects/ue-bluprint/20221218-21204907.png)

## Inputs

In: Exec.

Target: Rig Hierarchy Controller Object Reference.

In Content: String. The string buffer representing the content to import.

Replace Existing Elements: Boolean. If set to true existing items will be replaced / updated with the content in the buffer.

Select New Elements: Boolean. If set to true the new elements will be selected.

Setup Undo: Boolean. If set to true the stack will record the change for undo / redo.

Print Python Commands: Boolean.

## Outputs

Out: Exec.

Return Value: Array of Rig Element Key Structures.
