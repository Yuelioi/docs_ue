# DeleteSelectedElements

从给定的选择集中删除任何可以被删除的元素。注意：在内部，这只是对UTypedElementSelectionSet::GetNormalizedSelection的结果调用DeleteNormalizedElements。

目标是类型化的元素 共同行动

## 图示

![]($-20221218-21160885.png)

## Inputs

在。执行。

目标。类型化的元素共同行动对象参考。

选择集。类型化的元素选择集对象参考。

世界。世界对象参考。

删除选项。类型化的元素删除选项结构（通过参考）。  

## Outputs

出：执行。

返回值。布尔值。从给定的选择集中删除任何可以删除的元素。@注意 在内部，这只是对UTypedElementSelectionSet::GetNormalizedSelection的结果调用DeleteNormalizedElements。

Delete any elements from the given selection set that can be deleted.. Note: Internally this just calls DeleteNormalizedElements on the result of UTypedElementSelectionSet::GetNormalizedSelection.

Target is Typed Element Common Actions

## 图示

![]($-20221218-21160885.png)

## Inputs

In: Exec.

Target: Typed Element Common Actions Object Reference.

Selection Set: Typed Element Selection Set Object Reference.

World: World Object Reference.

Deletion Options: Typed Element Deletion Options Structure (by ref).  

## Outputs

Out: Exec.

Return Value: Boolean. Delete any elements from the given selection set that can be deleted.. @note Internally this just calls DeleteNormalizedElements on the result of UTypedElementSelectionSet::GetNormalizedSelection..

