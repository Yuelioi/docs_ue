# ImportfromText

Imports the content of a text buffer to the hierarchy

Target is Rig Hierarchy Controller

## 图示

![]($-20221218-21204907.png)

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

