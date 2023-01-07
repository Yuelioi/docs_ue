# SetLinearPlasticity

设置约束性线性可塑性的属性

目标是约束实例蓝图库

## 图示

![](/uploads/projects/ue-bluprint/20221218-20272545.png)

## Inputs

在。执行。

访问器。限制性实例访问器结构（通过引用）。要改变的约束访问器。

线性可塑性。布尔型。是否可以通过线性位移重置目标位置。

线性可塑性阈值。Float（单精度）。重置目标关节所需的离目标的 Delta。

塑性类型。EConstraintPlasticityType 枚举。

## Outputs

出：执行。

<hr>

Sets Constraint Linear Plasticity properties

Target is Constraint Instance Blueprint Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-20272545.png)

## Inputs

In: Exec.

Accessor: Constraint Instance Accessor Structure (by ref). Constraint accessor to change.

Linear Plasticity: Boolean. Whether it is possible to reset the target position from the linear displacement.

Linear Plasticity Threshold: Float (single-precision). Delta from target needed to reset the target joint.

Plasticity Type: EConstraintPlasticityType Enum.

## Outputs

Out: Exec.
