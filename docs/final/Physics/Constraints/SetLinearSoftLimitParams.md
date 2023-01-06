# SetLinearSoftLimitParams

设置约束线性软限制参数

目标是约束实例蓝图库

## 图示

![]($-20221218-20272893.png)

## Inputs

在。执行。

访问器。限制性实例访问器结构（通过引用）。约束访问器，以改变*。

软线性极限：布尔型。如果线性极限是软的，则为真。

线性极限刚度。Float（单精度）。软线性极限的刚度。只在软限制开启时使用（正值）。

线性极限阻尼。Float（单精度）。软线性极限的阻尼。只在软极限开启时使用（正值）。

线性极限恢复。Float（单精度）。控制违反约束时的弹跳量。回归值为1时，将以遇到极限时的相同速度回弹。值为0时，将停止运动。

线性极限接触距离。Float（单精度）。决定了在打开关节之前我们必须接近极限的程度。较大的值会更昂贵，但会在不违反约束方面做得更好。一个较小的值将更有效，但更容易违反。

## Outputs

出：执行。

Sets Constraint Linear Soft Limit parameters

Target is Constraint Instance Blueprint Library

## 图示

![]($-20221218-20272893.png)

## Inputs

In: Exec.

Accessor: Constraint Instance Accessor Structure (by ref). Constraint accessor to change *.

Soft Linear Limit: Boolean. True is the linear limit is soft.

Linear Limit Stiffness: Float (single-precision). Stiffness of the soft linear limit. Only used when Soft limit is on ( positive value ).

Linear Limit Damping: Float (single-precision). Damping of the soft linear limit. Only used when Soft limit is on ( positive value ).

Linear Limit Restitution: Float (single-precision). Controls the amount of bounce when the constraint is violated. A restitution value of 1 will bounce back with the same velocity the limit was hit. A value of 0 will stop dead..

Linear Limit Contact Distance: Float (single-precision). Determines how close to the limit we have to get before turning the joint on. Larger value will be more expensive, but will do a better job not violating constraints. A smaller value will be more efficient, but easier to violate..  

## Outputs

Out: Exec.

