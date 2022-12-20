# GetAngularDriveMode

Gets the angular drive mode ( SLERP or Twist And Swing)

Target is Constraint Instance Blueprint Library

## 图示

![]($-20221218-20234201.png)

## Inputs

In: Exec.

Accessor: Constraint Instance Accessor Structure (by ref). Constraint accessor to query.  

## Outputs

Out: Exec.

Out Drive Mode: EAngularDriveMode Enum. The angular drive mode to use. SLERP uses shortest spherical path, but will not work if any angular constraints are locked. Twist and Swing decomposes the path into the different angular degrees of freedom but may experience gimbal lock.

