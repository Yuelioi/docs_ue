# GetSlotLocation

Returns the position (in world space) of the slot associated to the given claim handle.

Target is Smart Object Subsystem

## 图示

![]($-20221218-20592085.png)

## Inputs

Target: Smart Object Subsystem Object Reference.

Claim Handle: Smart Object Claim Handle Structure (by ref). A valid handle (ClaimHandle.IsValid() returns true) returned by any of the Claim methods..  

## Outputs

Out Slot Location: Vector. Position (in world space) of the slot associated to ClaimHandle..

Return Value: Boolean. Whether the location was found and assigned to 'OutSlotLocation'.

