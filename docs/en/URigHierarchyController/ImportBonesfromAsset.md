# ImportBonesfromAsset

Imports an existing skeleton to the hierarchy

Target is Rig Hierarchy Controller

## 图示

![]($-20221218-21204565.png)

## Inputs

In: Exec.

Target: Rig Hierarchy Controller Object Reference.

In Asset Path: String. The path to the uasset to import from.

In Name Space: Name. The namespace to prefix the bone names with.

Replace Existing Bones: Boolean. If true existing bones will be removed.

Remove Obsolete Bones: Boolean. If true bones non-existent in the skeleton will be removed from the hierarchy.

Select Bones: Boolean. If true the bones will be selected upon import.

Setup Undo: Boolean. If set to true the stack will record the change for undo / redo.  

## Outputs

Out: Exec.

Return Value: Array of Rig Element Key Structures. The keys of the imported elements.

