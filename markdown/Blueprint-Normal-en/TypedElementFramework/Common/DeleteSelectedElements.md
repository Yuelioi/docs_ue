# DeleteSelectedElements

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

