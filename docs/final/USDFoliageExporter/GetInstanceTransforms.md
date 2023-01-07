# GetInstanceTransforms

返回给定级别上的特定 UFoliageType 的所有实例的变换。如果没有提供关卡，所有的实例都将被返回。使用 GetUsedFoliageTypes()来检索由一个特定角色管理的所有叶子类型。

目标是 Usd Exporter 蓝图库

## 图示

![](/uploads/projects/ue-bluprint/20221218-21211916.png)

## Inputs

在。执行。

演员。Instanced Foliage Actor 对象参考。

叶子类型。叶子类型对象参考。

Instances Level:水平对象参考。

## Outputs

出：执行。

返回值。变换的数组。返回给定级别上所有特定 UFoliageType 实例的变换。如果没有提供关卡，所有的实例都将被返回。使用 GetUsedFoliageTypes()来检索由一个特定角色管理的所有叶子类型。

<hr>

Returns the transforms of all instances of a particular UFoliageType on a given level. If no level is provided all instances will be returned.. Use GetUsedFoliageTypes() to retrieve all foliage types managed by a particular actor.

Target is Usd Exporter Blueprint Library

## 图示

![](/uploads/projects/ue-bluprint/20221218-21211916.png)

## Inputs

In: Exec.

Actor: Instanced Foliage Actor Object Reference.

Foliage Type: Foliage Type Object Reference.

Instances Level: Level Object Reference.

## Outputs

Out: Exec.

Return Value: Array of Transforms. Returns the transforms of all instances of a particular UFoliageType on a given level. If no level is provided all instances will be returned.. Use GetUsedFoliageTypes() to retrieve all foliage types managed by a particular actor..
