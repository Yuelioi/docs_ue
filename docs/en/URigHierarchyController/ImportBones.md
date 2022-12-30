# ImportBones

Imports an existing skeleton to the hierarchy

Target is Rig Hierarchy Controller

## 图示

![]($-20221218-21204444.png)

## Inputs

In: Exec.

Target: Rig Hierarchy Controller Object Reference.

In Skeleton: Skeleton Object Reference. The skeleton to import.

In Name Space: Name. The namespace to prefix the bone names with.

Replace Existing Bones: Boolean. If true existing bones will be removed.

Remove Obsolete Bones: Boolean. If true bones non-existent in the skeleton will be removed from the hierarchy.

Select Bones: Boolean. If true the bones will be selected upon import.

Setup Undo: Boolean. If set to true the stack will record the change for undo / redo.

Print Python Command: Boolean. If set to true a python command equivalent to this call will be printed out.  

## Outputs

Out: Exec.

Return Value: Array of Rig Element Key Structures. The keys of the imported elements.

