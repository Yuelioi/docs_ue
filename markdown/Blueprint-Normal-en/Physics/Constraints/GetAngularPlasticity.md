# GetAngularPlasticity

Sets Constraint Angular Plasticity properties

Target is Constraint Instance Blueprint Library

## 图示

![]($-20221218-20263751.png)

## Inputs

In: Exec.

Accessor: Constraint Instance Accessor Structure (by ref). Constraint accessor to query.  

## Outputs

Out: Exec.

Angular Plasticity: Boolean. Whether it is possible to reset the target angle from the angular displacement.

Angular Plasticity Threshold: Float (single-precision). Degrees needed to reset the rest state of the joint.

