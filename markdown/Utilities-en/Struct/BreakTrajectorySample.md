# BreakTrajectorySample

Adds a node that breaks a 'TrajectorySample' into its member fields

## 图示

![]($-20221218-14445061.png)

## Inputs

Trajectory Sample: Trajectory Sample Structure (by ref).  

## Outputs

Accumulated Seconds: Float (single-precision). Accumulated Seconds:. The relative accumulated time that this sample is associated with. Zero value for instantaneous, negative values for the past, and positive values for the future.

Accumulated Distance: Float (single-precision). Accumulated Distance:. The relative accumulated distance that this trajectory sample is associated with. Zero value for instantaneous, negative values for the past, and positive values for the future.

Position: Vector. Position:. Position relative to the sampled in-motion object.

Local Linear Velocity: Vector. Local Linear Velocity:. Linear velocity relative to the sampled in-motion object.

Local Linear Acceleration: Vector. Local Linear Acceleration:. Linear acceleration relative to the sampled in-motion object.

