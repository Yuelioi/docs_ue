# BreakPhysicsInputCmd

Adds a node that breaks a 'PhysicsInputCmd' into its member fields

## 图示

![]($-20221218-14410710.png)

## Inputs

Physics Input Cmd: Physics Input Cmd Structure (by ref).  

## Outputs

Force: Vector. Force:. Simple world vector force to be applied.

Torque: Vector. Torque.

Acceleration: Vector. Acceleration.

Angular Acceleration: Vector. Angular Acceleration.

Target Yaw: Float (single-precision). Target Yaw:. Target yaw of character (Degrees). Torque will be applied to rotate character towards target..

Jumped Pressed: Boolean. Jumped Pressed.

Brakes Pressed: Boolean. Brakes Pressed.

