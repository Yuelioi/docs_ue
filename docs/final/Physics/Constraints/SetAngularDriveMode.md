# SetAngularDriveMode

在SLERP和Twist And Swing之间切换角度驱动模式

目标是约束实例蓝图库

## 图示

![]($-20221218-20270792.png)

## Inputs

在。执行。

访问器。限制性实例访问器结构（通过引用）。要改变的约束访问器。

驱动模式。EAngularDriveMode枚举。要使用的角度驱动模式。SLERP使用最短球面路径，但如果任何角度约束被锁定，则无法工作。扭转和摆动将路径分解为不同的角度自由度，但可能会出现万向节锁定。  

## Outputs

出：执行。

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

