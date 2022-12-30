# SetLinearPlasticity

Sets Constraint Linear Plasticity properties

Target is Constraint Instance Blueprint Library

## 图示

![]($-20221218-20272545.png)

## Inputs

In: Exec.

Accessor: Constraint Instance Accessor Structure (by ref). Constraint accessor to change.

Linear Plasticity: Boolean. Whether it is possible to reset the target position from the linear displacement.

Linear Plasticity Threshold: Float (single-precision). Delta from target needed to reset the target joint.

Plasticity Type: EConstraintPlasticityType Enum.  

## Outputs

Out: Exec.

