# DeleteSubobjectsfromBlueprint

Attempts to delete the given array of subobjects from their context

Target is Subobject Data Subsystem

## 图示

![]($-20221218-21055032.png)

## Inputs

In: Exec.

Target: Subobject Data Subsystem Object Reference.

Context Handle: Subobject Data Handle Structure (by ref). The owning context of the subobjects that should be removed.

Subobjects to Delete: Array of Subobject Data Handle Structures. Array of subobject handles that should be deleted.

BPContext: Blueprint Object Reference. The blueprint context for the given.  

## Outputs

Out: Exec.

Return Value: Integer. The number of subobjects successfully deleted.

