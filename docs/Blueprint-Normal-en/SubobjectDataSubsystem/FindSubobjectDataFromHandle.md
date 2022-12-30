# FindSubobjectDataFromHandle

Attempt to find the subobject data for a given handle. OutData will only. be valid if the function returns true.

Target is Subobject Data Subsystem

## 图示

![]($-20221218-21055506.png)

## Inputs

Target: Subobject Data Subsystem Object Reference.

Handle: Subobject Data Handle Structure (by ref). Handle of the subobject data you want to acquire.  

## Outputs

Out Data: Subobject Data Structure. Reference to the subobject data to populate.

Return Value: Boolean. bool true if the data was found.

