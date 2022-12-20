# DeleteSubobjectfromBlueprint

Attempts to delete the given subobject from its blueprint context

Target is Subobject Data Subsystem

## 图示

![]($-20221218-21054800.png)

## Inputs

In: Exec.

Target: Subobject Data Subsystem Object Reference.

Context Handle: Subobject Data Handle Structure (by ref). The owning context of the subobjects that should be removed.

Subobject to Delete: Subobject Data Handle Structure (by ref). The subobject handles that should be deleted.

BPContext: Blueprint Object Reference. The blueprint context for the given.  

## Outputs

Out: Exec.

Return Value: Integer. The number of subobjects successfully deleted.

