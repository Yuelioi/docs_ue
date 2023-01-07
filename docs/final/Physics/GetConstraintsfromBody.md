# GetConstraintsfromBody

获取附着在一个主体上的所有约束

目标是骨架网组件

## 图示

![](/uploads/projects/ue-bluprint/20221218-20274568.png)

## Inputs

在。执行。

目标。骨骼网组件对象参考。

身体名称。名称。要获取所附约束的主体的名称。

父约束。返回约束，其中 BodyName 是约束的子女。

子约束。返回约束，其中 BodyName 是约束的父级。

包括终止的。布尔型。

## Outputs

出：执行。

Out Constraints:Constraint Instance Accessor 结构的数组。返回与参数相匹配的约束列表。

<hr>

Gets all the constraints attached to a body

Target is Skeletal Mesh Component

## 图示

![](/uploads/projects/ue-bluprint/20221218-20274568.png)

## Inputs

In: Exec.

Target: Skeletal Mesh Component Object Reference.

Body Name: Name. name of the body to get the attached constraints from.

Parent Constraints: Boolean. return constraints where BodyName is the child of the constraint.

Child Constraints: Boolean. return constraints where BodyName is the parent of the constraint.

Includes Terminated: Boolean.

## Outputs

Out: Exec.

Out Constraints: Array of Constraint Instance Accessor Structures. returned list of constraints matching the parameters.
