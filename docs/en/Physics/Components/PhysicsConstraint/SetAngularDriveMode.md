# SetAngularDriveMode

Switches the angular drive mode between SLERP and Twist And Swing

Target is Physics Constraint Component

## 图示

![]($-20221218-20210022.png)

## Inputs

In: Exec.

Target: Physics Constraint Component Object Reference.

Drive Mode: EAngularDriveMode Enum. The angular drive mode to use. SLERP uses shortest spherical path, but will not work if any angular constraints are locked. Twist and Swing decomposes the path into the different angular degrees of freedom but may experience gimbal lock.  

## Outputs

Out: Exec.

