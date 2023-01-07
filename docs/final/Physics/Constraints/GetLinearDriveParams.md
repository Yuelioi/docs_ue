# GetLinearDriveParams

获取线性驱动器的驱动参数。

目标是约束实例蓝图库

## 图示

![](/uploads/projects/ue-bluprint/20221218-20265256.png)

## Inputs

在。执行。

访问器。Constraint Instance Accessor 结构（通过 ref）。用于查询的约束访问器。

## Outputs

出：执行。

输出位置强度。Float（单精度）。驱动器的位置强度（刚度）。

输出速度强度。Float（单精度）。驱动器的速度强度（阻尼）。

出力限制：浮点数（单精度）。驱动器施加的最大力。

<hr>

Gets the drive params for the linear drive.

Target is Constraint Instance Blueprint Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-20265256.png)

## Inputs

In: Exec.

Accessor: Constraint Instance Accessor Structure (by ref). Constraint accessor to query.

## Outputs

Out: Exec.

Out Position Strength: Float (single-precision). Positional strength for the drive (stiffness).

Out Velocity Strength: Float (single-precision). Velocity strength of the drive (damping).

Out Force Limit: Float (single-precision). Max force applied by the drive.
