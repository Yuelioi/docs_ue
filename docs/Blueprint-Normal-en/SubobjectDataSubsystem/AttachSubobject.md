# AttachSubobject

Add the given subobject to a new owner. This will remove the subobject from its previous. owner if necessary.

Target is Subobject Data Subsystem

## 图示

![]($-20221218-21053957.png)

## Inputs

In: Exec.

Target: Subobject Data Subsystem Object Reference.

Owner Handle: Subobject Data Handle Structure (by ref). The new owner to attach to.

Child to Add Handle: Subobject Data Handle Structure (by ref). Handle to the subobject that will become a child of the owner.  

## Outputs

Out: Exec.

Return Value: Boolean. true if the child was added successfully.

