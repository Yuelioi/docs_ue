# MultiCapsuleTraceForObjects

Sweeps through a capsule along the given line and returns all hits encountered. This finds only objects of the type specified by ObjectTypes.

The target is the Kismet system library

## 图示

![]($-20221218-18192760.png)

## Inputs

in. Execute.

Start. Vector. The start of the line segment.

End. vector. The end of the line segment.

Radius. float (single precision). The radius of the swept capsule.

Half height. Float (single-precision). The distance from the center of the capsule to the end of the hemisphere.

Object type. array of EObjectTypeQuery enumeration. The array of object types to track.

TrackingComplex: Boolean value. True when testing complex collisions, false when testing simplified collisions.

Ignored actors. Array of actor object references.

Draw debug type. edrawDebugTrace enumeration.

IgnoreSelf: Boolean value.

Trace Color: Linear color structure.

Trace Hit Color: Linear color structure.

DrawTime. Floating point number (single precision). 

## Outputs

Output. Execution: Execution.

Output hits. Array of hit result structures. A list of hits, sorted from start to finish along the track. The blocked hits will be the last hits, if any.

Return value. Boolean value. True if there is a hit, false otherwise.