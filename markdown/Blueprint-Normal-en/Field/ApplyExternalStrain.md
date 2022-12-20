# ApplyExternalStrain

ApplyExternalStran. This function will dispatch a command to the physics thread to apply. a strain field on a clustered set of geometry. This is used to trigger a. breaking event within the solver.

Target is Field System Component

## 图示

![]($-20221218-18594315.png)

## Inputs

In: Exec.

Target: Field System Component Object Reference.

Enable Field: Boolean. Is this force enabled for evaluation..

Center Position: Vector. The origin point of the force.

Falloff Radius: Float (single-precision). Radial influence from the position, positions further away are weaker..

Field Magnitude: Float (single-precision). The size of the linear force..

Cluster Levels: Integer. Levels of evaluation into the cluster hierarchy..  

## Outputs

Out: Exec.

