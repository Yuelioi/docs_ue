# RemoveActorsfromDataLayers

移除数据层的角色

目标是数据层编辑子系统

## 图示

![]($-20221218-18351080.png)

## Inputs

在。Exec.

目标。数据层编辑子系统对象参考。

行为者。演员对象引用的数组。要移除到数据层的角色。

Data Layers: 数据层对象引用的数组。一个有效的DataLayers的列表。 

## Outputs

输出。执行：执行。

返回值。布尔值。如果至少有一个actor从至少一个DataLayer中被移除，则为true。如果没有一个actor属于任何指定的DataLayer，则返回false。
