# SetParent

Sets a new parent to an element. For elements that allow more than one parent the parent list will be replaced.

Target is Rig Hierarchy Controller

## 图示

![]($-20221218-21205928.png)

## Inputs

In: Exec.

Target: Rig Hierarchy Controller Object Reference.

In Child: Rig Element Key Structure. The key of the element to set the parent for.

In Parent: Rig Element Key Structure. The key of the new parent to set.

Maintain Global Transform: Boolean. If set to true the child will stay in the same place spatially, otherwise it will maintain it's local transform (and potential move)..

Setup Undo: Boolean. If set to true the stack will record the change for undo / redo.

Print Python Command: Boolean. If set to true a python command equivalent to this call will be printed out.  

## Outputs

Out: Exec.

Return Value: Boolean. Returns true if successful..

