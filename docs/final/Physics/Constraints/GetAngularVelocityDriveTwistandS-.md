# GetAngularVelocityDriveTwistandS-

获取角速度扭转和摆动驱动是否启用。只有在角速度驱动模式被设置为扭曲和摆动时才相关。

目标是约束实例蓝图库

## 图示

![](/uploads/projects/ue-bluprint/20221218-20264210.png)

## Inputs

在。执行。

访问器。Constraint Instance Accessor 结构（通过 ref）。用于查询的约束访问器。

## Outputs

出：执行。

输出 启用扭转驱动。布尔值。表示是否应该启用扭曲轴的驱动。只有在 AngularDriveMode 被设置为 Twist 和 Swing 时才相关。

Out 启用摇摆驱动。布尔值。表示是否应该启用摆动轴的驱动。只有在 AngularDriveMode 被设置为 Twist 和 Swing 时才相关。

<hr>

Gets whether angular velocity twist and swing drive is enabled or not. Only relevant if the AngularDriveMode is set to Twist and Swing

Target is Constraint Instance Blueprint Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-20264210.png)

## Inputs

In: Exec.

Accessor: Constraint Instance Accessor Structure (by ref). Constraint accessor to query.

## Outputs

Out: Exec.

Out Enable Twist Drive: Boolean. Indicates whether the drive for the twist axis should be enabled. Only relevant if the AngularDriveMode is set to Twist and Swing.

Out Enable Swing Drive: Boolean. Indicates whether the drive for the swing axis should be enabled. Only relevant if the AngularDriveMode is set to Twist and Swing.
