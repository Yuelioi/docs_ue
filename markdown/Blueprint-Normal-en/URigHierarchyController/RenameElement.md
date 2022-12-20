# RenameElement

Renames an existing element in the hierarchy

Target is Rig Hierarchy Controller

## 图示

![]($-20221218-21205463.png)

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

