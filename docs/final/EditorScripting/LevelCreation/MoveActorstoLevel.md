# MoveActorstoLevel

将指定的演员列表移动到指定的流媒体级别。新的演员将被选中

目标是编辑水平的利用

## 图示

![](/uploads/projects/ue-bluprint/20221218-18503315.png)

## Inputs

在。执行。

要移动的演员：演员对象参考数组。要移动的演员列表。

Dest Streaming Level:层流对象参考。当前世界的目标流层，将演员转移到那里。

关于引用的警告。布尔值。是否对被引用的演员显示模式警告，这些演员在被移动后可能不再起作用。

关于重命名的警告。布尔值。

## Outputs

出：执行。

返回值。整数。成功转移到新级别的演员的数量。

<hr>

Moves the specified list of actors to the specified streaming level. The new actors will be selected

Target is Editor Level Utils

## 图示

![](/uploads/projects/ue-bluprint/20221218-18503315.png)

## Inputs

In: Exec.

Actors to Move: Array of Actor Object References. List of actors to move.

Dest Streaming Level: Level Streaming Object Reference. The destination streaming level of the current world to move the actors to.

Warn About References: Boolean. Whether or not to show a modal warning about referenced actors that may no longer function after being moved.

Warn About Renaming: Boolean.

## Outputs

Out: Exec.

Return Value: Integer. The number of actors that were successfully moved to the new level.
