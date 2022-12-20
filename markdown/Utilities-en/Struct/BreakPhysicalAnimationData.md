# BreakPhysicalAnimationData

Adds a node that breaks a 'PhysicalAnimationData' into its member fields

## 图示

![]($-20221218-14410532.png)

## Inputs

Physical Animation Data: Physical Animation Data Structure (by ref).  

## Outputs

Is Local Simulation: Boolean. Is Local Simulation:. Whether the drive targets are in world space or local.

Orientation Strength: Float (single-precision). Orientation Strength:. The strength used to correct orientation error.

Angular Velocity Strength: Float (single-precision). Angular Velocity Strength:. The strength used to correct angular velocity error.

Position Strength: Float (single-precision). Position Strength:. The strength used to correct linear position error. Only used for non-local simulation.

Velocity Strength: Float (single-precision). Velocity Strength:. The strength used to correct linear velocity error. Only used for non-local simulation.

Max Linear Force: Float (single-precision). Max Linear Force:. The max force used to correct linear errors.

Max Angular Force: Float (single-precision). Max Angular Force:. The max force used to correct angular errors.

