# AddParent

Adds a new parent to an element. For elements that allow only one parent the parent will be replaced (Same as ::SetParent).

Target is Rig Hierarchy Controller

## 图示

![]($-20221218-21203287.png)

## Inputs

In: Exec.

Target: Rig Hierarchy Controller Object Reference.

In Child: Rig Element Key Structure. The key of the element to add the parent for.

In Parent: Rig Element Key Structure. The key of the new parent to add.

In Weight: Float (single-precision). The initial weight to give to the parent.

Maintain Global Transform: Boolean. If set to true the child will stay in the same place spatially, otherwise it will maintain it's local transform (and potential move)..

Setup Undo: Boolean. If set to true the stack will record the change for undo / redo.  

## Outputs

Out: Exec.

Return Value: Boolean. Returns true if successful..

