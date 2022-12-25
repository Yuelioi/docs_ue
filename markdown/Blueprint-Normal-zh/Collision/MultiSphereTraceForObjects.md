# MultiSphereTraceForObjects

Sweeps through a sphere along the given line and returns all objects encountered. This finds only objects of the type specified by ObjectTypes.

The target is the Kismet system library

## 图示

![]($-20221218-18193468.png)

## Inputs

in. Execute.

Start. Vector. The start of the line segment.

End. vector. The end of the line segment.

Radius. float (single precision). The radius of the sphere to be scanned.

Object type. array of EObjectTypeQuery enumeration. Array of object types to be traced.

Trace Complex: Boolean value. True to test for complex collisions, false to test for simplified collisions.

Ignored actors. Array of actor object references.

Draw debug type. edrawDebugTrace enumeration.

IgnoreSelf: Boolean value.

Trace Color: Linear color structure.

Trace Hit Color: Linear color structure.

DrawTime. Floating point number (single precision). 

## Outputs

Output. Execution: Execution.

Out Hits: Array of hit result structures. A list of hits, sorted from start to finish along the trace. Blocking hits will be the last hit, if any.

Return Value. Boolean value. True if there is a hit, false otherwise.