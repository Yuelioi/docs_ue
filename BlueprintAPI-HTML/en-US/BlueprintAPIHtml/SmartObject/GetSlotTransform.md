# GetSlotTransform

Returns the transform (in world space) of the slot associated to the given claim handle.

Target is Smart Object Subsystem

## 图示

![]($-20221218-20592200.png)

## Inputs

Target: Smart Object Subsystem Object Reference.

Claim Handle: Smart Object Claim Handle Structure (by ref). A valid handle (ClaimHandle.IsValid() returns true) returned by any of the Claim methods..  

## Outputs

Out Slot Transform: Transform. Transform (in world space) of the slot associated to ClaimHandle..

Return Value: Boolean. Whether the transform was found and assigned to 'OutSlotTransform'.

