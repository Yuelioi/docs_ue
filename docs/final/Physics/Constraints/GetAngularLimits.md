# GetAngularLimits

获取约束角运动范围

目标是约束实例蓝图库

## 图示

![](/uploads/projects/ue-bluprint/20221218-20263497.png)

## Inputs

在。执行。

访问器。Constraint Instance Accessor 结构（通过 ref）。查询的约束访问器。

## Outputs

出：执行。

摆动 1 运动类型。EAngularConstraintMotion 枚举。摆动运动的类型（第一轴）。

摆动 1 极限角度。浮点数（单精度）。以[0, 180]范围内的度数为单位的极限大小。

Swing 2Motion Type:EAngularConstraintMotion 枚举。摆动运动的类型（第二轴）。

摆动 2 极限角度。浮点数（单精度）。以[0, 180]范围内的度数为单位的极限大小。

扭转运动类型。EAngularConstraintMotion 枚举。扭转运动的类型。

扭转极限角度。Float（单精度）。以[0, 180]范围内的度数为单位的极限大小。

<hr>

Gets Constraint Angular Motion Ranges

Target is Constraint Instance Blueprint Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-20263497.png)

## Inputs

In: Exec.

Accessor: Constraint Instance Accessor Structure (by ref). Constraint accessor to query.

## Outputs

Out: Exec.

Swing 1Motion Type: EAngularConstraintMotion Enum. Type of swing motion ( first axis ).

Swing 1Limit Angle: Float (single-precision). Size of limit in degrees in [0, 180] range.

Swing 2Motion Type: EAngularConstraintMotion Enum. Type of swing motion ( second axis ).

Swing 2Limit Angle: Float (single-precision). Size of limit in degrees in [0, 180] range.

Twist Motion Type: EAngularConstraintMotion Enum. Type of twist motion.

Twist Limit Angle: Float (single-precision). Size of limit in degrees in [0, 180] range.
