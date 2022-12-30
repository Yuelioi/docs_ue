# FalloffUniformForce

FalloffUniformForce. This function will dispatch a command to the physics thread to apply. a linear force in a uniform direction. The force vector is weaker as. it moves away from the center.

Target is Field System Component

## 图示

![]($-20221218-18594793.png)

## Inputs

In: Exec.

Target: Field System Component Object Reference.

Enable Field: Boolean. Is this force enabled for evaluation..

Center Position: Vector. The origin point of the force.

Uniform Direction: Vector. The direction of the linear force.

Falloff Radius: Float (single-precision). Radial influence from the position, positions further away are weaker..

Field Magnitude: Float (single-precision). The size of the linear force..  

## Outputs

Out: Exec.

