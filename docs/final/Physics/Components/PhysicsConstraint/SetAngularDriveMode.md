# SetAngularDriveMode

在 SLERP 和 Twist And Swing 之间切换角度驱动模式

目标是物理约束组件

## 图示

![](/uploads/projects/ue-bluprint/20221218-20210022.png)

## Inputs

在。执行。

目标。物理约束组件对象参考。

驱动模式。EAngularDriveMode 枚举。要使用的角度驱动模式。SLERP 使用最短球面路径，但如果任何角度约束被锁定，则无法工作。扭转和摆动将路径分解为不同的角度自由度，但可能会出现万向节锁定。

## Outputs

出：执行。

<hr>

Switches the angular drive mode between SLERP and Twist And Swing

Target is Physics Constraint Component

## 图示

![](/uploads/projects/ue-bluprint/20221218-20210022.png)

## Inputs

In: Exec.

Target: Physics Constraint Component Object Reference.

Drive Mode: EAngularDriveMode Enum. The angular drive mode to use. SLERP uses shortest spherical path, but will not work if any angular constraints are locked. Twist and Swing decomposes the path into the different angular degrees of freedom but may experience gimbal lock.

## Outputs

Out: Exec.
