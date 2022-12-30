# GetLinearLimits

Gets Constraint Linear Motion Ranges

Target is Constraint Instance Blueprint Library

## 图示

![]($-20221218-20265376.png)

## Inputs

In: Exec.

Accessor: Constraint Instance Accessor Structure (by ref). Constraint accessor to query.  

## Outputs

Out: Exec.

XMotion: ELinearConstraintMotion Enum. Type of motion along the X axis.

YMotion: ELinearConstraintMotion Enum. Type of motion along the Y axis.

ZMotion: ELinearConstraintMotion Enum. Type of motion along the Z axis.

Limit: Float (single-precision). linear limit applied to all axis.

