# AddInjectedNodefromStructPath

Adds a Function / Struct Node to the edited Graph as an injected node. UnitNode represent a RIGVM_METHOD declaration on a USTRUCT.. This causes a NodeAdded modified event.

Target is Rig VMController

## 图示

![]($-20221218-20420030.png)

## Inputs

In: Exec.

Target: Rig VMController Object Reference.

In Pin Path: String.

As Input: Boolean.

In Script Struct Path: String.

In Method Name: Name (by ref).

In Input Pin Name: Name (by ref).

In Output Pin Name: Name (by ref).

In Node Name: String.

Setup Undo Redo: Boolean.  

## Outputs

Out: Exec.

Return Value: Rig VMInjection Info Object Reference. Adds a Function / Struct Node to the edited Graph as an injected node. UnitNode represent a RIGVM_METHOD declaration on a USTRUCT.. This causes a NodeAdded modified event..

