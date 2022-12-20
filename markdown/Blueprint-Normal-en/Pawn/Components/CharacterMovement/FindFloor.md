# FindFloor

Sweeps a vertical trace to find the floor for the capsule at the given location. Will attempt to perch if ShouldComputePerchResult() returns true for the downward sweep result.. No floor will be found if collision is disabled on the capsule!

Target is Character Movement Component

## 图示

![]($-20221218-20180961.png)

## Inputs

Target: Character Movement Component Object Reference.

Capsule Location: Vector. Location where the capsule sweep should originate.  

## Outputs

Floor Result: Find Floor Result Structure. Result of the floor check.

