# DebugDrawTrajectory

Projects trajectory samples onto a defined set of allowed directions

Target is Motion Trajectory Blueprint Library

## 图示

![]($-20221218-20073189.png)

## Inputs

Actor: Actor Object Reference.

World Transform: Transform (by ref). Input world transform to establish a world-space basis for drawing the trajectory.

Trajectory: Trajectory Sample Range Structure (by ref). Input trajectory range.

Prediction Color: Linear Color Structure. Input prediction color to interpolate sample drawing towards.

History Color: Linear Color Structure. Input historical color to interpolate sample drawing towards.

Arrow Scale: Float (single-precision). Input sample velocity draw scale.

Arrow Size: Float (single-precision). Input sample arrow draw size.

Arrow Thickness: Float (single-precision). Input sample arrow draw thickness.  

## Outputs

