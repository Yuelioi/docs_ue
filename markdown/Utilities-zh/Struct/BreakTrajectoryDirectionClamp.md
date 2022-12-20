# BreakTrajectoryDirectionClamp

Adds a node that breaks a 'TrajectoryDirectionClamp' into its member fields

## 图示

![]($-20221218-14444974.png)

## Inputs

Trajectory Direction Clamp: Trajectory Direction Clamp Structure (by ref).  

## Outputs

Direction: Vector. Direction:. Target clamped direction for an incoming source direction.

Angle Treshold Degrees: Float (single-precision). Angle Treshold Degrees:. Target clamped directions will be applied to any source direction within this angle boundary.

