# ComputeFloorDistance

Compute distance to the floor from bottom sphere of capsule and store the result in FloorResult.. This distance is the swept distance of the capsule to the first point impacted by the lower hemisphere, or distance from the bottom of the capsule in the case of a line trace.. This function does not care if collision is disabled on the capsule (unlike FindFloor).

Target is Character Movement Component

## 图示

![]($-20221218-20180728.png)

## Inputs

Target: Character Movement Component Object Reference.

Capsule Location: Vector. Location where the capsule sweep should originate.

Line Distance: Float (single-precision). If non-zero, max distance to test for a simple line check from the capsule base. Used only if the sweep test fails to find a walkable floor, and only returns a valid result if the impact normal is a walkable normal..

Sweep Distance: Float (single-precision). If non-zero, max distance to use when sweeping a capsule downwards for the test. MUST be greater than or equal to the line distance..

Sweep Radius: Float (single-precision). The radius to use for sweep tests. Should be <= capsule radius..  

## Outputs

Floor Result: Find Floor Result Structure. Result of the floor check.

