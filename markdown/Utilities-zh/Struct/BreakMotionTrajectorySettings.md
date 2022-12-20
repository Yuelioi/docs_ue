# BreakMotionTrajectorySettings

Adds a node that breaks a 'MotionTrajectorySettings' into its member fields

## 图示

![]($-20221218-14401227.png)

## Inputs

Motion Trajectory Settings: Motion Trajectory Settings Structure (by ref).  

## Outputs

Domain: Bitmask Integer. Domain:. Trajectory mask for specifying a time and/or distance domain. Default: Time Domain of 2.0 seconds.

Seconds: Float (single-precision). Seconds:. Sample time horizon.

Distance: Float (single-precision). Distance:. Sample distance horizon.

