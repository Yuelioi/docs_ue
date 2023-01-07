# GetAngularSoftSwingLimitParams

获取约束角度软摇摆限制参数

目标是约束实例蓝图库

## 图示

![](/uploads/projects/ue-bluprint/20221218-20263865.png)

## Inputs

在。执行。

访问器。Constraint Instance Accessor 结构（通过 ref）。用于查询的约束访问器 \*。

## Outputs

出：执行。

软摇摆限制：布尔值。如果摆动限制是软的，则为真。

摆动极限刚度。Float（单精度）。软摇摆限制的刚度。只在软限制开启时使用（正值）。

摆动极限阻尼。Float（单精度）。软摇摆限制的阻尼。只在软限制开启时使用（正值）。

摆动极限重构。Float（单精度）。控制违反约束时的弹跳量。回归值为 1 时，将以遇到限制时的相同速度反弹。如果数值为 0，则会停止。

摆动极限接触距离。浮点（单精度）。决定了在打开关节之前我们要多接近极限。较大的值会更昂贵，但会在不违反约束方面做得更好。一个较小的值将更有效，但更容易违反。

<hr>

Gets Constraint Angular Soft Swing Limit parameters

Target is Constraint Instance Blueprint Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-20263865.png)

## Inputs

In: Exec.

Accessor: Constraint Instance Accessor Structure (by ref). Constraint accessor to query \*.

## Outputs

Out: Exec.

Soft Swing Limit: Boolean. True is the swing limit is soft.

Swing Limit Stiffness: Float (single-precision). Stiffness of the soft swing limit. Only used when Soft limit is on ( positive value ).

Swing Limit Damping: Float (single-precision). Damping of the soft swing limit. Only used when Soft limit is on ( positive value ).

Swing Limit Restitution: Float (single-precision). Controls the amount of bounce when the constraint is violated. A restitution value of 1 will bounce back with the same velocity the limit was hit. A value of 0 will stop dead..

Swing Limit Contact Distance: Float (single-precision). Determines how close to the limit we have to get before turning the joint on. Larger value will be more expensive, but will do a better job not violating constraints. A smaller value will be more efficient, but easier to violate..
