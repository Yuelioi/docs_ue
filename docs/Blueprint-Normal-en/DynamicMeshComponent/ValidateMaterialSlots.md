# ValidateMaterialSlots

Compute the maximum MaterialID on the DynamicMesh, and ensure that Material Slots match.. Pass both arguments as false to just do a check.

Target is Dynamic Mesh Component

## 图示

![]($-20221218-18462535.png)

## Inputs

In: Exec.

Target: Dynamic Mesh Component Object Reference.

Create if Missing: Boolean. if true, add extra (empty) Material Slots to match max MaterialID.

Delete Extra Slots: Boolean. if true, extra Material Slots beyond max MaterialID are removed.  

## Outputs

Out: Exec.

Return Value: Boolean. true if at the end of this function, Material Slot Count == Max MaterialID.

