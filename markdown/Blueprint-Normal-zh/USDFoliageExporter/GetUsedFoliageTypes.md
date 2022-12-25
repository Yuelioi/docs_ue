# GetUsedFoliageTypes

返回一个特定的AInstancedFoliageActor使用的所有不同类型的UFoliageType资产。这个函数的存在是因为我们想检索一个角色上所有叶子类型的所有实例，但是我们。不能从UFUNCTIONs中返回嵌套容器，所以这个API的用户应该调用这个，然后再调用GetInstanceTransforms。

目标是Usd Exporter蓝图库

## 图示

![]($-20221218-21212139.png)

## Inputs

在。执行。

演员。Instanced Foliage Actor对象参考。  

## Outputs

出：执行。

返回值。叶子类型对象的数组参考。返回一个特定的AInstancedFoliageActor使用的所有不同类型的UFoliageType资产。这个函数的存在是因为我们想检索一个角色上所有叶子类型的所有实例，但是我们。不能从UFUNCTIONs返回嵌套容器，所以这个API的用户应该调用这个，然后再调用GetInstanceTransforms。
