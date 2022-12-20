# MakeAddNewSubobjectParams

Adds a node that create a 'AddNewSubobjectParams' from its members

## 图示

![]($-20221218-14462683.png)

## Inputs

Parent Handle: Subobject Data Handle Structure. Parent Handle.

New Class: Object Class Reference. New Class:. The class of the new subobject that will be added.

Blueprint Context: Blueprint Object Reference. Blueprint Context:. Pointer to the blueprint context that this subobject is in. If this is null, it is assumed that. this subobject is being added to an instance..

Skip Mark Blueprint Modified: Boolean. Skip Mark Blueprint Modified:. Optionally skip marking this blueprint as modified (e.g. if we're handling that externally.

Conform Transform To Parent: Boolean. Conform Transform to Parent:. Whether the newly created component should keep its transform, or conform it to its parent.  

## Outputs

Add New Subobject Params: Add New Subobject Params Structure.

