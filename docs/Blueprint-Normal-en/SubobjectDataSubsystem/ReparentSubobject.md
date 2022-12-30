# ReparentSubobject

Attempts to reparent the given subobject to the new parent

Target is Subobject Data Subsystem

## 图示

![]($-20221218-21060390.png)

## Inputs

In: Exec.

Target: Subobject Data Subsystem Object Reference.

Params: Reparent Subobject Params Structure (by ref).

To Reparent Handle: Subobject Data Handle Structure (by ref). The handle of the subobject that will get moved.  

## Outputs

Out: Exec.

Return Value: Boolean. True if the reparent was successful, false otherwise..

