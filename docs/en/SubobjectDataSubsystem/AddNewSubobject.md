# AddNewSubobject

Add a new subobject as a child to the given parent object

Target is Subobject Data Subsystem

## 图示

![]($-20221218-21053842.png)

## Inputs

In: Exec.

Target: Subobject Data Subsystem Object Reference.

Params: Add New Subobject Params Structure (by ref). Options to consider when adding this subobject.  

## Outputs

Out: Exec.

Fail Reason: Text.

Return Value: Subobject Data Handle Structure. FSubobjectDataHandle Handle to the newly created subobject, Invalid handle if creation failed.

