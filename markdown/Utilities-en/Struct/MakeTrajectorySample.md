# MakeTrajectorySample

Adds a node that create a 'TrajectorySample' from its members

## 图示

![]($-20221218-15034030.png)

## Inputs

Accumulated Seconds: Float (single-precision). Accumulated Seconds:. The relative accumulated time that this sample is associated with. Zero value for instantaneous, negative values for the past, and positive values for the future.

Accumulated Distance: Float (single-precision). Accumulated Distance:. The relative accumulated distance that this trajectory sample is associated with. Zero value for instantaneous, negative values for the past, and positive values for the future.

Position: Vector. Position:. Position relative to the sampled in-motion object.

Local Linear Velocity: Vector. Local Linear Velocity:. Linear velocity relative to the sampled in-motion object.

Local Linear Acceleration: Vector. Local Linear Acceleration:. Linear acceleration relative to the sampled in-motion object.  

## Outputs

Trajectory Sample: Trajectory Sample Structure.

