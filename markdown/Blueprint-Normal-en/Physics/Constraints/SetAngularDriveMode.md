# SetAngularDriveMode

Switches the angular drive mode between SLERP and Twist And Swing

Target is Constraint Instance Blueprint Library

## 图示

![]($-20221218-20270792.png)

## Inputs

In: Exec.

Accessor: Constraint Instance Accessor Structure (by ref). Constraint accessor to change.

Drive Mode: EAngularDriveMode Enum. The angular drive mode to use. SLERP uses shortest spherical path, but will not work if any angular constraints are locked. Twist and Swing decomposes the path into the different angular degrees of freedom but may experience gimbal lock.  

## Outputs

Out: Exec.

