# SetAngularLimits

Sets COnstraint Angular Motion Ranges

Target is Constraint Instance Blueprint Library

## 图示

![]($-20221218-20271021.png)

## Inputs

In: Exec.

Accessor: Constraint Instance Accessor Structure (by ref). Constraint accessor to change.

Swing 1Motion Type: EAngularConstraintMotion Enum. Type of swing motion ( first axis ).

Swing 1Limit Angle: Float (single-precision). Size of limit in degrees in [0, 180] range.

Swing 2Motion Type: EAngularConstraintMotion Enum. Type of swing motion ( second axis ).

Swing 2Limit Angle: Float (single-precision). Size of limit in degrees in [0, 180] range.

Twist Motion Type: EAngularConstraintMotion Enum. Type of twist motion.

Twist Limit Angle: Float (single-precision). Size of limit in degrees in [0, 180] range.  

## Outputs

Out: Exec.

