# DuplicateSelectedElements

从给定的选择集中复制任何可以复制的元素。注意：在内部，这只是对 UTypedElementSelectionSet::GetNormalizedSelection 的结果调用 DuplicateNormalizedElements。

目标是类型化的元素 共同行动

## 图示

![](/uploads/projects/ue-bluprint/20221218-21161112.png)

## Inputs

在。执行。

目标。类型化的元素共同行动对象参考。

选择集。类型化的元素选择集对象参考。

世界。世界对象参考。

位置偏移。矢量（通过参考）。

## Outputs

出：执行。

返回值。脚本类型的元素处理结构的数组。从给定的选择集中复制任何可以复制的元素。@注意 在内部，这只是对 UTypedElementSelectionSet::GetNormalizedSelection 的结果调用 DuplicateNormalizedElements。

<hr>

Duplicate any elements from the given selection set that can be duplicated.. Note: Internally this just calls DuplicateNormalizedElements on the result of UTypedElementSelectionSet::GetNormalizedSelection.

Target is Typed Element Common Actions

## 图示

![](/uploads/projects/ue-bluprint/20221218-21161112.png)

## Inputs

In: Exec.

Target: Typed Element Common Actions Object Reference.

Selection Set: Typed Element Selection Set Object Reference.

World: World Object Reference.

Location Offset: Vector (by ref).

## Outputs

Out: Exec.

Return Value: Array of Script Typed Element Handle Structures. Duplicate any elements from the given selection set that can be duplicated.. @note Internally this just calls DuplicateNormalizedElements on the result of UTypedElementSelectionSet::GetNormalizedSelection..
