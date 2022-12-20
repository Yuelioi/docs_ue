# FindHandleforObject

Attempt to find an existing handle for the given object.

Target is Subobject Data Subsystem

## 图示

![]($-20221218-21055388.png)

## Inputs

Target: Subobject Data Subsystem Object Reference.

Context: Subobject Data Handle Structure (by ref). The context that the object to find is within.

Object to Find: Object Reference. The object that you want to find the handle for within the context.

BPContext: Blueprint Object Reference.  

## Outputs

Return Value: Subobject Data Handle Structure. FSubobjectDataHandle The subobject handle for the object, Invalid handle if not found..

