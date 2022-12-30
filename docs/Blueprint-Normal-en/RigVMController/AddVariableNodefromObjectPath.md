# AddVariableNodefromObjectPath

Adds a Variable Node to the edited Graph given a struct object path name.. Variables represent local work state for the function and. can be read from (bIsGetter == true) or written to (bIsGetter == false).. This causes a NodeAdded modified event.

Target is Rig VMController

## 图示

![]($-20221218-20421852.png)

## Inputs

In: Exec.

Target: Rig VMController Object Reference.

In Variable Name: Name (by ref).

In CPPType: String.

In CPPType Object Path: String.

Is Getter: Boolean.

In Default Value: String.

In Position: Vector 2D Structure (by ref).

In Node Name: String.

Setup Undo Redo: Boolean.

Print Python Command: Boolean.  

## Outputs

Out: Exec.

Return Value: Rig VMVariable Node Object Reference. Adds a Variable Node to the edited Graph given a struct object path name.. Variables represent local work state for the function and. can be read from (bIsGetter == true) or written to (bIsGetter == false).. This causes a NodeAdded modified event..

