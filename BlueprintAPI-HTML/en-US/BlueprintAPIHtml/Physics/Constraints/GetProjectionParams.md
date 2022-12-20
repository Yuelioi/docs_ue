# GetProjectionParams

Gets projection parameters of the constraint

Target is Constraint Instance Blueprint Library

## 图示

![]($-20221218-20270565.png)

## Inputs

In: Exec.

Accessor: Constraint Instance Accessor Structure (by ref). Constraint accessor to query.  

## Outputs

Out: Exec.

Enable Projection: Boolean. true to enable projection.

Projection Linear Alpha: Float (single-precision). how much linear projection to apply in [0,1] range.

Projection Angular Alpha: Float (single-precision). how much angular projection to apply in [0,1] range.

