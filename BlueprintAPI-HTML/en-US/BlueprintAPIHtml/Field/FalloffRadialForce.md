# FalloffRadialForce

FalloffRadialForce. This function will dispatch a command to the physics thread to apply. a linear force from a position in space. The force vector is weaker as. it moves away from the center.

Target is Field System Component

## 图示

![]($-20221218-18594678.png)

## Inputs

In: Exec.

Target: Field System Component Object Reference.

Enable Field: Boolean. Is this force enabled for evaluation..

Center Position: Vector. The origin point of the force.

Falloff Radius: Float (single-precision). Radial influence from the position, positions further away are weaker..

Field Magnitude: Float (single-precision). The size of the linear force..  

## Outputs

Out: Exec.

