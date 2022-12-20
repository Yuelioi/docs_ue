# MakePhysicsInputCmd

Adds a node that create a 'PhysicsInputCmd' from its members

## 图示

![]($-20221218-14591259.png)

## Inputs

Force: Vector. Force:. Simple world vector force to be applied.

Torque: Vector. Torque.

Acceleration: Vector. Acceleration.

Angular Acceleration: Vector. Angular Acceleration.

Target Yaw: Float (single-precision). Target Yaw:. Target yaw of character (Degrees). Torque will be applied to rotate character towards target..

Jumped Pressed: Boolean. Jumped Pressed.

Brakes Pressed: Boolean. Brakes Pressed.  

## Outputs

Physics Input Cmd: Physics Input Cmd Structure.

