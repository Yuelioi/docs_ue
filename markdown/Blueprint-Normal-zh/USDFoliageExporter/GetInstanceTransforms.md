# GetInstanceTransforms

返回给定级别上的特定UFoliageType的所有实例的变换。如果没有提供关卡，所有的实例都将被返回。使用GetUsedFoliageTypes()来检索由一个特定角色管理的所有叶子类型。

目标是Usd Exporter蓝图库

## 图示

![]($-20221218-21211916.png)

## Inputs

在。执行。

演员。Instanced Foliage Actor对象参考。

叶子类型。叶子类型对象参考。

Instances Level:水平对象参考。  

## Outputs

出：执行。

返回值。变换的数组。返回给定级别上所有特定UFoliageType实例的变换。如果没有提供关卡，所有的实例都将被返回。使用GetUsedFoliageTypes()来检索由一个特定角色管理的所有叶子类型。
