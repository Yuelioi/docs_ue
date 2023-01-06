# GetAngularDriveMode

获取角度驱动模式（SLERP或Twist And Swing）。

目标是约束实例蓝图库

## 图示

![]($-20221218-20234201.png)

## Inputs

在。执行。

访问器。Constraint Instance Accessor结构（通过ref）。用于查询的约束访问器。  

## Outputs

出：执行。

输出驱动模式。EAngularDriveMode枚举。要使用的角度驱动模式。SLERP使用最短球面路径，但如果任何角度约束被锁定，则无法工作。扭转和摆动将路径分解为不同的角度自由度，但可能会出现万向节锁定。

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

