# GetConstraintsfromBody

获取附着在一个主体上的所有约束

目标是骨架网组件

## 图示

![]($-20221218-20274568.png)

## Inputs

在。执行。

目标。骨骼网组件对象参考。

身体名称。名称。要获取所附约束的主体的名称。

父约束。返回约束，其中BodyName是约束的子女。

子约束。返回约束，其中BodyName是约束的父级。

包括终止的。布尔型。  

## Outputs

出：执行。

Out Constraints:Constraint Instance Accessor结构的数组。返回与参数相匹配的约束列表。
