# IsValidRename

Returns true if the given new text is a valid option to rename the. subobject with the given handle. Populates the OutErrorMessage if. it is not valid.

Target is Subobject Data Subsystem

## 图示

![]($-20221218-21055871.png)

## Inputs

Target: Subobject Data Subsystem Object Reference.

Handle: Subobject Data Handle Structure (by ref). Handle to the subobject that is being checked.

In New Text: Text (by ref). The new name that is desired.  

## Outputs

Out Error Message: Text. The reasoning for an invalid name.

Return Value: Boolean. True if the rename is valid.

