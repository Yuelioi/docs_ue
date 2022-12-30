# ImportCurves

Imports all curves from a skeleton to the hierarchy

Target is Rig Hierarchy Controller

## 图示

![]($-20221218-21204680.png)

## Inputs

In: Exec.

Target: Rig Hierarchy Controller Object Reference.

In Skeleton: Skeleton Object Reference. The skeleton to import the curves from.

In Name Space: Name. The namespace to prefix the bone names with.

Select Curves: Boolean. If true the curves will be selected upon import.

Setup Undo: Boolean. If set to true the stack will record the change for undo / redo.

Print Python Command: Boolean.  

## Outputs

Out: Exec.

Return Value: Array of Rig Element Key Structures. The keys of the imported elements.

